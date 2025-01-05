
function getCity() {
  const city = document.querySelector("#city-input").value
  .toLowerCase()
  .split("")
  .join("");
  return city;
}

async function getWeather(city) {
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=2VZAENS7BKUDBFCYA3CCTQXQC`
    );
    let data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.log("Error: ", error);
  }
}

const getTemperature = (data) => {
  const temperature = data.currentConditions.temp;
  return temperature;
};

const getLocation = (data) => {
  const location = data.resolvedAddress;
  return location;
}

const getFeelsLike = (data) => {
  const feelsLike = data.currentConditions.feelslike;
  return feelsLike;
}

const getWindSpeed = (data) => {
  const windSpeed = data.currentConditions.windspeed;
  return windSpeed;
}

const getHumidity = (data) => {
  const humidity = data.currentConditions.humidity;
  return humidity;
}

const convertToCelsius = (fahrenheit) => {
  const celsius = (((fahrenheit - 32) * 5) / 9).toFixed(1);
  return celsius;
};

export { getWeather, getTemperature, convertToCelsius, getCity };
