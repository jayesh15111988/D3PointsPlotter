function createGraphFromKMeansClusteringResults(KMeansClusteringOutput, graphMetaData, yValue) {
    //Adjusting graph width for KMeans clustering graph
    maximumSVGWidth = 2500;
    var xScale = getXScale(KMeansClusteringOutput);
    var yScale = getYScale(KMeansClusteringOutput);
    var svg = createSVGElement(graphMetaData[0]);
    numberOfTicksInXdirection = 10;
    numberOfTicksInYdirection = 5;
    appendAxisToSVGElementWithScale(svg, xScale, yScale, graphMetaData[1], graphMetaData[2]);
    var pointIndicatorLineForKMeans = svg.append("line")
        .attr("stroke", "green")
        .attr("stroke-width", 1);
         svg.selectAll("circle")
        .data(KMeansClusteringOutput)
        .enter()
        .append("circle")
        .attr("cx", function (datapoint) {
            for (inputMessage in datapoint) {
                var dataPointsTuple = datapoint[inputMessage];
                return xScale(dataPointsTuple[0]);
            }
        })
        .attr("cy", function (datapoint) {
            for (inputMessage in datapoint) {
                var dataPointsTuple = datapoint[inputMessage];
                return yScale(dataPointsTuple[1]);
            }
        })
        .attr("r", 5) // We are adding these elements to fire events when user hovers over these data points
        .attr("class", "overlay")
        .on("mouseover", function (data) {

            //X and y positions on graph where mouse is hovered
            var xPosition = parseFloat(d3.select(this).attr("cx"));
            var yPosition = parseFloat(d3.select(this).attr("cy")) / 2;
            mouseMovedOverDataPointsKMeans(data, xPosition,yPosition);
        })
        .on("mouseout", function () {
            //hide tooltip as soon as mouse is hovered away from data point
            d3.select("#tooltip").classed("hidden", true);
        })
        .attr("fill", function (d, i) {
            var currentTupleWithMessageType = d;
            for (inputMessage in currentTupleWithMessageType) {
                //If true, it is Spam!
                if (currentTupleWithMessageType[inputMessage][2] == true) {
                    return legendColors[0];
                } else {
                    return legendColors[1];
                }
            }
        })
        .attr("fill-opacity", defaultColorOpacity);

    //Which event gets triggered when user hovers mouse pointer over bullets
    function mouseMovedOverDataPointsKMeans(data,xPosition,yPosition) {

        var currentTupleWithDataPoints = [];
        var inputMessageValue = '';
        for (inputMessage in data) {
            //Actual Holder holding distance from spam centroid, regular centroid and indicator if
            //current message is spam or not
            currentTupleWithMessageType = data[inputMessage];
            //Actual message
            inputMessageValue = inputMessage;
        }

            var messageCategory = ''
            if (currentTupleWithMessageType[2] == true) {
                messageCategory = "Spam";
            } else {
                messageCategory = "RegularMessage";
            }


            var tooltipMetaDataHolder = {
                xCoordinatePosition : ((xPosition +xOffsetForTooltipLabel)+ "px"),
                yCoordinatePosition : ((yValue + yPosition)+ "px"),
                tooltipBody : inputMessageValue,
                tooltipTitle : messageCategory,
                tooltipTitleClass : messageCategory
            };

            generateTooltipWithMetadata(tooltipMetaDataHolder);
    }
    addLegendsToInputSVGElement(svg);
}