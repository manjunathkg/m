var static = require('node-static');
var port = process.env.PORT || 5000;





var fileServer = new static.Server('./app');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    });
}).listen(port);


 