//rotate and translate

function setup() {
    createCanvas(800, 400);
    rectMode(CENTER);
    noStroke();
    angleMode(DEGREES);
    frameRate(10);
  }
  
  function draw() {
    background(200);
    fill(237,34,93);
    // translate(150, 0);
    // rotate(5);
    translate(width / 2, height /2)
    rotate(60);
    rect(0, 0, 50, 50);
    // rect(width /2 + 50, height /2 + 50, 50);
    
  }
  
  //push & pop
  
  function setup() {
    createCanvas(800, 400);
    rectMode(CENTER);
    noStroke();
    angleMode(DEGREES);
    frameRate(10);
  }
  
  function draw() {
    background(200);
    fill(237,34,93);
  
    push()
    translate(width / 2, height /2)
    rotate(40);
    rect(0, 0, 150, 150);
    pop();
    
    fill(255);
    rectC(113, 225, 20, 20, 5);
  }
  
  function rectC(x, y, width, height, rotation) {
    if (rotation === undefined) {
      rotation = 0;
    }
    push();
    translate(x, y);
    rotate(rotation);
    rect(0, 0, width, height);
    pop();
  }