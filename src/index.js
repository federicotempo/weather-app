import "./styles.css";
import {
  getWeather,
  getTemperature,
  convertToCelsius,
  getLocation,
  getFeelsLike,
  getHumidity,
  getWindSpeed,
} from "./getWeather";
import { getCityFromUser, focusInput, renderData } from "./domManipulation";

const handleSearchButton = () => {
  const searchButton = document.querySelector(".search-button");
  searchButton.addEventListener("click", search);
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      search();
    }
  });
};

const search = async () => {
  const city = getCityFromUser();
  const data = await getWeather(city);
  const temperature = getTemperature(data);
  const location = getLocation(data);
  const windSpeed = getWindSpeed(data);
  const humidity = getHumidity(data);
  const feelsLike = getFeelsLike(data);

  const parameters = [temperature, location, windSpeed, humidity, feelsLike];
  renderData(parameters);
};

function initialize() {
  handleSearchButton();
  focusInput();
}

initialize();

// let city = getCity();

// const data = await getWeather(city);
// const temperature = getTemperature(data);
// const temperatureInCelsius = convertToCelsius(temperature);
// console.log(temperature);
// console.log(temperatureInCelsius);
/* 

Usar API Visual Crossing
Buscar una ubicación específica y alternar entre mostrar la temperatura en Celsius y Fahrenheit.
Cambiar aspecto de la pagina según la temperatura o el tiempo.
Usar async/await.


*/
