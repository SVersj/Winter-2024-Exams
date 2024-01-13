// Generate int array from given range
// Step 1:
// Rename the function and use destructuring to improve readability
const createRange = (...range) => {
  let [from, to] = range;
  if (to >= from) {
    range = new Array(to - from + 1);
    for (let i = from; i <= to; i++) {
      range[i - from] = i;
    }
  } else {
    return [];
  }
  return range;
};

module.exports = createRange;

