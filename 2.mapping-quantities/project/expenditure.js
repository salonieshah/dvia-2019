//1. Declare constants
let data;
let x; 
let y; 
let nuc;
let mul;

//2. Load JSON file
function preload(){
  data = loadJSON('data/Expenditure.json');
}

//3. Give values to constants based on JSON
function setup(){
  print(data);
  nuc = data[1].Nuclear;
  print(nuc);
  mul = data[1].Multiple;
  print(mul);

//4. Create Canvas  
  x= windowWidth;
  y = windowHeight;
  createCanvas(x, y);
  // createCanvas(x, y, SVG);
  background(51)

//5. Two Circles on the back    
  fill(242)
  circle(0.175*x, 0.5*y, 0.25*x)
  circle(0.675*x, 0.5*y, 0.45*x)

//6. Create Random Circles in the bigger circle of mul
    let radius_array = [mul]
    let angle_array = [mul]
    
    for(let i=0;i<mul;i++){
      let random_radius = random(0.01*x, 0.21*x)
      radius_array[i] = random_radius
      for(let j=0;j<i;j++){
        if(radius_array[i] == radius_array[j]){
          random_radius = random(0.01*x, 0.21*x)
          radius_array[i] = random_radius
        }
      }
      
      let random_angle = random(0, TWO_PI)
      angle_array[i] = random_angle
      for(let j=0;j<i;j++){
        if(angle_array[i] == angle_array[j]){
          random_angle = random(0, TWO_PI)
          angle_array[i] = random_angle
        }
      }
      fill(191,67,66,100)
      noStroke()
      circle(0.675*x+random_radius*cos(random_angle), 0.5*y+random_radius*sin(random_angle), 20)
    }
     
     
//7. Create Random Circles in the bigger circle of nuc
    let radius_array1 = [nuc]
    let angle_array1 = [nuc]
    
    for(let i=0;i<nuc;i++){
      let random_radius1 = random(0.01*x, 0.11*x)
      radius_array1[i] = random_radius1
      for(let j=0;j<i;j++){
        if(radius_array1[i] == radius_array1[j]){
          random_radius1 = random(0.01*x, 0.11*x)
          radius_array1[i] = random_radius1
        }
      }
      
      let random_angle1 = random(0, TWO_PI)
      angle_array1[i] = random_angle1
      for(let j=0;j<i;j++){
        if(angle_array1[i] == angle_array1[j]){
          random_angle1 = random(0, TWO_PI)
          angle_array1[i] = random_angle1
        }
      }
      fill(109,109,109,100)
      noStroke()
      circle(0.175*x+random_radius1*cos(random_angle1), 0.5*y+random_radius1*sin(random_angle1), 20)
    } 
      // save('my-sketch.svg')
}
