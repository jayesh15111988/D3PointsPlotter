
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




}



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