var testData = [
        {
            value: 80,
            color: "#cbdc38",
            label: "CSS"
        },

        {
            value: 80,
            color: "#07a0c3",
            label: "HTML"
        },
        {
            value: 40,
            color: "#1286b7",
            label: "JavaScript"
        },
        {
            value: 40,
            color: "#00c9b8",
            label: "JQuery"
        }
    ];

    var doughnutOptions = {
      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke : false,

      //String - The colour of each segment stroke
      segmentStrokeColor : "#fff",

      //Number - The width of each segment stroke
      segmentStrokeWidth : 1,

      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout : 70, // This is 0 for Pie charts

      //Number - Amount of animation steps
      animationSteps : 25,

      //String - Animation easing effect
      animationEasing : "linear",

      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate : true,

      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale : true,
      tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= value + ' %' %>",
    //  legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"


    };  // Get the context of the canvas element we want to select
        var chartPortfolio = document.getElementById("chartPortfolio").getContext("2d");
        var mychart = new Chart(chartPortfolio).Doughnut(testData,doughnutOptions);
