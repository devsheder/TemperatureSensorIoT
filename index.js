const express = require("express");
const http = require("http");

const app = express();
app.use('/', express.static('public'));

app.listen('8888', () => {
    console.log("Listening on http://localhost:8888");
});

app.get('/api/temperature', (request, response) => {
    let temperature = Math.floor(Math.random() * (30 - 20) + 20);
    response
        .status(200)
        .json({temperature})
        .end();
});

/*
// waiting for issue : https://github.com/rwaldron/johnny-five/issues/1548
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
        console.log(this.celsius + "°C");
    });
});
*/