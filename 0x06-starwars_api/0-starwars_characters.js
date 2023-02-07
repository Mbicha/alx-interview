const request = require('request');

function printCharacters(movieId) {
  const endpoint = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

  request(endpoint, (error, response, body) => {
    if (error) {
      return console.error(error);
    }

    if (response.statusCode !== 200) {
      return console.error(`Failed to retrieve film details with status code: ${response.statusCode}`);
    }

    const data = JSON.parse(body);
    const characters = data.characters;

    characters.forEach((characterUrl) => {
      request(characterUrl, (error, response, body) => {
        if (error) {
          return console.error(error);
        }

        const characterData = JSON.parse(body);
        console.log(characterData.name);
      });
    });
  });
}
