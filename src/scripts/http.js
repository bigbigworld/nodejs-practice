var http = require('http');
var fs = require('fs');
var url = require("url");
var querystring = require('querystring');
var exec = require("child_process").exec;
var path = require("path");

var file_helloworld_path = "../pages/hello-world.html";
var file_image_1_path = "../images/1.jpg";
var outputDir = "../output/";

// http.createServer(function (request, response){
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write("Hello World");
//   response.end();
// }).listen(8080, '127.0.0.1');
//
// console.log('Server running on port 8080.');

// 另一种写法
// function onRequest(request, response) {
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.write("Hello World");
//   response.end();
// }
// process.env.PORT = process.env.PORT || 8080;
// http.createServer(onRequest).listen(process.env.PORT);

// http.createServer(function(request, response) {
//
//     // fs.readFile(file_helloworld_path, function(err, data) {
//     //     response.writeHead(200, {
//     //         'Content-Type': 'text/html'
//     //     });
//     //     response.end(data);
//     // });
//
//     // 或者
//     fs.createReadStream(`${file_helloworld_path}`).pipe(response);
// }).listen(8080, '127.0.0.1');
//
// console.log('Server running on port 8080.');

// http.createServer(function(req, res) {
//
//     if (req.url == "/") { // 主页
//         res.writeHead(200, {
//             "Content-Type": "text/html"
//         });
//         res.end("<h1>Welcome to the homepage!</h1>");
//     } else if (req.url == "/about") { // About页面
//         res.writeHead(200, {
//             "Content-Type": "text/html"
//         });
//         res.end("<h1>Welcome to the about page!</h1>");
//     } else { // 404错误
//         res.writeHead(404, {
//             "Content-Type": "text/html"
//         });
//         res.end("<h1>404 error! File not found.</h1>");
//     }
//
// }).listen(8080, "localhost");

// http.createServer(function(req, res) {
//     console.log("=> req:", req);
//     console.log("=> res:", res);
//     console.log("=> url:", url.parse(req.url));
//
//     res.writeHead(200, {"Content-Type":"text/html"});
//     res.end("<h1>hi!</h1>");
// }).listen(8080);

// http.createServer(function(request, response) {
//   var postData = '';
//
//   request.addListener('data', function(postDataChunk) {
//     postData += postDataChunk;
//   });
//
//   request.addListener('end', function() {
//     response.writeHead(200, {
//       'Content-Type': 'text/plain'
//     });
//     console.log("postData", postData);
//     response.write("You've sent the text: " + querystring.parse(postData).text);
//     response.end();
//   });
//
// }).listen(8080);


// http.createServer(function(request, response) {
//   exec('dir', function(error, stdout, stderr) {
//     response.writeHead(200, {
//       'Content-Type': 'text/plain'
//     });
//     response.write(stdout); // 这里的字符编码取决于控制台，如果想要显示utf-8字符编码，就必须在命令行输入chcp 1936
//     response.end();
//   });
// }).listen(8080);

// http.createServer(function(req, res) {
//   var content = "";
//
//   req.on('data', function(chunk) {
//     content += chunk;
//   });
//
//   req.on('end', function() {
//     res.writeHead(200, {
//       "Content-Type": "text/plain"
//     });
//     res.write("You've sent: " + content);
//     res.end();
//   });
//
// }).listen(8080);

// "use strict";
//
// var http = require('http');
// var fs = require('fs');
// var destinationFile,
//   fileSize,
//   uploadedBytes;
//
// http.createServer(function(request, response) {
//   response.writeHead(200);
//   destinationFile = fs.createWriteStream(path.join(outputDir, "destination.md"));
//   request.pipe(destinationFile);
//   fileSize = request.headers['content-length'];
//   uploadedBytes = 0;
//
//   request.on('data', function(d) {
//     uploadedBytes += d.length;
//     var p = (uploadedBytes / fileSize) * 100;
//     response.write("Uploading " + parseInt(p, 0) + " %\n");
//   });
//
//   request.on('end', function() {
//     response.end("File Upload Complete");
//   });
// }).listen(8080, function() {
//   console.log("server started");
// });


// function getTestPersonaLoginCredentials(callback) {
//   return http.get({
//     host: 'localhost',
//     port: 3030,
//     path: '/email'
//   }, function(response) {
//     var body = '';
//
//     response.on('data', function(d) {
//       body += d;
//     });
//
//     response.on('end', function() {
//       var parsed = JSON.parse(body);
//       callback({
//         email: parsed.email,
//         password: parsed.pass
//       });
//     });
//   });
// }
//
// getTestPersonaLoginCredentials(function(obj) {
//   console.log("type:", typeof obj);
//   console.log("email:", obj);
// })

// var postData = querystring.stringify({
//   'msg': 'Hello World!'
// });
//
// var options = {
//   hostname: 'localhost',
//   port: 3030,
//   path: '/',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Content-Length': postData.length
//   }
// };
//
// var req = http.request(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function(chunk) {
//     console.log('BODY: ' + chunk);
//   });
// });
//
// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });
//
// // write data to request body
// var postData = fs.readFileSync(file_image_1_path, "utf8");
// req.end();

var server = new http.Server();
server.listen(8080, "localhost", function() {
  console.log("http://localhost:8080 running ...");
});

server.on('request', function(request, response) {
  // 解析请求的URL
  var url = require('url').parse(request.url);
  if (url.pathname === '/test/1') {
    response.writeHead(200, {
      'Content-Type': 'text/plain; charset=UTF-8'
    });
    response.write('Hello');
    response.end();
  } else if (url.pathname === '/test/2') {
    response.writeHead(200, {
      'Content-Type': 'text/plain; charset=UTF-8'
    });
    response.write(request.method + ' ' + request.url +
      ' HTTP/' + request.httpVersion + '\r\n');
    for (var h in request.headers) {
      response.write(h + ': ' + request.headers[h] + '\r\n');
    }
    response.write('\r\n');
    request.on('data', function(chunk) {
      response.write(chunk);
    });
    request.on('end', function(chunk) {
      response.end();
    });
  } else {
    var filename = path.join("../", url.pathname.substring(1));
    var type;
    switch (filename.substring(filename.lastIndexOf('.') + 1)) {
      case 'html':
      case 'htm':
        type = 'text/html; charset=UTF-8';
        break;
      case 'js':
        type = 'application/javascript; charset=UTF-8';
        break;
      case 'css':
        type = 'text/css; charset=UTF-8';
        break;
      case 'txt':
        type = 'text/plain; charset=UTF-8';
        break;
      case 'manifest':
        type = 'text/cache-manifest; charset=UTF-8';
        break;
      case "jpg":
        type = "image/jpeg";
        break;
      default:
        type = 'application/octet-stream';
        break;
    }
    fs.readFile(filename, function(err, content) {
      if (err) {
        response.writeHead(404, {
          'Content-Type': 'text/plain; charset=UTF-8'
        });
        response.write(err.message);
        response.end();
      } else {
        response.writeHead(200, {
          'Content-Type': type
        });
        response.write(content);
        response.end();
      }
    });
  }
});
