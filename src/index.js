import "./styles.css";
import { getWeather, getTemperature, convertToCelsius } from "./getWeather";
import { getCityFromUser } from "./domManipulation";

const handleSearchButton = () => {
  const searchButton = document.querySelector(".search-button");
  searchButton.addEventListener("click", search);
};

const search = async () => {
  const city = getCityFromUser();
  console.log(city);
};

handleSearchButton();

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
