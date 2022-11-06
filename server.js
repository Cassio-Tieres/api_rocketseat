// servidor com nodejs puro
const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));

    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.end("Primeira aplicação com nodejs");

}).listen(4001, () => console.log('Servidor está rodando na porta 4001'));


