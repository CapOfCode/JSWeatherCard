let button = document.querySelector('.searchIcon');
let imgEl = document.getElementById('img') //img
let searchCity = document.getElementById('city');
let cityNameEl = document.getElementById('cityname'); //cityname
let tempEl = document.getElementById('temp'); //temp 
let humidityEl = document.getElementById('humidity'); //humidity 
let windEl = document.getElementById('wind'); //wind

button.addEventListener('click', function(){
  button.style.transform = "scale(1.2)";
    setTimeout(function(){
      button.style.transform = "scale(1)";
    }, 100) 
    getWeatherData();
});
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    button.style.transform = "scale(1.2)";
    setTimeout(function(){
      button.style.transform = "scale(1)";
    }, 100) 
    getWeatherData();
  }
});






function getWeatherData() {

  let city = searchCity.value
  let response = fetch(`https://api.openweathermap.org/data/2.5/weather?appid=44c8cd4cacc8eeaaa0e24c5d38459c68&units=metric&q=${city}`)
  

  .then((response) => {
    if (response.status == 404 ){
      alert("City Not Found")
    }
    return response.json();
  })
  .then((weatherData) => {

    let img = weatherData["weather"][0]["main"]
    let temp = Math.round(weatherData.main.temp);
    let humidity = weatherData.main.humidity
    let cityName = weatherData.name
    let windSpeed = weatherData.wind.speed

    cityNameEl.innerText = cityName;
    humidityEl.innerText = humidity;
    tempEl.innerText = temp;
    windEl.innerText = windSpeed;
    imgEl.setAttribute("src", img.toLowerCase() + ".png");
  });
}


//Setting defult value of search input box//
window.onload = function onloadCity(){
  document.getElementById("city").value = "Dhaka";
  getWeatherData();
}