const http = require('http');
const fs = require('fs');

const PORT = process.env.PORT || 8081;
const HOST = process.env.HOST || 'localhost' // 127.0.0.1
const route = './labs/index.html'

const formatResponse = (code, message, response, cType = 'text/plain', greeting = 'Привет от Дмитрия Куца.') => {
  response.writeHead(code, { 'Content-Type': `${cType}; charset=utf-8` });
  response.write(greeting)
  response.end(message);
}

const server = http.createServer((request, response) => {
  fs.readFile(route, 'utf8', (err, data) => {
    if (err) {
      formatResponse(404, 'Something went wrong!', response, 'text/plain', '');
    }
    formatResponse(200, data, response)
  })
});

server.listen(PORT);