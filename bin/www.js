const http = require('http');
const PORT = 8009;
const serverHandle = require('../app');

let server = http.createServer(serverHandle);

server.listen(PORT);
