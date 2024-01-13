// Sum all numbers from an array
//Step 2:
//Using the arrow function and removing the extra level of nesting

const sum = (arr = []) => {
  let result = [0];

  for (let item of arr) {
    if (typeof item === 'number') {
      const newSum = result[result.length - 1] + item;
      result.push(newSum);
    }
  }

  return result[0];
};

module.exports = sum;