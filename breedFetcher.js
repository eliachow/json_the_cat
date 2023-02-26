const request = require('request');

const args = (process.argv).slice(2);
const breed = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error) {
    console.error(error);
  }

  //JSON.parse translates the data into a readable object.
  const data = JSON.parse(body);
    
  //if the breed does not exist the result will be an empty array.
  if (data.length === 0) {
    console.log("Breed not found 😿");
  } else {
    console.log(data[0]['description']);
  }

    
});