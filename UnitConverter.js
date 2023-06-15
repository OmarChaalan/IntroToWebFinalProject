function convert() {
  let conversionType = document.querySelector(
    'input[name="conversion"]:checked'
  ).value;

  let inputValue = document.getElementById("inputConvert").value;
  let convertedValue;

  if (conversionType === "temp") {
    convertedValue = ((parseInt(inputValue) - 32) * 5) / 9;
    document.getElementById(
      "result"
    ).innerText = `${inputValue} °F is ${convertedValue} in °C`;
  } else if (conversionType === "distance") {
    convertedValue = parseInt(inputValue) * 0.621371;
    document.getElementById(
      "result"
    ).innerText = `${inputValue} Km is ${convertedValue} in Miles`;
  } else if (conversionType === "height") {
    convertedValue = parseInt(inputValue) * 3.28084;
    document.getElementById(
      "result"
    ).innerText = `${inputValue} Meters is ${convertedValue} in Feet`;
  }
}
