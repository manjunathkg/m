//var express = require('express');
var send = require('send')
  , http = require('http');

//var app = express.createServer(express.logger());

var app = http.createServer( function(req, res){
  send(req.url)
  .from(__dirname + '/app')
  .maxage(60000)
  .pipe(res);
} 
);


//app.use("/", express.static(__dirname + '/app'));
//app.use("/modules/*" , express.static(__dirname + '/app/modules'));
//app.use(app.router);
 

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



  