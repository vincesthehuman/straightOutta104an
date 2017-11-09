const SpotifyWebApi = require('spotify-web-api-node')
const fetch = require('node-fetch')
require('dotenv').config()

/**
 * This example retrives an access token using the Client Credentials Flow. It's well documented here:
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

/*
 * https://developer.spotify.com/spotify-web-api/using-scopes/
 */

/**
 * Set the credentials given on Spotify's My Applications page.
 * https://developer.spotify.com/my-applications
 */
let spotifyApi = new SpotifyWebApi({
  clientId: process.env['clientId'],
  clientSecret: process.env['clientSecret']
})

// Retrieve an access token
const getNewAccessToken = () =>
  spotifyApi.clientCredentialsGrant()
    .then(data => {
      console.log('The access token expires in ' + data.body['expires_in'])

      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token'])
      return spotifyApi.getAccessToken()
    })
    .catch(err => {
      console.log(
        'Something went wrong when retrieving an access token',
        err.message
      )
    })

const requestToAPI = url =>
  fetch(url, {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + spotifyApi.getAccessToken() }
  })
    .then(res => res.json())
    .catch(error => error)

//ToDo
//Add function that sets when the token expires
//Add function that checks if the token has expired

module.exports = { getNewAccessToken, requestToAPI }
