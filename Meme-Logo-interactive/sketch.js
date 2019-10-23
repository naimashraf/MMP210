// Global Scope
var logoName1 = "CODE";
var logoName1X = 50;
var logoName1Y = 150;
var logoSpeed = 5;

var logoName2 = "ECSTASY";
//var logoName2X = 150;
//var logoName2Y = 260;
//var logoName2XSpeed = 2.8;
//var logoName2YSpeed = 2.2;
//var logoname2XDirection = 1;
//var logoname2YDirection = 1;
//var logoname2Rad = 60;

function setup() {
    var canvas = createCanvas(640, 360);
    // fix for stroke edges
    canvas.drawingContext.miterLimit = 2;
    background(254);
    fill('plum');
}

function draw() {
    
    var logoName1Width = textWidth(logoName1);
    
    background (254);
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
    logoName1X += logoSpeed;
    if (logoName1X > width || logoName1X <-100) {
        logoSpeed *= -1;
    }
}
    
    //logoName2X = logoName2X + logoName2XSpeed * logoname2XDirection;
    //logoName2y = logoName2y + logoName2ySpeed * logoName2YDirection;
    
 //   if (logoName2X> width - logoname2Rad || logoName2X < logoname2Rad)
    //{ logoname2XDirection *= -1;}

 //if (logoName2y> height  - logoname2Rad || logoName2y < logoname2Rad) 
    // {
       //  logoname2YDirection *= -1;
     //}



 //let rad = 60; // Width of the shape
//let xpos, ypos; // Starting position of shape

//let xspeed = 2.8; // Speed of the shape
//let yspeed = 2.2; // Speed of the shape

//let xdirection = 1; // Left or Right
//let ydirection = 1; // Top to Bottom
//// Update the position of the shape
 // xpos = xpos + xspeed * xdirection;
  //ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  //if (xpos > width - rad || xpos < rad) {
   // xdirection *= -1;
  //}
 // if (ypos > height - rad || ypos < rad) {
 //   ydirection *= -1;
 // }

  // Draw the shape
 // ellipse(xpos, ypos, rad, rad);