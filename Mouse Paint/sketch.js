function setup(){
  createCanvas(windowWidth,windowHeight);
  background('black');
}

mouseMoved = function() {
    //red,green, and blue integer values
    //background('grey');
    var g = random(255)
    var b = random(255);

    noStroke();
    fill(r,g,b);
    ellipse(mouseX, mouseY, 40, 40);
};
