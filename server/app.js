var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = 3000;
var jokes = require( './routes/jokes.js')


// static file requests
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.use('/jokes',jokes); //added for the router feature


// Send index.html file
app.get('/', function(req, res) {
  res.sendFile(path.resolve('server/public/views/index.html'));
});


// Start the server!
app.listen(port, function() {
  console.log("Node listening on port " + port);
});
