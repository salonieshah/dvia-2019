 var width = 960,
    height = 500,
    originalScale = height / 2.1,
    scale = originalScale,
    translation = [width / 2, height / 2],
    scaleChange,
    rotation;
 
var sphere = {type: 'Sphere'};

var graticule = d3.geoGraticule();

function circle(ctx, x, y, radius, colour) {
  ctx.fillStyle = colour;
  ctx.beginPath();
  ctx.arc(x, y, radius, 2 * Math.PI, false);
  ctx.fill()
}

// set up the main canvas and the projection 

// var canvas = d3.select('body').append('canvas')
var canvas = d3.select('#globe').append('canvas')
    .attr('width', width)
    .attr('height', height);

var context = canvas.node().getContext('2d');

// set up the buffer canvas 

var bufferCanvas = document.createElement('canvas');
var bufferCanvasContext = bufferCanvas.getContext('2d');

bufferCanvasContext.canvas.width = width;
bufferCanvasContext.canvas.height = height;

var projection = d3.geoOrthographic()
    .scale(scale) 
    .translate(translation)
    .clipAngle(90);

var path = d3.geoPath()
    .projection(projection)
    .context(bufferCanvasContext)
    .pointRadius(2);





/* Data load */
/* ========= */


d3.queue()
  .defer(d3.csv, 'cities_all.csv')
  .defer(d3.csv, '../data/Database_Global.csv')
  .defer(d3.json, 'world-110m-simple.json')
  .await(load);


function load(error, cities, mydata, world) {
  if (error) throw error;

  var land = topojson.feature(world, world.objects.countries),
      grid = graticule();

  var outerArray = [];
  cities.forEach(function(el) {
    var innerArray = [+el.Longitude, +el.Latitude];
    outerArray.push(innerArray);
  }); 
  

  var points = { 
    type: "MultiPoint", 
    coordinates: outerArray 
  }; 


  var outerArray_1 = [];
  mydata.forEach(function(el) {
    var innerArray_1 = [+el.longitude, +el.latitude];
    outerArray_1.push(innerArray_1);
  }); 
  
  var points_1 = { 
    type: "MultiPoint", 
    coordinates: outerArray_1 
  };
  
  console.log(land);
  console.log(points);
  console.log(points_1);

  // debugger;
  
  // Draw the world

  function drawWorld() {
    
    bufferCanvasContext.save();

    bufferCanvasContext.clearRect(0, 0, bufferCanvas.width, bufferCanvas.height);

    bufferCanvasContext.beginPath(); 
    path(sphere);
    bufferCanvasContext.lineWidth = 1;
    bufferCanvasContext.strokeStyle = '#ccc';
    bufferCanvasContext.stroke();

    bufferCanvasContext.beginPath();
    path(grid);
    bufferCanvasContext.lineWidth = .5;
    bufferCanvasContext.strokeStyle = '#ddd';
    bufferCanvasContext.stroke();

    bufferCanvasContext.beginPath();
    path(land);
    bufferCanvasContext.fillStyle = '#ccc';
    bufferCanvasContext.fill();

    bufferCanvasContext.beginPath();
    path(land);
    bufferCanvasContext.lineWidth = .5;
    bufferCanvasContext.strokeStyle = '#fff';
    bufferCanvasContext.stroke();

    bufferCanvasContext.beginPath();
    path(points);
    bufferCanvasContext.fillStyle = "#cbe5ee"
    bufferCanvasContext.fill();
    
    
    bufferCanvasContext.beginPath();
    path(points_1);
    bufferCanvasContext.fillStyle = "#da4a4a"
    bufferCanvasContext.fill();


    context.clearRect(0, 0, width, height);
    context.drawImage(bufferCanvas, 0, 0, bufferCanvas.width, bufferCanvas.height);
    
    bufferCanvasContext.restore();

  } // drawWorld()
  



  // First draw


  requestAnimationFrame(drawWorld);


  // Zoom and pan set-up

  var zoom = d3.zoom()
    .scaleExtent([0.5, 4])
    .on("zoom", zoomed)

  canvas.call(zoom);

  var previousScaleFactor = 1; 

  function zoomed() {

    var dx = d3.event.sourceEvent.movementX;
    var dy = d3.event.sourceEvent.movementY;

    var event = d3.event.sourceEvent.type;
    
    if (event === 'wheel') {
      
      scaleFactor = d3.event.transform.k; 
      scaleChange = scaleFactor - previousScaleFactor;
      scale = scale + scaleChange * originalScale;
      projection.scale(scale);
      previousScaleFactor = scaleFactor;

    } else {

      var r = projection.rotate();
      rotation = [r[0] + dx * 0.4, r[1] - dy * 0.5, r[2]];
      projection.rotate(rotation);

    }

    requestAnimationFrame(drawWorld);

    // context.restore();
  
  } // zoomed()

} // load()