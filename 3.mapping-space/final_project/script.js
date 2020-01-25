/* Data load */
/* ========= */


d3.queue()
  .defer(d3.csv, 'data/cities_all.csv')
  .defer(d3.csv, 'data/global_data.csv')
  .defer(d3.json, 'data/world-110m-simple.json')
  .await(load);


function load(error, cities, mydata, world) {
  if (error) throw error;


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


///////////////////////////////////



//Read the data
d3.csv("data/instances.csv", function(data) {



// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 1000 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the SVG object to the body of the page
var SVG = d3.select("#dataviz_axisZoom")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");



  // Add X axis
  var x = d3.scaleLinear()
    .domain([1850,2020])
    .range([ 0, width ]);
  var xAxis = SVG.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .attr("class", "axis");


  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 100])
    .range([ height, 0]);
  var yAxis = SVG.append("g")
    .call(d3.axisLeft(y))
    .attr("class", "axis");

  // Add a clipPath: everything out of this area won't be drawn.
  var clip = SVG.append("defs").append("SVG:clipPath")
      .attr("id", "clip")
      .append("SVG:rect")
      .attr("width", width )
      .attr("height", height )
      .attr("x", 0)
      .attr("y", 0);

  // Create the scatter variable: where both the circles and the brush take place
  var scatter = SVG.append('g')
    .attr("clip-path", "url(#clip)")

  // Add circles
  scatter
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.year); } )
      .attr("cy", function (d) { return y(d.instances); } )
      .attr("r", 8)
      .style("fill", "#da4a4a")
      .style("opacity", 0.920)

  // Set the zoom and Pan features: how much you can zoom, on which part, and what to do when there is a zoom
  var zoom = d3.zoom()
      .scaleExtent([0.5, 20])  // This control how much you can unzoom (x0.5) and zoom (x20)
      .extent([[0, 0], [width, height]])
      .on("zoom", updateChart);

  // This add an invisible rect on top of the chart area. This rect can recover pointer events: necessary to understand when the user zoom
  SVG.append("rect")
      .attr("width", width)
      .attr("height", height)
      .style("fill", "none")
      .style("pointer-events", "all")
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      .call(zoom);
  // now the user can zoom and it will trigger the function called updateChart

  // A function that updates the chart when the user zoom and thus new boundaries are available
  function updateChart() {

    // recover the new scale
    var newX = d3.event.transform.rescaleX(x);
    var newY = d3.event.transform.rescaleY(y);

    // update axes with these new boundaries
    xAxis.call(d3.axisBottom(newX))
    yAxis.call(d3.axisLeft(newY))

    // update circle position
    scatter
      .selectAll("circle")
      .attr('cx', function(d) {return newX(d.year)})
      .attr('cy', function(d) {return newY(d.instances)});
  }

})