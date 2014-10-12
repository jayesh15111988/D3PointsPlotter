
      var maximumSVGWidth = 5000;
      var maximumSVGheight = 500;
      var graphPadding=70;
      var currentWordFrequency='';
      var SVGOffset=100;
      var numberOfTicksInYdirection=2,numberOfTicksInXdirection=50;
      var xAxisOrientation="bottom", yAxisOrientation="left";
      var bulletsDefaultYValue=200;      
      var defaultColorOpacity = "0.4";
      var defaultYOffsetForDataPointLabel = 60;
      var color = d3.scale.category20();

      //Line drawn from Bullet point to the corresponding label
      var pointIndicatorLineForKMeans;
      

createGraphFromMessagesKeywords(spamMessagesFrequenciesCollection);
createGraphFromMessagesKeywords(regularMessagesFrequenciesCollection);
createGraphFromKMeansClusteringResults(KMeansClusteringCentroidDistanceData);


function createGraphFromKMeansClusteringResults(KMeansClusteringOutput){

//Adjusting graph width for KMeans clustering graph

maximumSVGWidth = 2500;
var xScale=getXScale(KMeansClusteringOutput);
var yScale=getYScale(KMeansClusteringOutput);

var svg = createSVGElement();

numberOfTicksInXdirection = 10;
numberOfTicksInYdirection = 5;

appendAxisToSVGElementWithScale(svg,xScale,yScale,"Distance From SPAM centroid","Distance From Regular message centroid");


pointIndicatorLineForKMeans = svg.append("line")
.attr("stroke","green")
.attr("fill","black")
.attr("stroke-width",1);





 svg.selectAll("circle")
         .data(KMeansClusteringOutput)
         .enter()
         .append("circle")
         .attr("cx", function(datapoint) {



          for(inputMessage in datapoint){
            var dataPointsTuple = datapoint[inputMessage];
            return xScale(dataPointsTuple[0]);
          }
          
         })
         .attr("cy", function(datapoint) {



          for(inputMessage in datapoint){
            var dataPointsTuple = datapoint[inputMessage];
            return yScale(dataPointsTuple[1]);
          }
          
         })
         .attr("r", 5)// We are adding these elements to fire events when user hovers over these data points
         .attr("class","overlay")
         .on("mouseover", function() { focus.style("display", null);pointIndicatorLineForKMeans.style("display", null) })
         .on("mouseout", function() { focus.style("display", "none");  pointIndicatorLineForKMeans.style("display", "none")})
         .on("mousemove", function(data){
          mouseMovedOverDataPointsKMeans(data)
         })
         .attr("fill",function(d,i){



var currentTupleWithMessageType = d;


for(inputMessage in currentTupleWithMessageType){

//If true, it is spam!
if(currentTupleWithMessageType[inputMessage][2] == true ){
  return "red";
}
else{
  return "green";
}

}})
.attr("fill-opacity",defaultColorOpacity); 



var focus = createFocusElement(svg,-10);
      

//Which event gets triggered when user hovers mouse pointer over bullets

 function mouseMovedOverDataPointsKMeans(data) {
   
        
  var currentTupleWithDataPoints = [];
  var inputMessageValue = '';
for(inputMessage in data){
  currentTupleWithMessageType = data[inputMessage];
  inputMessageValue = inputMessage;
}

var currentXValueOfPoint = xScale(currentTupleWithMessageType[0]);
var currentYValueOfPoint = yScale(currentTupleWithMessageType[1]);

var originatingXPoint = currentXValueOfPoint;
var originatingYPoint = 40;
var labelOffsetForBoundary = 200;

if(currentXValueOfPoint > (maximumSVGWidth/2)){
  originatingXPoint = currentXValueOfPoint - labelOffsetForBoundary;
}



    focus.attr("transform", "translate(" + (originatingXPoint) + "," + ( originatingYPoint ) + ")");
    focus.select("text").text(inputMessageValue);
    //We don't want to show extra line on screen which is colored in the orange
    focus.select("line").style("display","none");
  

    pointIndicatorLineForKMeans.attr({
  "x1":originatingXPoint,
  "y1": originatingYPoint,
  "x2":currentXValueOfPoint,
  "y2":currentYValueOfPoint,
}); 

  }


}

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

