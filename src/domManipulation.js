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

const focusInput = () => {
  window.addEventListener("load", function () {
    const inputField = document.querySelector("#city-input");
    inputField.focus();
  });
};

export { getCityFromUser, focusInput, renderData };
