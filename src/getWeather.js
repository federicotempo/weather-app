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

const convertToCelsius = (fahrenheit) => {
  const celsius = (((fahrenheit - 32) * 5) / 9).toFixed(1);
  return celsius;
};

export { getWeather, getTemperature, convertToCelsius };
