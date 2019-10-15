// Global Scope
var logoName1 = "CODE";
var logoName1X = 50;
var logoName1Y = 150;

var logoName2 = "ECSTASY";

function setup() {
    var canvas = createCanvas(640, 360);
    // fix for stroke edges
    canvas.drawingContext.miterLimit = 2;
    background(254);

    var logoName1Width = textWidth(logoName1);

    textSize(75);
    fill('plum');
    textStyle(ITALIC);
    stroke('lightblue');
    strokeWeight(8);
    textFont("roboto");

    textAlign(LEFT, CENTER);
    text(logoName1, logoName1X, logoName1Y);
    line(logoName1X - 10, logoName1Y, logoName1X + logoName1Width + 180, logoName1Y);

    logoName1Y += 100;


    textAlign(LEFT, BOTTOM);
    text(logoName2, 50, 260);
}


