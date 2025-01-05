function getCityFromUser() {
  const city = document.querySelector("#city-input").value.toLowerCase();
  return city.split(" ").join("");
}

const focusInput = () => {
  window.addEventListener("load", function () {
    const inputField = document.querySelector("#city-input")
    inputField.focus();
  });
};

export { getCityFromUser, focusInput };
