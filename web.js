 
var send = require('send')
  , http = require('http');

 

var app = http.createServer( function(req, res){
  	send(req.url)
  		.from(__dirname,'/app') 
  		.pipe(res);
	} 
);

  

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});



  