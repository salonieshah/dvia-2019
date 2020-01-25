var x;
var y;


var r;
var g;
var b;

function preload() {
  font = loadFont('styles/LeagueSpartan-Bold.otf');
}

function setup() {
  let canvas_1 = createCanvas(windowWidth, windowHeight);
  canvas_1.parent('title');
  
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  
  background(35,31,32);
  drawPoints(windowWidth/2,windowHeight/2)
  
  fill(253, 255, 252);
  noStroke();
  rect(50, windowHeight/1.2 - 50, 750, 65);
  
  textFont(font);
  textSize(50);
  fill(35,31,32)
  stroke(253, 255, 252);
  text('Human Induced Earthquakes', 50, windowHeight/1.2);

}

function drawPoints(x,y){
  for (var i=0;i<500000;i++){
   var randomValue = random();
  if(randomValue < .25){
    x--;
  }
  else if(randomValue < .5){
    x++;
  }
  else if(randomValue < .75){
    y--;
  }
  else{
    y++;
  }
  
  // wrap around left and right sides
  if(x < 0){
    x = width;
  }
  else if(x > width){
    x = 0;
  }
  
  // wrap around top and bottom sides
  if(y < 0){
    y = height;
  }
  else if(y > height){
    y = 0;
  }
  
  // randomly change color
  r += random(-1, 1);
  g += random(-1, 1);
  b += random(-1, 1);
  
  // don't let values go outside 0-255 range
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);
  
  stroke(r, g, b);
  point(x, y);
  }
}







