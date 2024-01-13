// Generate int array from given range
// Step 3:
// Get rid of creating a new array and
// instead use the Array.from() method to create
// an array in the specified range
const createRange = (...range) => {
  let [start, end] = range;
  if (end < start) {
    return [];
  }
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

module.exports = createRange;

