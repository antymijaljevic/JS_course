// function setup(){
//     createCanvas(400, 400);

// }

// function draw(){
//     background(220);

// }

// var colors = { //object
//     black: 0, //key - value
//     white: 255,
// };


// colors.darkGray = 55;
// colors.gray = 125;
// colors.lightGray = 175;

// colors['999'] = 'green';
// var foo = "bar";
// colors["foo"] = 42;


// console.log(colors);
// console.log(colors.black);



// var colors;

// function setup(){
//     createCanvas(400, 400);
//     colors = { 
//         black: 0, //property
//         white: 255,
//         paintItBlack: function(){ //method
//             background(this.black);
//         }
//     };

// }

// function draw(){
//     background(220);
//     if (frameCount > 120) {
//         colors.paintItBlack();
//     }
// }

// var krug;

// function setup(){
//     createCanvas(400, 400);

//     krug = {
//         x: width / 2,
//         y: height / 2,
//         size: 50,
//         draw: function(){
//             ellipse(this.x, this.y, this.size, this.size);
//         },
//         grow: function(){
//             if (this.size < 200) {
//                 this.size = this.size + 1;
//             }
//         }
//     }
// }

// function draw(){
//     background(220);
//     krug.draw();
//     krug.grow();
// }


var dog;


function setup() {
    createCanvas(800, 600);

    dog = {
        x: width /2,
        y: height /2,
        name: "Glock",
        owner: "Ante",
        age: 7,
        bark: function(){
            textSize(22);
            fill(0);
            text(this.owner, this.x, this.y);
        }, walk: function(){
            fill(255, 0, 255);
            rect(mouseX, mouseY, 100, 50);
        }
    }
}


function draw(){
    background(220);
    dog.bark();
    dog.walk();
}