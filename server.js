// Server to execute GIBS Converter APP on node.js
// During Seven Days of Coding Challenge
//#ALCwithGoogle3.0

const http = require('http');
const fs = require('fs');
function onRequest(request, response)
{
	response.writeHead(200, {'Content-Type':'text/html'});
	fs.readFile('./index.html', null, function(error, data){
		if(error){
			response.writeHead(404);
			response.write('File not found');
		} else {
			response.write(data);
		}
		response.end();
	})
}S

http.createServer(onRequest).listen(8082);