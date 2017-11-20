var express = require('express');
var passport = require('passport'); // use passport by requiring it
var app = express();
var bodyParser = require('body-parser')
var port = process.env.PORT || 3900; // designate a port
var flash = require('connect-flash'); // allows for passing session flashdata messages
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var configDB = require('./config/database.js');
var mongoose = require('mongoose'); // use mongoose to object model our MongoDB database
mongoose.Promise = require('bluebird');


// configuration ===============================================================
mongoose.connect(configDB.url, {
    useMongoClient: true
}); // connect to our database

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// set up our express application by adding Middleware layers one by one in multiple invocations of use
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
    extended: true
}));
// The urlencoded method within body-parser tells body-parser to extract data from the <form> element and add them to the body property in the request object.
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json()) // Teach our server to read JSON data by using the bodyparser.json() middleware
app.set('view engine', 'ejs'); // Set up ejs for templating

// required for passport 
app.use(session({
    secret: '<mysecret>',
    saveUninitialized: true,
    resave: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
app.set('view engine', 'ejs'); // set up ejs for templating

require('./config/passport/main_passport')(passport); // pass passport for configuration

// routes ======================================================================
require('./app/routes/main_routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);