
let city = "london";

async function getWeather(city) {
  try {
    let response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=2VZAENS7BKUDBFCYA3CCTQXQC`
    );

    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error: ", error);
  }
}

getWeather(city);