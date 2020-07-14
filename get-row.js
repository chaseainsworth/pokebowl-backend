// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');

const getRow = function(str) {
  let result = [];

  for (const mon of pokemon) {
    if (str === mon[0]) {

      result.push(mon[0])
    
    }
  }
  return result;
}

if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
