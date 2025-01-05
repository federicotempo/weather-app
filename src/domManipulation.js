function getCityFromUser() {
  const city = document.querySelector("#city-input").value.toLowerCase();
  return city.split(" ").join("");
}

export { getCityFromUser };
