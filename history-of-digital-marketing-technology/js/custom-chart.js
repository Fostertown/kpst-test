// JavaScript Document

var chartData = [


 {
        "date": "2012-01-03",
        "distance": 6,
    },
    {
        "date": "2012-01-04",
        "distance": 5,
    },
    {
        "date": "2012-01-05",
        "distance": 10,
    },
    {
        "date": "2012-01-06",
        "distance": 10,
    },
    {
        "date": "2012-01-07",
        "distance": 15,

    },
    {
        "date": "2012-01-08",
        "distance": 2,

    },
    {
        "date": "2012-01-09",
        "distance": 6,

    },
    {
        "date": "2012-01-10",
        "distance": 27,

    },
    {
        "date": "2012-01-11",
        "distance": 26,

    },
    {
        "date": "2012-01-12",
        "distance": 12,

    },
    {
        "date": "2012-01-13",
		"distance": 18,
    },
   {
        "date": "2012-01-14",
		"distance": 35,
    },


];
var chart = AmCharts.makeChart("chartdiv", {
  type: "serial",
  theme: "dark",
  dataDateFormat: "YYYY-MM-DD",
  dataProvider: chartData,

  addClassNames: true,
  startDuration: 1,
  color: "#000000",
  marginLeft: 0,


  categoryField: "date",
  categoryAxis: {
    parseDates: true,
    minPeriod: "DD",
    autoGridCount: false,
    gridCount: 50,
    gridAlpha: 0.1,
    gridColor: "#000000",
    axisColor: "#000000",
    dateFormats: [{
        period: 'DD',
        format: 'DD'
    }, {
        period: 'WW',
        format: 'MMM DD'
    }, {
        period: 'MM',
        format: 'MMM'
    }, {
        period: 'YYYY',
        format: 'YYYY'
    }]
  },

  valueAxes: [{
    id: "a1",
	title:  "Acquisitions number",
	gridColor: "#000000",
    axisColor: "#000000",
    gridAlpha: 1,
    axisAlpha: 0
  }],
  graphs: [{
    id: "g1",
    valueField:  "distance",
    title:  "acquisitions",
    type:  "column",
    fillAlphas:  1,
    valueAxis:  "a1",
    balloonText:  "[[value]] acquisitions",
    legendValueText:  "[[value]] acquisitions",
    legendPeriodValueText:  "total: [[value.sum]] acquisitions",
    lineColor:  "#e93f1d",
    alphaField:  "alpha",

  }],
  
    legend: {
    bulletType: "round",
    equalWidths: false,
    valueWidth: 120,
    useGraphSettings: true,
    color: "#000000"
  }

  

});