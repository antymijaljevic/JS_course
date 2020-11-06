// arrays

// var arr = [2, 555, 7777, 1202, 1];
// var firstItem = arr[0];


// arr.push(777); //integer
// arr.push('Hello'); //string
// arr.push({'Niko':'Jebivjetar'}); //object

// console.log(arr)

// console.log(firstItem)

// var size1 = 200;
// var size2 = 150;
// var size3 = 100;
// var size4 = 50;
// var size5 = 25;

// sizes = [200, 150, 100, 50, 25];

// sizes = [];

// function setup (){
//   createCanvas(800, 400);
  
//   for (var s = 0; s < 100; s++) {
//     var randomValue = random(5, 500);
//     sizes.push(randomValue);
//   }
// }

// function draw() {
//   background(220);
//   noFill();
//   strokeWeight(2);
  
  
//   for (var x = 0; x < sizes.length; x++) {
//     ellipse(width / 2, height /2 , sizes[x], sizes[x]);
//   }
// }

var words = ['Jebem', 'ti', 'pasa', 'miloga', '!'];
var colors = [
  [184,244,255],
  [160,159,230],
  [204,117,154],
  [79,170,161],
  [237,255,201],
]

function setup (){
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  frameRate(3);


}

function draw() {
  
  var currentIndex = frameCount % words.length;
  var currentWord = words[currentIndex]; 
  var mixColors = colors[currentIndex];
  background(mixColors);
  
  fill(255);
  textSize(50);
  text(currentWord, width / 2, height /2);

  
}