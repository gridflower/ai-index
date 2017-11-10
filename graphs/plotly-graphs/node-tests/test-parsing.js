var plotly = require('plotly')("ongasar", "kHriOJYjq5HWETFNb5FD")
var fs = require('fs');

function extendObject(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

var lessThan40 = {
  x: [1995, 1996, 1997, 1999, 2000, 2001, 2003, 2004, 2007, 2008, 2012],
  y: [.8475, .8695, .8835, .8865, .9010, .9070, .9097, .9106, .9115, .9203, .9290],
  name: 'Less than 40 words',
  type: 'scatter',

  /* Connects points with a bolded line. */
  mode: 'lines',
  line: {
    color: 'rgb(101, 190, 235)',
    width: 3
  }
};
var allLengths = {
  x: [2003, 2004, 2007, 2008, 2012, 2015, 2016, 2017],
  y: [.8660, .9010, .9060, .9110, .9240, .9280, .9330, .9425],
  name: 'All sentences',
  type: 'scatter',

  /* Connects points with a bolded line. */
  mode: 'lines',
  line: {
    color: 'rgb(151, 129, 225)',
    width: 3
  }
};

/* GRID SETTINGS */
var gridline_settings = {

    /* Control internals grid lines */
    showgrid: true,
    gridcolor: '#dcdddc',
    gridwidth: 2,

     /* Controls border around the graph */
    showline: true,
    mirror: true,
    linecolor: '#dcdddc',
    linewidth: 2,
}

var data = [lessThan40, allLengths];
var layout = {
  width: 500,
  height: 400,

  /* GRAPH BACKGROUND COLOR */
  plot_bgcolor: 'rgb(255,255,255)',
  /* BCAKGROUND COLOR FOR IMAGE */
  paper_bgcolor: "rgb(248, 248, 248)",

  font: {
      family: 'Proxima Nova, monospace',
      color: '#444444'
  },

  /* TITLE */
  title: "<b>Constituency Parsing, Penn Treebank</b>",
  titlefont: {
    size: 20,
  },

  /* xaxis */ 
  xaxis: extendObject({
    title: '<b>Year</b>',
    range: [1995, 2017],
    titlefont: {
      size: 18,
    },
  }, gridline_settings),

  /* yaxis */ 
  yaxis: extendObject({
    title: '<b>F1 Score</b>',
    range: [.825, .95],
    tickformat: ',.0%',
    titlefont: {
      size: 18,
    },

    /* HACK FOR CREATING AN OFFSET BETWEEN GRAPH AND AXIS LABELS*/
    ticks: 'outside',
    ticklen: 8,
    tickwidth: 2,
    tickcolor: '#dcdddc'
    // tickcolor: 'rgb(248, 248, 248)'
  },gridline_settings),
}

///////////////////
// NODE SPECIFIC //
///////////////////
var figure = { 'data': data, 'layout': layout };
var imgOpts = {
    format: 'png',
    width: 500,
    height: 400
};
plotly.getImage(figure, imgOpts, function (error, imageStream) {
    if (error) return console.log (error);
    var fileStream = fs.createWriteStream('parsing.png');
    imageStream.pipe(fileStream);
});
