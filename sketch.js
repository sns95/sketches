function setup(){
  createCanvas(640,360);
}

mouseMoved = function() {
    fill(mouseX, mouseY, mouseY);
    ellipse(mouseX, mouseY, 10, 10);
};



