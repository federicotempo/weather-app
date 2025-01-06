import { convertToCelsius } from "./getWeather";

function getCityFromUser() {
  const city = document.querySelector("#city-input").value.toLowerCase();
  return city.split(" ").join("");
}

const renderData = (parameters) => {
  const [temperature, location, windSpeed, humidity, feelsLike] = parameters;

  document.querySelector("#temp").textContent = temperature;
  document.querySelector("#location").textContent = location;
  document.querySelector("#wind").textContent = windSpeed;
  document.querySelector("#humidity").textContent = humidity;
  document.querySelector("#feels-like").textContent = feelsLike;
};

const handleSwitchButton = () => {
  const switchButton = document.querySelector(".toggle-unit");
  switchButton.addEventListener("click", switchToCelsius);
};

const switchToCelsius = () => {
  const temperature = document.querySelector("#temp").textContent;
  const feelsLike = document.querySelector("#feels-like").textContent;

  if (temperature !== "--" && feelsLike !== "--") {
    const temperatureToCelsius = convertToCelsius(temperature);
    const feelsLikeToCelsisus = convertToCelsius(feelsLike);

    document.querySelector("#temp").textContent = `${temperatureToCelsius}°C`;
    document.querySelector(
      "#feels-like"
    ).textContent = `${feelsLikeToCelsisus}°C`;
  }
};

const focusInput = () => {
  window.addEventListener("load", function () {
    const inputField = document.querySelector("#city-input");
    inputField.focus();
  });
};

export { getCityFromUser, focusInput, renderData, handleSwitchButton };
