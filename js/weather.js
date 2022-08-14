const API_KEY = "48e43dc6f5589b7bbacb1680e276510b";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${parseInt(data.main.temp, 10)}℃ ${
        data.weather[0].main
      }`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. Please approve access to location.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