function getScaleForNaiveBayesvisualizationWithData(inputData){
  return d3.scale.linear()
                 .domain([d3.min(inputData, function(d) { 

                  for(var currentWordFrequency in d){
                   
                return currentWordFrequency;

                   }
  
                   
                   }), d3.max(inputData, function(d) { 
                  


                  for(var currentWordFrequency in d){
                   

                return currentWordFrequency;

                   }

                   
                   })])
                 .range([graphPadding, maximumSVGWidth- graphPadding ])
                 .clamp(true);
}

function getXScale(inputDataset){

return d3.scale.linear()
                 .domain([d3.min(inputDataset, function(d) { 

                  for(var centroidDistanceTuple in d){
                   
                var coordinatesPointstuple = d[centroidDistanceTuple];
                return coordinatesPointstuple[0];

                   }
  
                   
                   }), d3.max(inputDataset, function(d) { 
                  


                  for(var centroidDistanceTuple in d){
                   
                var coordinatesPointstuple = d[centroidDistanceTuple];
                return coordinatesPointstuple[0];

                   }

                   
                   })])
                 .range([graphPadding, maximumSVGWidth- graphPadding ])
                 .clamp(true);
}

function getYScale(inputDataset){

return d3.scale.linear()
                 .domain([d3.min(inputDataset, function(d) { 

                  for(var centroidDistanceTuple in d){
                   
                var coordinatesPointstuple = d[centroidDistanceTuple];
                return coordinatesPointstuple[1];

                   }
  
                   
                   }), d3.max(inputDataset, function(d) { 
                  


                  for(var centroidDistanceTuple in d){
                   
                var coordinatesPointstuple = d[centroidDistanceTuple];
                return coordinatesPointstuple[1];

                   }

                   
                   })])
                 .range([maximumSVGheight - graphPadding,graphPadding ])
                 .clamp(true);

}

function createSVGElement(){
  return  d3.select("body")
            .append("svg")
            .attr("width", maximumSVGWidth)
            .attr("height", maximumSVGheight)
            .attr("x",SVGOffset)
            .attr("y",SVGOffset);
}

function appendAxisToSVGElementWithScale(svg,xScale,yScale,xAxisTitle,yAxisTitle){

  var xAxis = d3.svg.axis()
                  .scale(xScale)
                  .orient(xAxisOrientation)
                  .ticks(numberOfTicksInXdirection);

var yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient(yAxisOrientation)
                  .ticks(numberOfTicksInYdirection);

//Appending labels to axis components - Apparently D3 does not support graph labelling

svg.append("text")
    .attr("text-anchor", "end")
    .attr("x",maximumSVGWidth/3)
    .attr("y",maximumSVGheight-20)
    .text(xAxisTitle);



svg.append("text")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", "10")
    .attr("dx", -(maximumSVGheight/3))
    .attr("transform", "rotate(-90)")
    .text(yAxisTitle);

                  

//We are adding Axis for given graph element

svg.append("g")
    .attr("class", "axes")
    .attr("transform", "translate(0, "+ (maximumSVGheight - graphPadding) + ")")
    .call(xAxis);
    
//Append y axis to given SVG element
    svg.append("g")
    .attr("class", "axes")
    .attr("transform", "translate("+graphPadding+",0)")
    .call(yAxis);



}

function createFocusElement(svg,yOffsetForGraphText){
  var focusElement =  svg.append("g")
      .attr("class", "focus")
      .style("display", "none");

  focusElement.append("circle")
      .attr("stroke", "blue")
      .attr("fill", "none")
      .attr("stroke-width", 0.5)
      .attr("cy",yOffsetForGraphText-5)
      .attr("r",5);


  focusElement.append("text")
      .attr("x", 15)
      .attr("y",yOffsetForGraphText);


focusElement.append("line")
.attr("stroke","orange")
.attr("fill","black")
.attr("stroke-width",3)
.attr({
  "x1":0,
  "y1":10,
  "x2":0,
  "y2":120,
});



      return focusElement;
}
