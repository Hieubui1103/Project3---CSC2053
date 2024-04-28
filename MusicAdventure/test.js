const { decode, encode } = require('base-64');

const clientId = '4b03037852e141998c4b9c9b0aa49b98';
const clientSecret = '3cb10a9302b84244a2639a587cbf563c';

const tokenUrl = 'https://accounts.spotify.com/api/token';

async function getToken() {
    try {
      const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${encode(`${clientId}:${clientSecret}`)}`,
        },
        body: new URLSearchParams({
          grant_type: 'client_credentials'
        }),
      });
      //console.log(`Basic ${encode(`${clientId}:${clientSecret}`).toString('base64')}`);
      const data = await response.json();
      const accessToken = data.access_token;
      console.log(accessToken)

      return accessToken;
    } catch (error) {
      console.error('Error:', error);
    }
  }
getToken()
module.exports = {getToken};