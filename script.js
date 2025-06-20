function convertTemperature() {
  const input = document.getElementById("temperature").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const resultDiv = document.getElementById("result");

  if (input === "" || isNaN(input)) {
    resultDiv.innerHTML = "Please enter a valid number.";
    return;
  }

  const temp = parseFloat(input);
  let c, f, k;

  if (unit === "celsius") {
    c = temp;
    f = (temp * 9/5) + 32;
    k = temp + 273.15;
  } else if (unit === "fahrenheit") {
    f = temp;
    c = (temp - 32) * 5/9;
    k = c + 273.15;
  } else {
    k = temp;
    c = temp - 273.15;
    f = (c * 9/5) + 32;
  }

  resultDiv.innerHTML = `
    <p><bold>Celsius:</bold> ${c.toFixed(2)} °C</p>
    <p><bold>Fahrenheit:</bold> ${f.toFixed(2)} °F</p>
    <p><bold>Kelvin:</bold> ${k.toFixed(2)} K</p>
  `;
}
