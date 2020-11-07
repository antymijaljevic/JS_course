var guessItem = null;
var interval = 100;
var solution = null;
var results = [];

function setup() {
  createCanvas(800, 400);
}

function draw() {
  console.log(sin(frameCount));
  var GameScore = getGameScore(results);
 
  if (GameScore.loss === 3 || GameScore.total === 10) {
    displayGameOver(GameScore);
    return;
  }
  background(220);

  if (frameCount === 1 || frameCount % interval === 0) {
    solution = null;
    guessItem = new GuessItem(width / 2, height / 2, 10);
  }

  if (guessItem) {
    guessItem.render();
  }

  if (solution === true) {
    background(255);
  } else if (solution === false) {
    background(0);
  }
}

function displayGameOver(score) {
  push();
  background(255);
  textAlign(CENTER, CENTER);
  translate(width / 2, height / 2);

  fill(237, 34, 93);
  textSize(30);
  text('GAME OVER!', 0, 0);

  fill(0);
  translate(0, 36);
  text('You have ' + score.win + ' correct guesses', 0, 0);


  var alternatingValue = map((sin(frameCount / 10)), -1, 1, 0, 255);
  translate(0, 80);
  fill(237, 32, 94, alternatingValue);
  textSize(24);
  text('Press ENTER', 0, 0);
  pop();
}

function getGameScore(score) {
  var wins = 0;
  var losses = 0;
  var total = score.length;
  for (var i = 0; i < total; i++) {
    var item = score[i];
    if (item === true) {
      wins = wins + 1;
    } else {
       losses = losses + 1;
    }
  }
  return {win: wins, loss: losses, total: total};
}

function keyPressed() {
  if (guessItem != null) {
    console.log("You pressed: ", key);
    solution = guessItem.solve(key);
    if (solution) {
      results.push(true);
    } else {
      results.push(false);
    }
    guessItem = null;
  } else {
    console.log("nothing to be solved");
  }
}

function GuessItem(x, y, scl) {
  this.x = x;
  this.y = y;
  this.scale = scl;
  this.scaleIncrement = 0.5;
  this.content = getContent();
  this.alpha = 255;
  this.alphaDecrement = 3;
  this.solved;

  function getContent() {
    return String(parseInt(random(10), 10));
  }

  this.solve = function (input) {

    // console.log(typeof input);
    // console.log(typeof this.content);
    if (input === this.content) {
      this.solved = true;
    } else {
      this.solved = false;
    }
    return this.solved;
  }

  this.render = function() {
    if (this.solved === false) {
      return;
    }
    push()
    fill(0, this.alpha);
    textAlign(CENTER, CENTER);
    translate(this.x, this.y);
    scale(this.scale);
    text(this.content, 0, 0);
    this.scale = this.scale + this.scaleIncrement;
    this.alpha = this.alpha - this.alphaDecrement;
    pop();
  }
}