#!/usr/bin/env node

var express = require("express");
var app     = express();

var port = 3000;
var assets = ["www"];

var args = process.argv.splice(2);

if (args.length) {
  port = args.shift();
}

if (args.length) {
  assets = args;
}

console.log('Serving files located:');

for (var i=0; i<assets.length; i++)  {
  console.log('\t' + assets[i]);
  app.use(express.static(__dirname + '/' + assets[i]));
}

app.listen(port, function() {
  console.log('Server started at: localhost:' + port);
});
