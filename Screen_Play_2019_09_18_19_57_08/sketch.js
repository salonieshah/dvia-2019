var barHeight = 10 
var maxWidth = 800
var maxHeight = 400

function setup() {
  createCanvas(800, 400);
  background(51);
}

function draw() {
  
  let hr = hour();
  let mn = minute();
  let sc = second();

  let end_sec = map(sc, 0, 60, 0, 400);
  let end_min = map(mn, 0, 60, 0, 400);
  let end_hour = map(hr, 0, 24, 0, 800);
 
  
  fill(70)
  noStroke()
  rect(0, 380, maxWidth, barHeight)
  rect(0, 0,barHeight, maxHeight)
  rect(790, 0, barHeight, maxHeight)
  
  fill('#A33443')
  rect(0, 200, end_hour, maxWidth/2 )
  
  fill('#BB6769')
  rect(0, 0, maxWidth/3, end_min )
  
  fill('#F8B1B1')
  rect(600, 0, maxWidth/3, end_sec,)
  
  //   fill('#E1C2C3')
//   rect(0, 298, barHeight + 4, end_sec,)
  
  // stroke('#E1C2C3')
  // strokeWeight(10)
  // noFill()
  // rect (0, 0, end_min, end_sec)

  
 
}