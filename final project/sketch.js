var serial;
var portName = "COM3";
var sensorValue;

function setup() {
    createCanvas(640, 360);

    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open(portName);
}

function serverConnected() {
    console.log('connected to server.');
}

function portOpen() {
    console.log('the serial port opened.')
}

function portClose() {
    console.log('The serial port closed.');
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine(); // read the incoming string
    trim(currentString); // remove any trailing whitespace
    if (!currentString) {
        return; // if the string is empty, do no more
    }
    sensorValue = currentString; // save it for the draw method
}

function draw() {
    var c = map(sensorValue, 0, 1023, 0, 180);

    // sky
    background(c, c, c + 85);

    // sun
    var y = map(sensorValue, 0, 1023, height, 0);
    fill('gold');
    noStroke();
    ellipse(width / 2, y, 100);

    // ground
    fill(c, c + 75, c);
    rect(0, height * 0.75, width, height * 0.25);
}
