var plotly = require('plotly')("ongasar", "kHriOJYjq5HWETFNb5FD")
var fs = require('fs');

var imgOpts = {
    format: 'png',
    width: 1000,
    height: 500
};

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: "scatter"
};

var figure = { 'data': [trace1] };

plotly.getImage(figure, imgOpts, function (error, imageStream) {
    if (error) return console.log (error);

    var fileStream = fs.createWriteStream('1.png');
    imageStream.pipe(fileStream);
});

// Hello World
// var data = [{x:[0,1,2], y:[3,2,1], type: 'bar'}];
// var layout = {fileopt : "overwrite", filename : "simple-node-example"};
// plotly.plot(data, layout, function (err, msg) {
//     if (err) return console.log(err);
//     console.log(msg);
// });