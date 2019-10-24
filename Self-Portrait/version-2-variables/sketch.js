function setup() {
    createCanvas(600, 400);
}

function draw() {
    var backgroundColor = 'lightblue';
    var lavenderColor = "LAVENDER";
    
    var bodyX = 200;
    var bodyY = 395;
    var bodyW = 120;
    var bodyH = 240;
    
    
    background(backgroundColor);

    fill(lavenderColor);
    noStroke();

    // Body
    fill('grey');
    ellipse(bodyX, bodyY, bodyW, bodyH);

    // face
    fill('white')
    ellipse(200, 184, 142, 200);

    // Eyebrow Stroke
    stroke(89, 46, 20);
    // Left Eyebrow
    arc(170, 155, 20, 10, 996, 760);

    // Right Eyebrow
    arc(226, 155, 20, 10, 996, 760);

    // eyes
    fill('black');
    // Left Eye
    ellipse(171, 166, 15);
    
    // Right Eye
    ellipse(225, 166, 15);
    
    //Nose
    fill(247, 221, 155)
    triangle(190, 200, 210, 200, 200, 160);

    //mouth
    fill(138, 61, 61);
    arc(200, 210, 40, 40, 0, PI);
    triangle(190, 200, 210, 200, 200, 160);

    //hair
    fill(87, 60, 15);
    arc(200, 130, 120, 120, PI, TWO_PI);
}
