console.log('Get inspired!')

var express = require('express');
var app = express();
var port = 4100;
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
var session = require('express-session');

var configDB = require('./config/database.js');
// var MongoClient = require('mongodb').MongoClient

// configuration ===============================================================
// var db = 'mongodb://jared-2017:12345678@ds111476.mlab.com:11476/full_stack_project2';
mongoose.connect(configDB.url, { useMongoClient: true }); // connect to our database

// MongoClient.connect('mongodb://jared-2017:12345678@ds163745.mlab.com:63745/full_stack_project', function (err, database){
//     if (err) return console.log(err)
//     db = database
//   })

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport 
app.use(session({
secret: 'ilovescotchscotchyscotchscotch', // session secret
resave: true,
saveUninitialized: true
})); 
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);