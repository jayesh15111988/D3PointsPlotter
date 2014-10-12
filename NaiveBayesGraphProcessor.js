 function createGraphFromMessagesKeywords(inputDataset)  
{
  //Create scale functions
      var xScale = getScaleForNaiveBayesvisualizationWithData(inputDataset);


//We are going in the reverse direction as SVG scale grows in downward direction

      var yScale = d3.scale.linear()
                 .domain([maximumSVGheight- graphPadding ,graphPadding])
                 .range([graphPadding, maximumSVGheight- graphPadding ]);
  
//We want different color for different data points
  


      //Create SVG element
      var svg = createSVGElement();


//For given scale, add axes to graph
appendAxisToSVGElementWithScale(svg,xScale,yScale,"Words Frequency in SMS","Constant");



//We are plotting frequency of each word in the form of points in the shape of a circle

      svg.selectAll("circle")
         .data(inputDataset)
         .enter()
         .append("circle")
         .attr("cx", function(datapoint) {



          for(frequency in datapoint){

            return xScale(frequency);
          }
          
         })
         .attr("cy", bulletsDefaultYValue)
         .attr("r", function(d) {

            for(key in d){

              return Math.sqrt(d[key].length)*3;

            }
         })// We are adding these elements to fire events when user hovers over these data points
         .attr("class","overlay")
         .on("mouseover", function() { focus.style("display", null)})
         .on("mouseout", function() { focus.style("display", "none")})
         .on("mousemove", function(data){
          mouseMovedOverDataPointsNaiveBayes(data);
         })
         .attr("fill",function(d,i){return color(i);})
         .attr("fill-opacity",defaultColorOpacity); 


     
      //Focus - Defines the position and size when particular element is hovered by the mouse pointer

var focus = createFocusElement(svg,0);
      


 function mouseMovedOverDataPointsNaiveBayes(data) {
   
        
  var currentFrequencyValue=0.0;

for(key in data){
  currentFrequencyValue=key;
}

var currentXValueOfPoint = xScale(currentFrequencyValue);




    focus.attr("transform", "translate(" + currentXValueOfPoint + "," + defaultYOffsetForDataPointLabel + ")");
    focus.select("text").text(data[currentFrequencyValue]+" ("+currentFrequencyValue+")");
    focus.select("circle").attr("r",5);
 

 focus.select("line").attr({
"x1": "0",
"y1": "0",
"x2": "0",
"y2":  130


    })


  }



}