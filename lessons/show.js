function setup() {
    createCanvas(400, 400);
    frameRate(50); //draw funcion executed in seconds
    //noLoop(); // repeating of draw function off
    //frameCount; //number of frames in lifetime
  }
  
  
  function draw() {
    background(220);
    textSize(15);
    fill(0, 0, 0);
  
    var theFrameRate = 'Frame rate: ' + parseInt(frameRate()) //display frames per second
    var theFrameCount = 'Frame count: ' + frameCount //display frame total count
  
    text(theFrameRate,250,20); //display text, x , y
    text(theFrameCount,250,40);
  
    if (frameCount <= 450) {
      fill(255, 0, 0, 50);
      ellipse(150, 150, frameCount, frameCount);
  
      fill(0, 255, 0, 50);
      ellipse(150, 250, frameCount, frameCount);
  
      fill(255, 0, 255, 50);
      ellipse(150, 350, frameCount, frameCount);
  
      fill(255, 255, 0, 50);
      ellipse(250, 150, frameCount, frameCount);
  
      fill(0, 0, 255, 50);
      ellipse(250, 250, frameCount, frameCount);
  
      fill(0, 255, 255, 50);
      ellipse(250, 350, frameCount, frameCount);
  
      rect(frameCount, 200, 100, 50)
  
    } else {
      textAlign(CENTER, CENTER);
      text("SHOW IS OVER :)", 200, 200)
    }
  
  }