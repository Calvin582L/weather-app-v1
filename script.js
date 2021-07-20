String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  if (min < 10 && min >= 0){
    min = "0" + min;
  }
  var sec = a.getSeconds();
  if (sec < 10 && sec >= 0){
    sec = "0" + sec;
  }
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
  }

document.getElementById("myButton").onclick = async function(){
  const city_input = document.getElementById("myText").value;
  const api_url = 'https://api.openweathermap.org/data/2.5/weather?q='+city_input+'&appid=e934b1176a03e23ea892499976e72a44&units=metric';
  const response = await fetch (api_url);
  const data = await response.json();
  if (data.cod == "404"){
    document.getElementById("err").textContent = "Error, city not found!";
    document.getElementById("time").style.display = "none";
    document.getElementById("date").style.display = "none";
    document.getElementById("city").style.display = "none";
    document.getElementById("icon").style.display = "none";
    document.getElementById("description").style.display = "none";
    document.getElementById("temperature").style.display = "none";
    document.getElementById("feelslike").style.display = "none";
    document.getElementById("hightemp").style.display = "none";
    document.getElementById("lowtemp").style.display = "none";
    document.getElementById("windspeed").style.display = "none";
  }
  const city = data.name + ", " + data.sys.country;
  const temp = data.main.temp.toFixed();
  const feels_like = "Feels like" + " " + data.main.feels_like.toFixed() + "°C";
  const temp_min = data.main.temp_min.toFixed();
  const temp_max = data.main.temp_max.toFixed();
  const status = data.weather[0].main;
  const description = data.weather[0].description;
  icon = data.weather[0].icon;
  const coords = data.coord.lat + ", " + data.coord.lon;
  const wind_speed = data.wind.speed + "m/s";

  var d = new Date(); 
  var objToday = new Date(timeConverter(((d.getTime()-d.getMilliseconds())/1000) + data.timezone)),
	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	dayOfWeek = weekday[objToday.getUTCDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = today + ( objToday.getUTCDate() < 10) ? '0' + objToday.getUTCDate() + domEnder : objToday.getUTCDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getUTCMonth()],
	curYear = objToday.getUTCFullYear(),
	curHour = objToday.getUTCHours() > 12 ? objToday.getUTCHours() - 12 : (objToday.getUTCHours() < 10 ? "0" + objToday.getUTCHours() : objToday.getUTCHours()),
	curMinute = objToday.getUTCMinutes() < 10 ? "0" + objToday.getUTCMinutes() : objToday.getUTCMinutes(),
	curSeconds = objToday.getUTCSeconds() < 10 ? "0" + objToday.getUTCSeconds() : objToday.getUTCSeconds(),
	curMeridiem = objToday.getUTCHours() > 12 ? "PM" : "AM";
  var today = "Local Time: " + curHour + ":" + curMinute + ":" + curSeconds + curMeridiem;
  var date = dayOfWeek + ", " + curMonth + " " + dayOfMonth + " " + curYear;
 
  document.getElementById("time").textContent = today;
  document.getElementById("date").textContent = date;
  document.getElementById("city").textContent = city + " " + coords;
  document.getElementById("description").textContent = description.capitalize();
  document.getElementById("temperature").textContent = temp + "°C";
  document.getElementById("feelslike").textContent = feels_like;
  document.getElementById("hightemp").textContent = "Max Temp: " + temp_max + "°C";
  document.getElementById("lowtemp").textContent = "Min Temp: " + temp_min + "°C";
  document.getElementById("windspeed").textContent = "Wind Speed: " + wind_speed;

if (icon == "01d"){
  document.getElementById("icon").innerHTML = '<img src="icons/01d.png" alt="Clear Sky">'
}
else if (icon == "01n"){
  document.getElementById("icon").innerHTML = '<img src="icons/01n.png" alt="Clear Sky">'
}
else if (icon == "02d"){
  document.getElementById("icon").innerHTML = '<img src="icons/02d.png" alt="Broken Clouds">'
}
else if (icon == "02n"){
  document.getElementById("icon").innerHTML = '<img src="icons/02n.png" alt="Broken Clouds">'
}
else if (icon == "03d"){
  document.getElementById("icon").innerHTML = '<img src="icons/03d.png" alt="Scattered Clouds">'
}
else if (icon == "03n"){
  document.getElementById("icon").innerHTML = '<img src="icons/03n.png" alt="Scattered Clouds">'
}
else if (icon == "04d"){
  document.getElementById("icon").innerHTML = '<img src="icons/04d.png" alt="Broken Clouds">'
}
else if (icon == "04n"){
  document.getElementById("icon").innerHTML = '<img src="icons/04n.png" alt="Broken Clouds">'
}
else if (icon == "09d"){
  document.getElementById("icon").innerHTML = '<img src="icons/09d.png" alt="Shower Rain">'
}
else if (icon == "09n"){
  document.getElementById("icon").innerHTML = '<img src="icons/09n.png" alt="Shower Rain">'
}
else if (icon == "10d"){
  document.getElementById("icon").innerHTML = '<img src="icons/10d.png" alt="Rain">'
}
else if (icon == "10n"){
  document.getElementById("icon").innerHTML = '<img src="icons/10n.png" alt="Rain">'
}
else if (icon == "11d"){
  document.getElementById("icon").innerHTML = '<img src="icons/11d.png" alt="Thunderstorm">'
}
else if (icon == "11n"){
  document.getElementById("icon").innerHTML = '<img src="icons/11n.png" alt="Thunderstorm">'
}
else if (icon == "13d"){
  document.getElementById("icon").innerHTML = '<img src="icons/13d.png" alt="Snow">'
}
else if (icon == "13n"){
  document.getElementById("icon").innerHTML = '<img src="icons/13n.png" alt="Snow">'
}
else if (icon == "50d"){
  document.getElementById("icon").innerHTML = '<img src="icons/50d.png" alt="Mist">'
}
else if (icon == "50n"){
  document.getElementById("icon").innerHTML = '<img src="icons/50n.png" alt="Mist">'
}
}



