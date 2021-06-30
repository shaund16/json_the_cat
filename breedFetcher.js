const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (error) return console.error(error);
  
  const [data] = JSON.parse(body);
  if (!data) return console.log('Breed Not Found');

  return console.log(data.description);
});