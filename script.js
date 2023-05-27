function convertTemperature() {
    var inputTemperature = document.getElementById("inputTemperature").value;
    var inputUnit = document.getElementById("inputUnit").value;
    var outputUnit = document.getElementById("outputUnit").value;
    var outputTemperature;
  
    if (inputUnit === outputUnit) {
      outputTemperature = inputTemperature;
    } else if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
      outputTemperature = (inputTemperature * 9/5) + 32;
    } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
      outputTemperature = (inputTemperature - 32) * 5/9;
    }
  
    document.getElementById("outputTemperature").value = outputTemperature.toFixed(2);
  }
  
  