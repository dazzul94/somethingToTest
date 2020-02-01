var call_host = $(location).attr('origin')
var context_path = '';

$(document).ready(function() {
	mainHandler.init();
});

var mainHandler = {
    init: function() {
    	chartHandler.init();
    }
}

var chartHandler = {
	init: function() {
		this.drawChart();
	},
	drawChart: function() {
		Highcharts.chart('container', {
		    title: {
		        text: 'Scatter plot with regression line'
		    },
		    xAxis: {
		        min: -0.5,
		        max: 5.5
		    },
		    yAxis: {
		        min: 0
		    },
		    series: [{
		        type: 'line',
		        name: 'Regression Line',
		        data: [[0, 1.11], [5, 4.51]],
		        marker: {
		            enabled: false
		        },
		        states: {
		            hover: {
		                lineWidth: 0
		            }
		        },
		        enableMouseTracking: false
		    }, {
		        type: 'scatter',
		        name: 'Observations',
		        data: [1, 1.5, 2.8, 3.5, 3.9, 4.2],
		        marker: {
		            radius: 4
		        }
		    }]
		});
	}
}

//화면 넓이에 따라 그리드 넓이 조절
$(window).resize(function() {
	
});