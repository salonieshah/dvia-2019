// Saloni Shah
// DVIA: Assignment 01_Changing Perspectives
// Date: 18 September 2019

//Lets Get Started

// 1. Declare setup function of p5.js 
function setup() {
  createCanvas(800, 400);
}

//2. Declare draw function of p5.js
function draw() {
  background(0);
  noStroke();

//3. Use clock function to get the current date.
  var now = clock();
  var d = height * now.progress.day;
  var m = height * now.progress.month;
  var y = height * now.progress.year;

//4. Use map function to re-map dates from one range to another (canvas size).  
  let each_day = map(d, 1, 31, 0, 400); //(1-31)
  let each_month = map(m, 1, 12, 0, 400); // (1-12)
  let each_year = map(y, 2000, 2050, 0, 400); //(2000-2050)

//5. Draw 3 triangles joining atleast 2 dimension of the date. 
  fill(214, 229,227,55);
  stroke('#f17105');
  strokeWeight(3);
  triangle(200, d, 400, m, 600, y);
  triangle(200, d, 400, m, 400, 10);
  triangle(600, y, 400, m, 400, 10);
}