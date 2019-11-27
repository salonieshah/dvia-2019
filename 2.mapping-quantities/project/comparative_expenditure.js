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

//5. Draw Base Rectangle    
    fill(153,23,24);
  noStroke()
    // strokeWeight(0.05);
  rect(0, 0.25*y, 0.1668*x, 0.5*y);
    fill(255,209,49)
  rect(0.1668*x, 0.25*y, 0.1668*x, 0.5*y);
    fill(180,196,174)
  rect(0.3335*x, 0.25*y, 0.1668*x, 0.5*y);
    fill(113,119,68)
  rect(0.5002*x, 0.25*y, 0.1668*x, 0.5*y);
    fill(92,103,132)
  rect(0.6669*x, 0.25*y, 0.1668*x, 0.5*y);
    fill(215,179,119)
  rect(0.8337*x, 0.25*y, 0.1668*x, 0.5*y);
  

//6. Create Random Circles in the bigger circle of health

  for(let i=0;i<nuc;i++){
      let w = random (0.03*x,0.1500*x)
      let h = random (0.30*y,0.70*y)
      fill(191,67,66,100)
      noStroke()
      ellipse(w, h, 25, 25); 
  }

  // for (let x = 0; x <= health; x += 5) {
		// for (let y = 0; y <= height; y += 5) {
		// 	fill(random(255), 0, random(255));
		// 	ellipse(x, y, 5, 5);  
		// }
  // }
  
  for(let i=0;i<health;i++){
      let w = random (0.173*x,0.325*x)
      let h = random (0.27*y,0.73*y)
      fill(255,255,255,100)
      noStroke()
      ellipse(w, h, 5, 5); 
  }
      
  
  for(let i=0;i<food;i++){
      let w = random (0.34*x,0.49*x)
      let h = random (0.27*y,0.73*y)
      fill(89,94,94,100)
      noStroke()
      ellipse(w, h, 5, 5); 
  }
  
  for(let i=0;i<tree;i++){
      let w = random (0.505*x,0.664*x)
      let h = random (0.255*y,0.74*y)
      fill(164,175,105,100)
      noStroke()
      ellipse(w, h, 5, 5); 
  }
  
  for(let i=0;i<shelter;i++){
      let w = random (0.67*x,0.825*x)
      let h = random (0.27*y,0.73*y)
      fill(192,245,250,100)
      noStroke()
      ellipse(w, h, 5, 5); 
  }
  
  for(let i=0;i<education;i++){
      let w = random (0.837*x,0.997*x)
      let h = random (0.255*y,0.74*y)
      fill(143,117,79,100)
      noStroke()
      ellipse(w, h, 5, 5); 
  }
  
}
