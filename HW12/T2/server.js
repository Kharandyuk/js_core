var http = require('http');
var url = require('url');
var static = require('node-static');
var file = new static.Server('.');


let timeStamp = new Date().toString().replace(/\(.*$/g,'');

function accept(req, res) {
      if (req.url == '/timeStamp') {
         res.writeHead(200, {'Content-Type': 'text/html'});

         res.end( timeStamp );// can set delay
         } else {
      file.serve(req, res);
      }
  }
http.createServer(accept).listen(8080);
   

