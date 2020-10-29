//global variable for mouseIsPressed
var toggle = true;



function setup() {
  createCanvas(800, 300);
  rectMode(CENTER);
}


function draw() {
  if (mouseIsPressed === true){ //if mouse is pressed
    toggle = !toggle; //inverting value of var toggle
  }

  if (toggle === true){
    background(1, 186, 240);
  } else {
    background(250, 150, 50);
  }

  //declaration of variable
  var x = width / 2; //control position of objects
  var y = height / 2;
  var size = 200; //control size of shapes

  //circle
  fill(237, 34, 93);
  noStroke();
  ellipse(x, y, size, size);

  //rectangle
    fill(255);
    rect(x, y, size * 0.75, size * 0.15);
}
