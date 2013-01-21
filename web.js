var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/app'));

//app.get('/', function(request, response) {
//  response.send('app/index.html');
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});