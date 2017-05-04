var express = require('express');

// Create our app
var app = express();

// Which app to serve
// app.use() adds functionality to the express application
// express.static exposes the folder name we want to use for the public
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
