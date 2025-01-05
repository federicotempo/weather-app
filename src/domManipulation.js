function getCity() {
  const city = document
    .querySelector("#city-input")
    .value.toLowerCase()
    .split("")
    .join("");
  return city;
}
