// Saloni Shah
// DVIA: Assignment 01_Bouncers
// Date: 11 September 2019

//Lets Get Started

// 1. Declare setup function of p5.js 
function setup() {
  createCanvas(800, 400);
}

//2. Declare draw function of p5.js
function draw() {
  
  background(51);
  
// 3. Use clock function to get the present time.
  let now = clock();
  let hr = now.hour;
  let mn = now.min;
  let sc = now.progress.min;

// 4. Use map function to re-map time from one range (0-24/60) to another (canvas size).
  let end_sec = map(sc, 0, 1, 0, 400);
  let end_min = map(mn, 0, 60, 0, 400);
  let end_hour = map(hr, 0, 24, 0, 400);
 
// 5. Draw 3 circles that would bounce between the height as per the time (hour, minute, second).     
  noStroke();
  push()
  fill('#00628F');
  circle(200, end_hour, 30);
  pop()
  
  push()
  fill('#618EB3');
  circle(400, end_min, 20);
  pop()
  
  push()
  fill('#ACC2D9');
  circle(600, end_sec, 20);
  pop()
}