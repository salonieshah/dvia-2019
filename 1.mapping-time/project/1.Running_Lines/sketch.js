// Saloni Shah
// DVIA: Assignment 01_Running Lines
// Date: 11 September 2019

//Lets Get Started
// 1. Declare global variables
var barHeight = 10; 
var maxWidth = 800 ;

// 2. Declare setup function of p5.js 
function setup() {
  createCanvas(800, 400);
  background(51);
}

//3. Declare draw function of p5.js
function draw() {
  
// 4. Use clock function to get the present time.
  let now = clock();
  let hr = now.hour;
  let mn = now.min;
  let sc = now.progress.min;

// 5. Use map function to re-map time from one range (0-24/60) to another (canvas size).
  let end_sec = map(sc, 0, 1, 0, 800);
  let end_min = map(mn, 0, 60, 0, 800);
  let end_hour = map(hr, 0, 24, 0, 800);
 
// 6. Draw 3 stagnant rectangles (hour, minute, second) for reference of the canvas. 
  fill(70);
  noStroke();
  rect(0, 100, maxWidth,  barHeight);
  rect(0, 200,  maxWidth,  barHeight);
  rect(0, 300, maxWidth,  barHeight);

// 7. Draw 3 rectangles that would change thier lenth as per the time (hour, minute, second).     
  fill('#00628F');
  rect(0, 90, end_hour, barHeight + 20);
  
  fill('#618EB3');
  rect(0, 195, end_min, barHeight + 10);
  
  fill('#ACC2D9');
  rect(0, 298, end_sec, barHeight + 4);
}