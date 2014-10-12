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