//1. Declare constants
let data;
let x; 
let y; 
let nuc;
let health;
let food
let tree
let shelter
let education

//2. Load JSON file
function preload(){
  data = loadJSON('data/Expenditure.json');
  
}

//3. Give values to constants based on JSON
function setup(){
    print(data);
  nuc = data[0].Nuclear;
    print(nuc);
  health = data[0].Multiple;
    print(health);
  food= data[1].Multiple;
    print(food);
  tree= data[2].Multiple;
    print(tree);
  shelter= data[3].Multiple;
    print(shelter);
  education= data[4].Multiple;
    print(education);

//4. Create Canvas  
  x= windowWidth;
  y = 35000;
  createCanvas(x, y);
  background(51)

// for(let i=0;i<nuc;i++){
//   rect(0.14*x,5+10*i, 5,10)
// } 
// for(let i=0;i<health;i++){
//   rect(0.28*x,5+10*i, 5,10)
// }
  fill('#9C0D38'); 
 for(let i=0;i<nuc;i++){
   rect(0.7*x,5+5*i, 5,5)
 } 
 fill('#EC5766');
 for(let i=0;i<health;i++){
   rect(0.14*x,5+5*i, 5,5)
 }
 fill('#9C0D38');
  for(let i=0;i<food;i++){
   rect(0.21*x,5+5*i, 5,5)
 } 
 fill('#FCC631');
 for(let i=0;i<tree;i++){
   rect(0.28*x,5+5*i, 5,5)
 }
 fill('#FDED7C');
  for(let i=0;i<shelter;i++){
   rect(0.35*x,5+5*i, 5,5)
 }
 fill('#FCBA04');
 for(let i=0;i<education;i++){
   rect(0.42*x,5+5*i, 5,5)
 }
  
  
}
