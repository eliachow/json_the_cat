const request = require('request');

const fetchBreedDescription = function(breed, callback) {

  return request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      // console.error(error);
    }

    //JSON.parse translates the data into a readable object.
    const data = JSON.parse(body);
    
    //if the breed does not exist the result will be an empty array.

    if (data.length === 0) {
      callback("Breed not found 😿", null);
    } else {
      callback(null, data[0]['description']);
    }
  });
};

module.exports = { fetchBreedDescription };