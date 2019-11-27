// Saloni Shah
// DVIA: Assignment 01_Common Lines
// Date: 11 September 2019

//Lets Get Started
// 1. Declare setup function of p5.js 
function setup() {
  createCanvas(800, 400);
}

//2. Declare draw function of p5.js
function draw() {
  background(0);
  noStroke()
  
//3. Use clock function to get the current date.
  var now = clock();
  var d = now.day;
  var m = now.month;
  var y = now.year;
  
//4. Use map function to re-map time from one range (day: 0-31) to another (vertical canvas size).
  let each_day = map(d, 1, 31, 20, 380);
  fill('#E39695');
  circle(780, each_day, 20);
  
//5. Use map function to re-map time from one range (month: 1-12) to another (diagonal canvas size).
  let each_month_v = map(m, 1, 12, 20, 380);
  let each_month_h = map(m, 1, 12, 20, 780);
  fill('#EC5766');
  circle((780-each_month_h), each_month_v, 25);
  
//5. Use map function to re-map time from one range (year: 2000-2050) to another (horizontal canvas size).
  let each_year = map(y, 2000, 2050, 20, 780);
  fill('#9C0D38');
  circle(each_year,380, 35);
  
//6. Draw a triangle that connects the radius of day, month, year (I want to use lerpcolour to change for seasons)
  fill(214, 229,227,55);
  triangle(780, each_day,(780-each_month_h), each_month_v, each_year,380);
  // stroke('red');
  // line (20,380,780,20);

//7. Use clock function to get the present time.
  let h = now.hour;
  let mi = now.min;
  let s = now.sec;

//8. Use map function to re-map time from one range (minute: 0-60) to another (horizontal canvas size). 
  noStroke();
  let each_min = map(mi, 1, 60, 20, 780);
  fill('#FCC631');
  circle(each_min,20,25);
  
//9. Use map function to re-map time from one range (second: 0-60) to another (vertical canvas size).
  let each_sec = map(s, 1, 60, 20, 380);
  fill('#FDED7C');
  circle(20, each_sec, 20);
  
//10. Use map function to re-map time from one range (hour: 0-24) to another (diagonal canvas size). (I want to change to 12 hour clock)
  let each_hr_v; 
  let each_hr_h;
  each_hr_v = map(h, 1, 12, 20, 380);
  each_hr_h = map(h, 1, 12, 20, 780);
  fill('#FCBA04');
  circle(each_hr_h, (400 - each_hr_v), 35);  
  console.log(h);


  // else if (h>=12){
  // each_hr_v = map(h, 12, 24, 380, 20);
  // each_hr_h = map(h, 12, 24, 780, 20);
  // fill('#FCBA04');
  // circle(each_hr_h, (380 - each_hr_v), 35);  
  // }
  
  
  
  
  // let each_hr_v = map(h, 0, 23, 20, 380);
  // let each_hr_h = map(h, 0, 23, 20, 780);
  // fill('#FCBA04');
  // circle(each_hr_h, (380 - each_hr_v), 35);

//11. Draw a triangle that connects the radius of hour, minute, second (I want to use lerpcolour to change colour from am to pm) 
  fill(214, 229,227,55);
  triangle(each_min,20,20, each_sec, each_hr_h, 400 - each_hr_v);
  
  let am_col = color(18,33,40,55);
  let pm_col = color(18,32,40,55);
  
  let am_col_l = lerpColor(am_col, pm_col, 0.08)


}