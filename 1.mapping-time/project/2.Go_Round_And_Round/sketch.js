// Saloni Shah
// DVIA: Assignment 01_Go Round and Round
// Date: 11 September 2019

//Lets Get Started
// 1. Declare setup function of p5.js and the angle mode to degrees instead of radians
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

//2. Declare draw function of p5.js
function draw() {

  background(51);
  
//3. Use translate to specify an amount to displace my objects within the display window. 
  translate(400,200);

//4. Use clock function to get present time.  
  let now = clock();
  let hr = now.hour;
  let mn = now.min;
  let sc = now.progress.min;

//5. Use map function to re-map time from one range (0-24/60) to another (canvas size).
  let end_sec = map(sc, 0, 1, 0, 800);
  let end_min = map(mn, 0, 60, 0, 800);
  let end_hour = map(hr, 0, 24, 0, 800);
  
//6. Rotate the circles to initialize the circle at 00:00
  rotate(-90);
  
//7. Use push..pop to draw second arc and fill the colour.
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
  
//8. Use push..pop to draw minute arc and fill the colour.
  
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
  
//9. Use push..pop to draw minute arc and fill the colour.
  
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
  