//importando o modulo http
//const http = require('http');
import fs from 'fs';

//criando um servidor que responde com "hello world" para todas as requisições
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Olá, mundo salvo!!');
}).listen(8080);