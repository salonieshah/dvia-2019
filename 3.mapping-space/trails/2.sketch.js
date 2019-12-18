// the data loaded from a USGS-provided CSV file
var table;

// my leaflet.js map
var mymap;

function preload() {
    // load the CSV data into our `table` variable and clip out the header row
    table = loadTable("../data/Database_Global.csv", "csv", "header");
    }

function setup() {
    // first, call our map initialization function (look in the html's style tag to set its dimensions)
    setupMap()

    // call our function (defined below) that populates the maps with markers based on the table contents
    addCircles();

    // generate a p5 diagram that complements the map, communicating the earthquake data non-spatially
    createCanvas(800, 600)
    background(222)

    fill(0)
    noStroke()
    textSize(16)
    text(`Plotting ${table.getRowCount()} seismic events`, 20, 40)
    text(`magnitude: ${columnMax(table, "magnitude")}`, 20, 60)
    // text(`Greatest Depth: ${columnMax(table, "depth")}`, 20, 80)
    }

function setupMap(){
    
    mymap = L.map('quake-map').setView([51.505, -0.09], 3);
        
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    	subdomains: 'abcd',
    	maxZoom: 19
        }).addTo(mymap);
    }

    function addCircles(){
        // calculate minimum and maximum values for magnitude and depth
        var magnitudeMin = 0;
        var magnitudeMax = columnMax(table, "magnitude");
        console.log('magnitude range:', [magnitudeMin, magnitudeMax])
    
        // step through the rows of the table and add a dot for each event
        for (var i=0; i<table.getRowCount(); i++){
            var row = table.getRow(i)
    
            // skip over any rows where the magnitude data is missing
            if (row.get('magnitude')==''){
                continue
            }
            
            if(row.get('main_cause')==='Fracking') {
                    var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
                    stroke: false,
                    fillColor: '#751620', 
                    fillOpacity: 0.5,  
                    radius: row.getNum('magnitude') * 100
                }) 
                    var circle_outline = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
                    color: '#751620',
                    weight: 5,
                    opacity: 0.5,
                    fillColor: 'none', 
                    radius: row.getNum('magnitude') * 5000
                }) 
            } else if (row.get('main_cause')==='Mining') {
                  var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
                    stroke: false,
                    fillColor: '#FFB800',
                    fillOpacity: 0.5, 
                    radius: row.getNum('magnitude') * 100
                }) 
                var circle_outline = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
                    color: '#FFB800',
                    weight: 5, 
                    opacity: 0.5,
                    fillColor: 'none', 
                    radius: row.getNum('magnitude') * 5000
                }) 
            } else if (row.get('main_cause')==='Water reservoir impoundment') {
                  var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
                    stroke: false,
                    fillColor: '#AFD2E9', 
                    fillOpacity: 0.5,
                    radius: row.getNum('magnitude') * 100
                })
                    var circle_outline = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
                    color: '#AFD2E9',
                    weight: 5, 
                    opacity: 0.5,
                    fillColor: 'none', 
                    radius: row.getNum('magnitude') * 5000
                }) 
            } else if (row.get('main_cause')==='Conventional Oil and Gas') {
                  var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
                    stroke: false,
                    fillColor: '#F2DDA4',
                    fillOpacity: 0.5,
                    radius: row.getNum('magnitude') * 100
                })
                    var circle_outline = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
                    color: '#F2DDA4',
                    weight: 5, 
                    opacity: 0.5,
                    fillColor: 'none', 
                    radius: row.getNum('magnitude') * 5000
                }) 
            } else {
                  var circle = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
                    stroke: false,
                    fillColor: '#97DB4F',
                    fillOpacity: 0.5,
                    radius: row.getNum('magnitude') * 100
                })  
                    var circle_outline = L.circle([row.getNum('latitude'), row.getNum('longitude')], {
                    color: '#97DB4F',
                    weight: 5, 
                    opacity: 0.5,
                    fillColor: 'none', 
                    radius: row.getNum('magnitude') * 5000
                }) 
            }
   
            circle.addTo(mymap);
            circle_outline.addTo(mymap);
            
            circle_outline.bindPopup(`
            <p>Cause: ${row.get("main_cause")}</p>
            <p>Project Name: ${row.get("project_name")}</p>
            <p>Magnitude: ${row.get("magnitude")}</p>
            <p>Year: ${row.get("year")}</p>
                `);
        }
    }
    
    
    // removes any circles that have been added to the map
    function removeAllCircles(){
        mymap.eachLayer(function(layer){
            if (layer instanceof L.Circle){
                mymap.removeLayer(layer)
            }
        })
    }
    
    // get the maximum value within a column
    function columnMax(tableObject, columnName){
        // get the array of strings in the specified column
        var colStrings = tableObject.getColumn(columnName);
    
        // convert to a list of numbers by running each element through the `float` function
        var colValues = _.map(colStrings, float);
    
        // find the largest value in the column
        return _.max(colValues);
    }
    
    
    // get the minimum value within a column
    function columnMin(tableObject, columnName){
        // get the array of strings in the specified column
        var colStrings = tableObject.getColumn(columnName);
    
        // convert to a list of numbers by running each element through the `float` function
        var colValues = _.map(colStrings, float);
    
        // find the largest value in the column
        return _.min(colValues);
}
