// Sum all numbers from an array
//Step 1:
// Improve code style and readability:

const sum = (arr = function (input = []) {
  let result = [0];

  for (let item of input) {
    if (typeof item === 'number') {
      const newSum = result[result.length - 1] + item;
      result.push(newSum);
    }
  }

  return result[0];
});

module.exports = sum;

