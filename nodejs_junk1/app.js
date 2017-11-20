var express = require('express');
var app = express();
var port = 3500;
var routes = require('./routes/routes');

app.use(routes);
app.set('view engine', 'ejs');
app.listen(port, listening);

function listening() {
    console.log('Listening on localhost: ' + port);

}