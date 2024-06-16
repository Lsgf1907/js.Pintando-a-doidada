let cor;
let horizontal; // x
let vertical; // y

function setup() {
  createCanvas(500, 450);
  background("black");
  horizontal = 250;
  vertical = 225;
}

function draw() {
  cor = color(random(0, 255), random(0, 255), random(0, 255))
  fill(cor)
  circle(horizontal, vertical, 25)
  if(mouseX < horizontal){
    horizontal = horizontal - 5;
  }
  if(mouseX > horizontal){
    horizontal = horizontal + 5;
  }
  if(mouseY < vertical){
    vertical = vertical - 5;
  }
  if(mouseY > vertical){
    vertical = vertical + 5;
  }
}