const express = require('express');
const app = express();
const port = 3500;
const routes = require('./routes/admin_routes');

app.set('view engine', 'ejs');
app.use(routes);
app.listen(port, do_listening);

function do_listening(){
    console.log('listening on localhost: ' + port)
}