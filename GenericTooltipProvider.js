function generateTooltipWithMetadata(tooltipDataAndPosition) {
	  //Show the tooltip
            d3.select("#tooltip").classed("hidden", false);

            //Update the tooltip position and value
            d3.select("#tooltip")
            .style("left", tooltipDataAndPosition.xCoordinatePosition)
            .style("top", tooltipDataAndPosition.yCoordinatePosition)
            .select("#tooltipBody")
            .text(tooltipDataAndPosition.tooltipBody);
        
            //We want to show Spam messages in Red and Regular messages in Green color
            
            d3.select("#tooltip")
            .select("#tooltipTitle")
            .attr("class",tooltipDataAndPosition.tooltipTitleClass)
            .text(tooltipDataAndPosition.tooltipTitle);
}