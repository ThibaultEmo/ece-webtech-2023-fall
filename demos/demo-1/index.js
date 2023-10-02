// Import a module
const http = require('http')

// Define a string constant concatenating strings
const content = '<!DOCTYPE html>' +
  '<html>' +
  '    <head>' +
  '        <meta charset="utf-8" />' +
  '        <title>ECE AST</title>' +
  '    </head>' +
  '    <body>' +
  '       <h1>Hello World!</h1>' +
  '    </body>' +
  '</html>'

const serverHandle = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(content)
  res.end()
}

http
  .createServer(serverHandle)
  .listen(8080)