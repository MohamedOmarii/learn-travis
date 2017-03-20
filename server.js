var http = require('http');

var router = (request, response) => {
  response.writeHead(200, {'content-type' : 'text/html'});
  response.write('Hello World');
  response.end();
}

var server = http.createServer(router);

module.exports = router;
