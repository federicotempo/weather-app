async function getWeather(city) {
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=2VZAENS7BKUDBFCYA3CCTQXQC`
    );

    if (!response.ok) {
      throw new Error(`Ciudad inválida. Código: ${response.status}`);
    }

    let data = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    return { error: "Por favor, ingresa una ciudad válida" };
  }
}

const getTemperature = (data) => {
  const temperature = data.currentConditions.temp;
  return temperature;
};

const getLocation = (data) => {
  const location = data.resolvedAddress;
  return location;
};

const getFeelsLike = (data) => {
  const feelsLike = data.currentConditions.feelslike;
  return feelsLike;
};

const getWindSpeed = (data) => {
  const windSpeed = data.currentConditions.windspeed;
  return windSpeed;
};

const getHumidity = (data) => {
  const humidity = data.currentConditions.humidity;
  return humidity;
};

const getConditions = (data) => {
  const conditions = data.currentConditions.conditions;
  return conditions;
}

const convertToCelsius = (fahrenheit) => {
  const celsius = (((fahrenheit - 32) * 5) / 9).toFixed(1);
  return celsius;
};

const convertToFahrenheit = (celsius) => {
  const fahrenheit = ((celsius * 9) / 5 + 32).toFixed(1);
  return fahrenheit;
};

export {
  getWeather,
  getTemperature,
  convertToCelsius,
  getLocation,
  getFeelsLike,
  getHumidity,
  getWindSpeed,
  getConditions,
  convertToFahrenheit,
};
