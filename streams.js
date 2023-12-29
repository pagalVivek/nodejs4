const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    const rstram = fs.createReadStream('input.txt');
    rstram.pipe(res);
});

server.listen(8000,'localhost');