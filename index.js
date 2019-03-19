var express = require('express');
var app = express();

// example: node . --port=8080 --path=/Users/masalinas/git/edikal-site
var args = require('minimist')(process.argv.slice(2));
var port = args['port'] 
var path = args['path']

// define default port argument
if (port == undefined)
  port = 3000

// control site path argument
if (path == undefined) {
  console.error('The path must be defined!')
  return;
}

app.use(express.static(path));

app.listen(port);
console.log('Listening on port:' + port + ' for site path:' + path);
