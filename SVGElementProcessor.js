function createSVGElement(graphTitle) {
    var SVGElement = d3.select("body")
        .append("p")
        .attr("class", "separator")
        .append("svg")
        .attr("width", maximumSVGWidth)
        .attr("height", maximumSVGheight)
        .attr("x", SVGOffset)
        .attr("y", SVGOffset);
    //Adding title to graph elements for current context
    SVGElement.append("text")
        .attr("x", 20)
        .attr("y", 20)
        .attr("fill", "rgb(25,20,0)")
        .text(graphTitle);
    return SVGElement;
}

function appendAxisToSVGElementWithScale(svg, xScale, yScale, xAxisTitle, yAxisTitle) {
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
        .attr("x", maximumSVGWidth / 3)
        .attr("y", maximumSVGheight - 20)
        .text(xAxisTitle);
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("y", 6)
        .attr("dy", "10")
        .attr("dx", -(maximumSVGheight / 3))
        .attr("transform", "rotate(-90)")
        .text(yAxisTitle);
    //We are adding Axis for given graph element
    svg.append("g")
        .attr("class", "axes")
        .attr("transform", "translate(0, " + (maximumSVGheight - graphPadding) + ")")
        .call(xAxis);
    //Append y axis to given SVG element
    svg.append("g")
        .attr("class", "axes")
        .attr("transform", "translate(" + graphPadding + ",0)")
        .call(yAxis);
}