function setup() {
    createCanvas(800, 400);
    frameRate(60);
  }
  
  
  function draw() {
  
    //fps and fc setup
  
    background(220);
    textSize(15);
    fill(255, 0, 0, 180);
  
    var theFrameRate = 'Frame rate: ' + parseInt(frameRate()) //display frames per second
    var theFrameCount = 'Frame count: ' + frameCount //display frame total count
  
    text(theFrameRate,650,20); //display text, x , y
    text(theFrameCount,650,40);
  
    if (frameCount <= 307) {
  
      //Airplane A
  
      fill(0,0,255);
      strokeWeight(0.2);
      rect(frameCount+ 10, 200, 130, 20);
      rect(frameCount + 10, 180, 20, 20);
      rect(frameCount + 80, 160, 20, 100);
      fill(255,0,255);
      text('RYANAIR',frameCount + 55, 215);
  
      //Airplane B
  
      fill(0,255,0);
      strokeWeight(0.2);
      rect(650 - frameCount, 200, 130, 20);
      rect(760 - frameCount, 180, 20, 20);
      rect(610 - frameCount + 80, 160, 20, 100);
      fill(255,0,255);
      text('AER LINGUS', 667 - frameCount, 215);
    }
  
    if (frameCount > 307) {
      var z = 300;
      var u = 275;
      noStroke()
      fill(255,0,0, 200);
      ellipse(385, 200, frameCount -z, frameCount -z);
      fill(255,0,0, 100);
      ellipse(385, 200, frameCount -u, frameCount -u);
    }
  
    if (frameCount == 500) {
      frameCount = 0;
    }
  }
  