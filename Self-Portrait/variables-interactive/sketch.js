/* slaf protrait with variables 

*/
var x = 200;
var y = 150;
var faceSize = 200;


function setup() {
	createCanvas(1000, 800);
}

function draw() {
	background("lightblue");
    circle (300, 200, 100);
	ellipse(320, 180, 100);
    arc(200, 200, 100, 100, 0, PI);
    rect(500, 50, 100, 100);

	// default
	ellipse(50, 50, 50);
    rect(50, 50, 100, 100);
}

// self portrait
function setup() {
	createCanvas(640, 360);
}

function draw() {
	background("white");
	noStroke();
	
	// face
	fill("lightpink");
	ellipse(200, 150, faceSize, faceSize/1);
    


	
	// draw circle at mouse position
    var x = mouseX;
    var y = mouseY;
    
	fill("white");
	ellipse(x, y, 40);
	ellipse(x+87, y, 40);
    
    fill("gray");
	ellipse(150, 150, 20, 20);
    ellipse(250, 150, 20, 20);
    
    
    // lips
  
  stroke('#f28865');
  arc(200, 150, 150, 100, .9, PI-.9);
  noStroke();
}


