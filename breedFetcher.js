const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    if (error) {
      return callback(error);
    }
    const [data] = JSON.parse(body);
    if (!data) {
      return callback('Breed Not Found');
    }
    callback(null, data.description);
  });

};

module.exports = { fetchBreedDescription };


