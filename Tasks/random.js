// Generate random integer value in given range
//Step 3:
// Simplify the condition using the ternary operator
const getRandomNumber = (min, max = min) => Math.floor(Math.random() * (max - min + 1) + min);

module.exports = getRandomNumber;