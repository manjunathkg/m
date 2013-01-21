var express = require('express');

var app = express.createServer(express.logger());

app.use(app.router);
app.use(express.static(__dirname + '/app'));

 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});