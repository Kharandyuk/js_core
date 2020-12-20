//T1
const http = require("http");
const path = require('path');
const os = require('os');
let result = "";

result = `<h2>System information</h2> <br> 
Current user name:  ${os.userInfo().username} <br>
OS type: ${os.type()} <br>
System work time: ${Math.floor(os.uptime()/60)} minutes<br>
Current work directory: ${path.resolve('.')} <br>
Server filename: ${path.basename(__filename)} <br>
`;
http.createServer( function(request, response) {
   // Send the HTTP header with HTTP Status: 200=OK, Content Type: text/plain
response.writeHead(200, {'Content-Type': 'text/html'});

   // Send the response body as "Testing NodeJS server"

   response.end( result);
  
}).listen(8000);


console.log('Server running at http://127.0.0.1:8000/');

