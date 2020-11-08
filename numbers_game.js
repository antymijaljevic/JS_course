var guessItem = null;
var interval = 60;
var solution = null;
var results = [];
var gameOver = false;

function setup() {
  createCanvas(1400, 720);
}

function draw() {
  var GameScore = getGameScore(results);
 
  if (GameScore.loss === 3 || GameScore.total === 10) {
    gameOver = true;
    displayGameOver(GameScore);
    return;
  }

  background(0);
  if (frameCount === 1 || frameCount % interval === 0) {
    solution = null;
    guessItem = new GuessItem(width / 2, height / 2, 10);
  }

  if (guessItem) {
    guessItem.render();
  }

  if (solution === true || solution === false) {
    solutionMessage(getGameScore.total, solution);
  }
}

function solutionMessage(seed, solution) {
  var trueMessages = [
    'GREAT JOB!',
    'DOING GREAT!',
    'OMG!',
    'SUCH WIN',
    'I APPRECIATE YOU!',
    'IMPRESSIVE'
  ];

  var falseMessages = [
    'OH NO!',
    'BETTER LUCK NEXT TIME!',
    'PFTTTT!',
    ':('
  ];

  var messages;

  push()
  textAlign(CENTER, CENTER);
  textSize(36);
  fill(237, 34, 93);
  randomSeed(seed * 10000);

  if (solution === true) {
    background(255);
    messages = trueMessages;
  } else if (solution === false) {
    background(0);
    messages = falseMessages;
  }

  translate(width / 2, height / 2);
  text(messages[parseInt(random(messages.length), 10)], 0, 0);
  randomSeed();
  pop();
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

function restartTheGame () {
  results = [];
  solution = null;
  gameOver = false;
}

function keyPressed() {
  if (gameOver === true) {
    if (keyCode === ENTER) {
      restartTheGame();
      return;
    }
  }

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
  this.scaleIncrement = 0.33;
  this.content = getContent();
  this.alpha = 255;
  this.alphaDecrement = 6;
  this.solved;
  this.contentMap = {
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine',
    '0': 'Zero',
  }

  this.colors = [
    [184,244,255],
    [160,159,230],
    [204,117,154],
    [79,170,161],
    [237,255,201],
    [144,244,255],
    [120,159,230],
    [201,117,154],
    [70,170,161],
    [230,255,201]
  ];

  function getContent() {
    return String(parseInt(random(10), 10));
  }

  this.solve = function (input) {
    if (input === this.content) {
      this.solved = true;
    } else {
      this.solved = false;
    }
    return this.solved;
  }

  this.drawEllipse = function (size, strkWeight, speedMultiplier, seed) {
    push();
    randomSeed(seed);
    translate(this.x, this.y);
    scale(this.scale * 0.5 * speedMultiplier);
    var clr = this.colors[parseInt(random(this.colors.length), 10)];
    stroke(clr);
    noFill();
    strokeWeight(strkWeight);
    ellipse(0, 0, size, size);
    randomSeed();
    pop();
  }

  this.render = function() {
    if (this.solved === false) {
      return;
    }

    this.drawEllipse(100, 15, 1.4, this.content * 1000);
    this.drawEllipse(80, 7, 1.2, this.content * 2000);
    this.drawEllipse(60, 5, 1.1, this.content * 3000);

    push()
    fill(255, this.alpha);
    textAlign(CENTER, CENTER);
    translate(this.x, this.y);
    scale(this.scale);
    text(this.contentMap[this.content], 0, 0);
    this.scale = this.scale + this.scaleIncrement;
    this.alpha = this.alpha - this.alphaDecrement;
    pop();
  }
}