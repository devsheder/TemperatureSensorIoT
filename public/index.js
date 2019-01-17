var getTemperatureAndUpdateUI = (temperatureSpan) => {
    fetch('/api/temperature').then(response => {
        response.json().then(json => {
            temperatureSpan.innerHTML = json.temperature;
        });
    });
}

window.addEventListener('load', () => {
    let temperatureSpan = document.querySelector('#temperature');
    let refreshButton = document.querySelector('#refresh-temperature');

    getTemperatureAndUpdateUI(temperatureSpan);

    refreshButton.addEventListener("click", () => {
        getTemperatureAndUpdateUI(temperatureSpan);
    });
});