// Generate random integer value in given range
//Step 2:
// Using the Arrow Function for a More Concise Syntax
const getRandomNumber = (min, max = min) => Math.floor(Math.random() * (max + 1));

module.exports = getRandomNumber;