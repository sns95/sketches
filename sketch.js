function setup(){
  createCanvas(windowWidth,windowHeight);
}

mouseMoved = function() {
    fill(mouseX, mouseY, mouseY);
    ellipse(mouseX, mouseY, 10, 10);
};



