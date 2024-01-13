// Get one random element from an array
// Step 1:
// Rename the array for readability
const SAMPLE = (array) => {
  array = array[Math.floor(Math.random() * array.length)];
  return array;
};

module.exports = SAMPLE;
