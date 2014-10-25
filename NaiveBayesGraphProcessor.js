 function createGraphFromMessagesKeywords(inputDataset,graphLabel,yValueForTooltip) {
     //Create scale functions
     var xScale = getScaleForNaiveBayesvisualizationWithData(inputDataset);
     //We are going in the reverse direction as SVG scale grows in downward direction
     var yScale = d3.scale.linear()
         .domain([maximumSVGheight - graphPadding, graphPadding])
         .range([graphPadding, maximumSVGheight - graphPadding]);
     //We want different color for different data points
     //Create SVG element
     var svg = createSVGElement(graphLabel);
     //For given scale, add axes to graph
     appendAxisToSVGElementWithScale(svg, xScale, yScale, "Words Frequency in SMS", "Constant");
     //We are plotting frequency of each word in the form of points in the shape of a circle
     svg.selectAll("circle")
         .data(inputDataset)
         .enter()
         .append("circle")
         .attr("cx", function (datapoint) {
             for (frequency in datapoint) {
                 return xScale(frequency);
             }
         })
         .attr("cy", bulletsDefaultYValue)
         .attr("r", function (d) {
             for (key in d) {
                 return Math.sqrt(d[key].length) * 3;
             }
         }) // We are adding these elements to fire events when user hovers over these data points
         .attr("class", "overlay")
         .on("mouseover", function (data,index) {
              var xPosition = parseFloat(d3.select(this).attr("cx"));
              var yPosition = parseFloat(d3.select(this).attr("cy")) / 2;
              mouseMovedOverDataPointsNaiveBayes(data, xPosition, yPosition);
         })
         .on("mouseout", function () {
             d3.select("#tooltip").classed("hidden", true);
         })
         .attr("fill", function (d, i) {
             return color(i);
         })
         .attr("fill-opacity", defaultColorOpacity);

     function mouseMovedOverDataPointsNaiveBayes(data, xPosition, yPosition) {

         var currentFrequencyValue = 0.0;
         for (key in data) {
             currentFrequencyValue = key;
         }

            var tooltipMetaDataHolder = {
                xCoordinatePosition : ((xPosition +xOffsetForTooltipLabel)+ "px"),
                yCoordinatePosition : ((yValueForTooltip + yPosition)+ "px"),
                tooltipBody : data[currentFrequencyValue].join(", "),
                tooltipTitle : "Frequency of Occurrence : " + currentFrequencyValue,
                tooltipTitleClass : "RegularMessage"
            };
            generateTooltipWithMetadata(tooltipMetaDataHolder);


     }
 }