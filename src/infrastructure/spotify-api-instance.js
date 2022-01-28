const config = require('../config');

var SpotifyWebApi = require('./spotify-web-api');
var ServerMethods = require('./server-methods');
SpotifyWebApi._addMethods(ServerMethods);

const spotifyApi = new SpotifyWebApi({
    //redirectUri: 'https://ee95-62-217-191-11.ngrok.io/login/callback',
    clientId: config.spotify.clientId,
    clientSecret: config.spotify.clientSecret
});

spotifyApi.setRedirectURI('http://0965-176-103-61-128.ngrok.io/login/callback');

module.exports = {
    spotifyApi
}