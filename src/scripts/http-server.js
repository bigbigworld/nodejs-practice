var http = require("http");

http.createServer(function(req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200, {
        "content-type": "text/html"
      });
      res.end("<h1> Hello World!</h1>");
      break;
    case "/email":
      res.writeHead(200, {
        "content-type": "application/json"
      });
      res.end('{"email":"elliot@test.com", "password":"loveyou"}');
    default:
      res.writeHead(404, {
        "content-type": "text/html"
      });
      res.end("<h1>not found!</h1>");
  }
}).listen(3030, "localhost", function() {
  console.log("localhost:3030 running ...");
});
