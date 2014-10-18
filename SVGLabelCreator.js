function createFocusElement(svg, yOffsetForGraphText) {
    var focusElement = svg.append("g")
        .attr("class", "focus")
        .style("display", "none");
    focusElement.append("circle")
        .attr("stroke", "blue")
        .attr("fill", "none")
        .attr("stroke-width", 0.5)
        .attr("cy", yOffsetForGraphText - 5)
        .attr("r", 5);
    focusElement.append("text")
        .attr("x", 15)
        .attr("y", yOffsetForGraphText);
    focusElement.append("line")
        .attr("stroke", "orange")
        .attr("stroke-width", 2)
        .attr({
            "x1": 0,
            "y1": 10,
            "x2": 0,
            "y2": 120,
        });
    return focusElement;
}