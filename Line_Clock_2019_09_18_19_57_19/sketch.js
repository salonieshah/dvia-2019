var barHeight = 10 
var maxWidth = 800 

function setup() {
  createCanvas(800, 400);
  background(51);
}

function draw() {
  
  let hr = hour();
  let mn = minute();
  let sc = second();

  let end_sec = map(sc, 0, 60, 0, 800);
  let end_min = map(mn, 0, 60, 0, 800);
  let end_hour = map(hr, 0, 12, 0, 800);
 
  
  fill(70)
  noStroke()
  rect(0, 100, maxWidth,  barHeight)
  rect(0, 200,  maxWidth,  barHeight)
  rect(0, 300, maxWidth,  barHeight)
  
  fill('#00628F')
  rect(0, 90, end_hour, barHeight + 20)
  
  fill('#618EB3')
  rect(0, 195, end_min, barHeight + 10)
  
  fill('#ACC2D9')
  rect(0, 298, end_sec, barHeight + 4)
  
  

  
 
}