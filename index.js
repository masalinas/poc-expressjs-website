const express = require('express');
const serveIndex = require('serve-index');

// create expressJS Server
const app = express();

// recover arguments
const args = require('minimiœst')(process.argv.slice(2));
const port = args['port']
const folder = args['folder']

// configure default port argument and root folder
if (port == undefined)
  port = 3000

if (folder == undefined) {
  console.error('The folder must be defined!')
  return;
}

// configure expressJS server
app.use('/',
  express.static(folder),
  serveIndex(folder, { icons: true }));

// start expressJS Server
app.listen(port);

console.log('Listening on port:' + port + ' for site folder:' + folder);
