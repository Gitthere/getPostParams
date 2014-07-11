
var restify = require('restify');

var server = restify.createServer({
  name: 'app',
  version: '0.0.0'

});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/', function(req,res,next) {
  console.log('GET request');
  res.send("chileverde");
});

server.get('/burrito', function(req,res,next) {
  res.send("fish");
});

server.post('/', function(req,res,next) {
  console.log('POST request');
  res.send(req.body);
});

server.post("/mouth", function(req,res,next) {
  res.send(req.body.nom +' in my mouth');
});


server.listen(1337, function () {
  console.log('%s listening at %s', server.name, server.url);
});