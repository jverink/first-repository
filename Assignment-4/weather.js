window.onload = function(){
	document.getElementById('city').value=localStorage.getItem('CITY');
	document.getElementById('state').value=localStorage.getItem('STATE');
	if (localStorage.getItem('CURRENTTEMP')==='true'){
		document.getElementById('curTemp').checked=true;
	}
	if (localStorage.getItem('MINTEMP')==='true'){
		document.getElementById('minTemp').checked=true;
	}
	if (localStorage.getItem('MAXTEMP')==='true'){
		document.getElementById('maxTemp').checked=true;
	}
	if (localStorage.getItem('WIND')==='true'){
		document.getElementById('windSpeed').checked=true;
	}
}
var request = new XMLHttpRequest();

function showWeather(){

	  var weather=JSON.parse(request.responseText);
	  var ct = weather.main.temp;
	  var mt = weather.main.temp_max;
	  var nt = weather.main.temp_min;
	  var wd = weather.wind.speed;
    
      document.getElementById('selCity').innerHTML += document.getElementById('city').value;
      document.getElementById('selState').innerHTML += document.getElementById('state').value;
      if (document.getElementById('curTemp').checked){
      	document.getElementById('selTemp').innerHTML += ct;
      }
      if (document.getElementById('maxTemp').checked){
      	document.getElementById('selMax').innerHTML += mt;
      }
      if (document.getElementById('minTemp').checked){
      	document.getElementById('selMin').innerHTML += nt;
      }
      if (document.getElementById('windSpeed').checked){
      	document.getElementById('selWind').innerHTML += wd;
      }
}

function getWeather(){
	var parameters = (document.getElementById('city').value) + ',' + (document.getElementById('state').value);
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + parameters + '&units=imperial';
    request.open('GET', url, false);
    request.send();
    request.onreadystatechange = showWeather();
}

function saveSettings(){
  localStorage.setItem('CITY', document.getElementById('city').value);
  localStorage.setItem('STATE', document.getElementById('state').value);
  localStorage.setItem('CURRENTTEMP', document.getElementById('curTemp').checked);
  localStorage.setItem('MINTEMP', document.getElementById('minTemp').checked);
  localStorage.setItem('MAXTEMP', document.getElementById('maxTemp').checked);
  localStorage.setItem('WIND', document.getElementById('windSpeed').checked);
}

