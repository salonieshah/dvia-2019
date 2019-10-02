function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {

  background(51);
  translate(400,200);
  
  let hr = hour();
  let mn = minute();
  let sc = second();

  let end_sec = map(sc, 0, 60, 0, 360);
  let end_min = map(mn, 0, 60, 0, 360);
  let end_hour = map(hr, 0, 12, 0, 360);

  rotate(-90);
  
  // Draw Second Arc
  push();
  rotate(end_sec);
  strokeWeight(1);
  var secondArc = map(sc,0,60,0,255);
  stroke('#ACC2D9');
  line(0,0,145,0);
  pop();

  stroke('#ACC2D9');
  fill('#ACC2D9');
  
  arc(0,0,300,300,0,end_sec);
  
  //Draw Minute Arc
  
  push();
  rotate(end_min);
  strokeWeight(1);
  var minuteArc = map(mn,0,60,0,255);
  stroke('#618EB3');
  line(0,0,100,0);
  pop();
  
  stroke('#618EB3');
  fill('#618EB3');
  
  arc(0,0,200,200,0,end_min);
  
  //Draw hour Arc
  
  push();
  rotate(end_hour);
  strokeWeight(1);
  var red = map(hr,0,60,0,255);
  stroke('#00628F');
  line(0,0,75,0);
  pop();
  
  stroke('#00628F');
  fill('#00628F');
  
  arc(0,0,150,150,0,end_hour);

}
  