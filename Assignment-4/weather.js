function saveSettings(){
  localStorage.setItem('city', document.getElementById('city').value);
  localStorage.setItem('state', document.getElementById('state').value);
  localStorage.setItem('current temp', document.getElementById('curTemp').value);
  localStorage.setItem('min temp', document.getElementById('minTemp').value);
  localStorage.setItem('max temp', document.getElementById('maxTemp').value);
  localStorage.setItem('wind', document.getElementById('windSpeed').value);
}
