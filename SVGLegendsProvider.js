function addLegendsToInputSVGElement(currentSVGElement) {
    var legend = currentSVGElement.append("g")
        .attr("class", "legend")
        .attr("height", 100)
        .attr("width", 100)
        .attr('transform', 'translate(-20,50)')
    legend.selectAll('circle')
        .data(legendColors)
        .enter()
        .append("circle")
        .attr("cx", legendsPadding)
        .attr("cy", function (d, legendColorIndex) {
            return legendColorIndex * 20;
        })
        .attr("r", 5)
        .style("fill", function (legendColorValue) {
            return legendColorValue
        })
    legend.selectAll('text')
        .data(legendLabels)
        .enter()
        .append("text")
        .attr("x", legendsPadding + 20)
        .attr("y", function (d, legendLabelIndex) {
            return legendLabelIndex * 20 + 5;
        })
        .text(function (legendLabelValue) {
            return legendLabelValue
        });
}