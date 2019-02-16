const express = require("express");

const app = express();
app.use('/', express.static('public'));

app.listen('8888', () => {
    console.log("Listening on http://localhost:8888");
});

let temperature = 0;

app.get('/api/temperature', (request, response) => {
    response
        .status(200)
        .json({temperature})
        .end();
});

const five = require("johnny-five");
const board = new five.Board();

board.on("ready", function() {
    console.log("Board is ready");

    // Wiring : http://johnny-five.io/examples/temperature-ds18b20/
    // This requires OneWire support using the ConfigurableFirmata
    const thermometer = new five.Thermometer({
        controller: "DS18B20",
        pin: 2
    });
    thermometer.on("change", function() {
        console.log(`[${new Date()}] New temperature received : ${this.celsius} °C`);
        temperature = this.celsius;
    });
});