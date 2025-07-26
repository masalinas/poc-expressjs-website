const express = require('express');
const serveIndex = require('serve-index');

// create expressJS Server
const app = express();

// recover arguments
const args = require('minimist')(process.argv.slice(2));
const port = args['port']
const path = args['path']

// configure default port argument and root path
if (port == undefined)
  port = 3000

if (path == undefined) {
  console.error('The path must be defined!')
  return;
}

// configure expressJS server
app.use('/',
  express.static(path),
  serveIndex(path, { icons: true }));

// start expressJS Server
app.listen(port);

console.log('Listening on port:' + port + ' for site path:' + path);
