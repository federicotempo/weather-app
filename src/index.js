import "./styles.css";
import {
  getWeather,
  getTemperature,
  getLocation,
  getFeelsLike,
  getHumidity,
  getWindSpeed,
  getConditions,
} from "./getWeather";
import {
  getCityFromUser,
  focusInput,
  renderData,
  handleSwitchButton,
  handleError,
} from "./domManipulation";

import { changeBackgroundImage } from "./getImage";

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

    if (data.error) {
      handleError();
    } else {
      const temperature = getTemperature(data);
      const location = getLocation(data);
      const windSpeed = getWindSpeed(data);
      const humidity = getHumidity(data);
      const feelsLike = getFeelsLike(data);
      const conditions = getConditions(data);

      const parameters = [
        temperature,
        location,
        windSpeed,
        humidity,
        feelsLike,
        conditions,
      ];
      renderData(parameters);
      changeBackgroundImage(conditions);

    }
  }
};

function initialize() {
  handleSearchButton();
  focusInput();
  handleSwitchButton();
}

initialize();
