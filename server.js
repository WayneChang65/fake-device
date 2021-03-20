const http = require('http');
const app = require('./app.js');

const port = process.env.FKCNC_PORT || 3338;
const server = http.createServer(app);

server.listen(port);