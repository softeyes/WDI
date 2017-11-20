var express = require('express');
var routes = require('./routes/routes.js');
var app = express();
var port = 3750;
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(routes);

app.listen(port, do_listening);

function do_listening() {
    console.log('Listening on port: ' + port);
};