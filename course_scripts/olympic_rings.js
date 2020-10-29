function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(230, 10);

  //blue ring
  stroke(0, 0, 0);
  strokeWeight(0.1);
  fill(0, 0, 255);
  ellipse(150, 150, 150, 150);
  fill(230);
  ellipse(150, 150, 125, 125);

  
  //black ring
  stroke(0, 0, 0);
  strokeWeight(0.1);
  fill(0, 0, 0);
  ellipse(315, 150, 150, 150);
  fill(230);
  ellipse(315, 150, 125, 125);


  //red ring
  stroke(0, 0, 0);
  strokeWeight(0.1);
  fill(255, 0, 0);
  ellipse(480, 150, 150, 150);
  fill(230);
  ellipse(480, 150, 125, 125);

  
  //yellow
  stroke(0, 0, 0);
  strokeWeight(0.1);
  fill(255, 255, 0);
  ellipse(237, 220, 150, 150);
  fill(230);
  ellipse(237, 220, 125, 125);

  
  //green
  
  stroke(0, 0, 0);
  strokeWeight(0.1);
  fill(0, 255, 0);
  ellipse(403, 220, 150, 150);
  fill(230);
  ellipse(403, 220, 125, 125);
}