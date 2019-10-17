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
    fill('plum');
}

function draw() {
    
    var logoName1Width = textWidth(logoName1);
    

    textSize(75);

    textStyle(ITALIC);
    stroke('lightblue');
    strokeWeight(8);
    textFont("roboto");

    textAlign(LEFT, CENTER);
    text(logoName1, logoName1X + 100, logoName1Y);
//    line(logoName1X + 300, logoName1Y, logoName1X + logoName1Width + 10, logoName1Y);

//    logoName1Y += 100;


    textAlign(LEFT, BOTTOM);
    text(logoName2, 150, 260);
    
    if (mouseX > width/2) {
        fill('red');
        console.log('MouseX is greater than Width/2')
        
    } else if (mouseX < width/2) {
        fill('blue');
        console.log('MouseX is less than Width/2')
    }


}

