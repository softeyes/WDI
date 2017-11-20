var express = require('express');
var app = express();
var port = 80;
var routes = require('./routes/routes');
// var circularJSON = require('circular-json')
// var fileSystem = require('fs');

app.set("view engine", "ejs");
app.use(routes);

app.listen(port, do_listening);

function do_listening() {
    console.log('Listening on: ' + port)
};

//Using Middleware

// var express = require('express');
// var app = express();
// var port = 3800;
// var routes = require('./routes/routes');
// var circularJSON = require('circular-json')
// var fileSystem = require('fs');

// app.set("view engine", "ejs");
// app.use(explorer);
// app.use(routes);

// function explorer(req, res, next) {
//     res.mood = ('dying for caffeine');
//     fileSystem.writeFile('notices.json', circularJSON.stringify(res));


//     next();
// };

// app.listen(port, do_listening);

// function do_listening() {
//     console.log('Listening on: ' + port)
// };

//Response

// app.use(logger1);
// app.use(logger2);
// app.use(logger3);

// function logger1(req, res, next) {
//     // res.send('f1 testing');
//     next();
// };

// function logger2(req, res, next) {
//     res.send('f2 testing');
//     next()
// };

// function logger3(req, res) {
//     res.send('f3 testing');
// };

// Callbacks

// function logger(data) {
//     console.log(data);
// }

// function db_stuff(my_input, callback) {
//     var response = 'this ';
//     response += my_input;
//     callback(response);
// }

// db_stuff('morning!', logger);