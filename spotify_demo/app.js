var SpotifyWebApi = require('spotify-web-api-node');
var creds = require('./spotify_creds');
var express = require('express');
var port = 3900;
var spotify_data = require('./spotify');

var app = express();

app.set('view engine', 'ejs');
app.get('/', do_homepage);

function do_homepage(req, res) {
    console.log('doing homepage');
    console.log(spotify_data());
    res.render('index', spotify_data());

};

app.listen(port, do_listening);

function do_listening() {
    console.log('Listening on: ' + port);

}