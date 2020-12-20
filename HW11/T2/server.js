var http = require('http');
var dt = require('./personalmodule');

http.createServer(function (req, res) {

  let result = `Date of request: ${dt.myDateTime()}<br>
   ${dt.customGreeting()}
`;
   
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(result);
}).listen(8000);