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
  y = windowHeight;
  createCanvas(x, y);
  background(51)

// for(let i=0;i<nuc;i++){
//   rect(0.14*x,5+10*i, 5,10)
// } 
// for(let i=0;i<health;i++){
//   rect(0.28*x,5+10*i, 5,10)
// }

 for(let i=0;i<nuc;i++){
   rect(0.14*x,5+10*i, 5,10)
 } 
 for(let i=0;i<health;i++){
   rect(0.28*x,5+10*i, 5,10)
 }
  
  
}
