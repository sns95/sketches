// position of the ball
var x = 20;
// how far the ball moves every time
var speed = 5;

function setup(){
    createCanvas(400,400);
    //background(202, 255, 97);
};
function draw(){
    background(202, 255, 97);
    fill(66, 66, 66);
    ellipse(x, 200, 50, 50);
    
    if (x > 375) {
        speed = -5;
    }
    if (x < 25) {
        speed = 5;
    }

    // move the ball
    x = x + speed;
};
