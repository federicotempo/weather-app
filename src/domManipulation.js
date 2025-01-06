import { convertToCelsius, convertToFahrenheit } from "./getWeather";

function getCityFromUser() {
  const city = document.querySelector("#city-input").value.toLowerCase();
  return city.split(" ").join("");
}

const renderData = (parameters) => {
  const [temperature, location, windSpeed, humidity, feelsLike] = parameters;

  document.querySelector("#error-message").classList.remove("show");
  document.querySelector(".toggle-unit").textContent = "Switch to °C";

  document.querySelector("#temp").textContent = temperature;
  document.querySelector("#temp-units").textContent = "°F";
  document.querySelector("#location").textContent = location;
  document.querySelector("#wind").textContent = `${windSpeed} mph`;
  document.querySelector("#humidity").textContent = `${humidity}%`;
  document.querySelector("#feels-like").textContent = feelsLike;
  document.querySelector("#feels-like-units").textContent = "°F";
};

const handleSwitchButton = () => {
  const switchButton = document.querySelector(".toggle-unit");
  switchButton.addEventListener("click", changeUnits);
};

const changeUnits = () => {
  const temperature = document.querySelector("#temp").textContent;
  const feelsLike = document.querySelector("#feels-like").textContent;
  const currentUnit = document.querySelector("#temp-units").textContent;
  let newUnit = "";

  if (temperature === "--") {
    return;
  }

  if (currentUnit === "°F") {
    const celsiusTemp = convertToCelsius(temperature);
    const celsiusFeelsLike = convertToCelsius(feelsLike);
    newUnit = "°C";

    document.querySelector("#temp").textContent = celsiusTemp;
    document.querySelector("#temp-units").textContent = newUnit;
    document.querySelector("#feels-like").textContent = celsiusFeelsLike;
    document.querySelector("#feels-like-units").textContent = newUnit;
    document.querySelector(".toggle-unit").textContent = "Switch to °F";
  } else {
    const fahrenheitTemp = convertToFahrenheit(temperature);
    const fahrenheitFeelsLike = convertToFahrenheit(feelsLike);
    newUnit = "°F";

    document.querySelector("#temp").textContent = fahrenheitTemp;
    document.querySelector("#temp-units").textContent = newUnit;
    document.querySelector("#feels-like").textContent = fahrenheitFeelsLike;
    document.querySelector("#feels-like-units").textContent = newUnit;
    document.querySelector(".toggle-unit").textContent = "Switch to °C";
  }
};

const handleError = () => {
  document.querySelector("#error-message").classList.add("show");
};

const focusInput = () => {
  window.addEventListener("load", function () {
    const inputField = document.querySelector("#city-input");
    inputField.focus();
  });
};

export {
  getCityFromUser,
  focusInput,
  renderData,
  handleSwitchButton,
  handleError,
};
