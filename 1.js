const http = require('http');

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || 'localhost' // 127.0.0.1
const route = './labs/index.html'

const formatResponse = (code, message, response, cType = 'text/plain', greeting = 'Привет от Дмитрия Куца.') => {
  response.writeHead(code, { 'Content-Type': `${cType}; charset=utf-8` });
  response.write(greeting)
  response.end(message);
}

// task 1
const server = http.createServer((request, response) => {
  formatResponse(200, '\n\nВсе необходимые данные переданы!', response);
});

server.listen(PORT);