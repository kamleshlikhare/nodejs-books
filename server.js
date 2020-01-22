const http = require('http');
const app = require('./app');
const config = require('./config');


const port  = config.port || 3000;
const server = http.createServer(app);

server.listen(port, ()=> {
    console.log(`node started on port ${port}`);
    return 
});
