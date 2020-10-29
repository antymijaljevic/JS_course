function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  squared(10);
  console.log(x);
}

function squared(num) {
  var result = num * num;
  fill(128, 0, 0);
  textSize(66);
  textAlign(CENTER, CENTER);
  text(result, width /2, height /2)

  return result;
}