// Spotify data
// credentials are optional
var SpotifyWebApi = require('spotify-web-api-node');
var creds = require('./spotify_creds');
var spotifyApi = new SpotifyWebApi({
    clientId: creds.client_id,
    clientSecret: creds.client_secret
});

// Retrieve an access token
function spotify_function() {

    spotifyApi.clientCredentialsGrant()
        .then(function (data) {
            console.log('The access token expires in ' + data.body['expires_in']);
            console.log('The access token is ' + data.body['access_token']);

            // Save the access token so that it's used in future calls
            spotifyApi.setAccessToken(data.body['access_token']);
        }, function (err) {
            console.log('Something went wrong when retrieving an access token', err.message);
        }).then(function () {
            // Get Elvis' albums
            // spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
            //     .then(function (data) {
            //         console.log('Artist albums', data.body);
            //     }, function (err) {
            //         console.error(err);
            //     });
            spotifyApi.getCategories()
                .then(function (data) {
                    console.log(data.body.categories.items);
                    return {name: 'bill'}
                    // return data.body.categories.items;
                });

        });

};

module.exports = spotify_function;