var bg, canvas
var cow, cow_s, goat, goat_s, horse, horse_s, pig, pig_s, sheep, sheep_s

function preload(){
  bg = loadImage("farm.jpg");
  cow_s = loadSound("cow_s.wav");
  goat_s = loadSound("goat_s.mp3");
  horse_s = loadSound("horse_s.mp3");
  pig_s = loadSound("pig_s.mp3");
  sheep_s = loadSound("sheep_s.mp3");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  pig = createImg('pig.png');
  pig.size(150, 150);
  pig.position(400, 150);
  pig.mouseClicked(pigs);
}

function draw() {
  background(bg);  
  drawSprites();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function pigs(){
  pig_s.play();
  goat_s.stop();
  horse_s.stop();
  pig_s.stop();
  cow_s.stop();
  sheep_s.stop();
}