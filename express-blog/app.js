// app.js
var router = require("./config/routes");

var express = require('express');
var app     = express();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
    extended: true
  }));
  
var port    = process.env.PORT || 3000;

app.listen(port);
console.log('Server started on ' + port);

  app.set('view engine', 'ejs');

// Middleware
app.use(function(req, res, next) {
  console.log('%s request to %s from %s', req.method, req.path, req.ip);

  next();
});
app.use('/', router);


