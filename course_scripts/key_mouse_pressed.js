mouse pressed function

var toggle = true;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  if(toggle === true) {
    background(220);
  } else {
    background(150, 150, 22);
  }
}

function mousePressed() {
  toggle = !toggle;
  console.log(toggle);
}


//key is pressed

var pressed = false;
var colors = [];

function setup() {
  createCanvas(800, 400);
  background(0);
  
  colors = [
    [184,244,255],
    [160,159,230],
    [204,117,154],
    [79,170,161],
    [237,255,201],
  ];
  
  noStroke();

}

function draw() {
  if (pressed === true) {
    var randomIndex = parseInt(random(colors.length), 10);
    console.log(randomIndex);
    var randomSize = random(200);
    
    fill(colors[randomIndex]);
    ellipse(random(width), random(height), randomSize, randomSize);
  }
  pressed = false;
}

function keyPressed() {
  pressed = true;
}



//key code

function setup() {
  createCanvas(800, 400);
  background(0);

}

function draw() {

}

function keyPressed() {
  // if (keyCode === ENTER) {
  //   console.log("Enter key is pressed!")
  // }
  console.log(key);
}

