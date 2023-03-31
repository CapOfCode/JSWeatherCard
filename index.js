let button = document.querySelector('.searchIcon');
let searchCity = document.getElementById('city');

button.addEventListener('click', getWeatherData);

function getWeatherData() {
    let city = searchCity.value

  let response = fetch(`https://api.openweathermap.org/data/2.5/weather?appid=44c8cd4cacc8eeaaa0e24c5d38459c68&units=metric&q=${city}`)
  

  .then((response) => response.json())
  .then((weatherData) => {
    let temp = weatherData.main.temp;
    let humidity = weatherData.main.humidity
    let cityName = weatherData.name
    let windSpeed = weatherData.wind.speed


    console.log(temp);
    console.log(humidity);
    console.log(cityName);
    console.log(windSpeed);



  });
}
