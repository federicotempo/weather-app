import "./styles.css";
import {
  getWeather,
  getTemperature,
  getLocation,
  getFeelsLike,
  getHumidity,
  getWindSpeed,
} from "./getWeather";
import {
  getCityFromUser,
  focusInput,
  renderData,
  handleSwitchButton,
} from "./domManipulation";

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
  if (city !== "") {
    const data = await getWeather(city);
    const temperature = getTemperature(data);
    const location = getLocation(data);
    const windSpeed = getWindSpeed(data);
    const humidity = getHumidity(data);
    const feelsLike = getFeelsLike(data);

    const parameters = [temperature, location, windSpeed, humidity, feelsLike];
    renderData(parameters);
  }
};

function initialize() {
  handleSearchButton();
  focusInput();
  handleSwitchButton();
}

initialize();
