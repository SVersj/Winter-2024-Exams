// Get one random element from an array
// Step 2:
// Remove the extra variable and use a shorthand notation for the return value:
const sample = array => array[Math.floor(Math.random() * array.length)];

module.exports = sample;
