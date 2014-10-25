      var maximumSVGWidth = 5000;
      var maximumSVGheight = 500;
      var graphPadding = 70;
      var legendsPadding = 150;
      var currentWordFrequency = '';
      var SVGOffset = 100;
      var numberOfTicksInYdirection = 2,
          numberOfTicksInXdirection = 50;
      var xAxisOrientation = "bottom",
          yAxisOrientation = "left";
      var bulletsDefaultYValue = 200;
      //Extra variable added for tool tip positioning - This determines how far tooltip lies from 
      //the point on which cursor is hovered
      var xOffsetForTooltipLabel = 100;
      var defaultColorOpacity = "0.4";
      var defaultYOffsetForDataPointLabel = 60;
      var color = d3.scale.category20();
      
       //Line drawn from Bullet point to the corresponding label
      var legendLabels = ["Spam", "Regular Message"];
      var legendColors = ["red", "green"];