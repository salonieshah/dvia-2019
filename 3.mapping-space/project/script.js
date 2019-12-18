d3.json("../data/Database_Global.json", function(data) {
    
    console.log(data)
     
    var margin = {top:40, right:50, bottom:70, left:50};
    var w = 600
    var h = 600
    
    var svg = d3.select("#diagram")
      	.append("svg")
      	.attr("width", w + margin.top + margin.bottom)
      	.attr("height", h + margin.left + margin.right)
      	.append("g")
      	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      	
    var dot = svg.selectAll(".dot")
        .data(d.main_cause)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return (d.sensorhour * 1 + 0.5) * gridSize; })
        .attr("cy", function(d) { return (d.sensorday *1 -0.5) * gridSize; })
        .attr("class", "hour")
        .attr("r", gridSize/3)
        .style("fill", function(d) { return colours(d.temperature *1); })

})