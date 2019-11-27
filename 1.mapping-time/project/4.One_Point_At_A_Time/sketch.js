// Saloni Shah
// DVIA: Assignment 01_ One point at a time
// Date: 18 September 2019

//Lets Get Started
var rad = 20
// 1. Declare setup function of p5.js 
function setup() {
  createCanvas(800, 400);
  //angleMode(DEGREES);
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
  // var s = now.progress.moon

//4. Use map function to re-map dates from one range to another (canvas size).  
  let each_day = map(d, 1, 31, 0, 400); //(1-31)
  let each_month = map(m, 1, 12, 0, 400); // (1-12)
  let each_year = map(y, 2000, 2050, 0, 400); //(2000-2050)
  // let each_moon = map(y, 1, 15, 0, rad); //(2000-2050)
  // rotate(-90);

//5. Draw circles for date and connect with a triangle (date, month, year)
  fill('#7CB518');
  circle(200, each_day, 25);

  fill('#BC3908');
  circle(400, each_month, 50);
  
  fill('#F6AA1C');
  circle(600, each_year, 75);

  fill(214, 229,227,55);
  triangle(200, each_day, 400, each_month, 600, each_year);






//5. Change the area of the circle as per the moon cycle. 
//   push();
//     rotate(each_moon);
//     strokeWeight(1);
//     var moonArc = map(s,0,15,0, 360);
//     stroke('#ACC2D9');
//     line(0,0,145,0);
//   pop();
  
//   fill('#7CB518');
//   circle(200, each_day, rad/2);
//   arc(200,100,rad/2,rad/2,0,each_moon);
 }