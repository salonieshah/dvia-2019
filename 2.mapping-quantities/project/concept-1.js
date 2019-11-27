var data

function preload(){
  data = loadJSON('data/all-activity.json')
}

function setup(){
  createCanvas(800, 600)

  print(data)
}
