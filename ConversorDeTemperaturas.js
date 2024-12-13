function convertirTemperatura() {
    const entrada = document.getElementById("input-temperature").value;

    // entrada a  número
    const temperaturaCelsius = parseFloat(entrada);

    // Se valida que la entrada sea un número válido
    if (isNaN(temperaturaCelsius)) {
        alert("Ups! Este dato no es válido. Por favor, ingresa un número.");
        return;
    }

    // Conversiones
    const temperaturaFahrenheit = (temperaturaCelsius * 9 / 5) + 32;
    const temperaturaKelvin = temperaturaCelsius + 273.15;

    document.getElementById("fahrenheit-result").textContent = `${temperaturaFahrenheit.toFixed(2)} °F`;
    document.getElementById("kelvin-result").textContent = `${temperaturaKelvin.toFixed(2)} K`;
}