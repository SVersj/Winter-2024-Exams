// Generate int array from given range
// Step 3:
// Rename the variables for better readability
const createRange = (...range) => {
  let [start, end] = range;
  if (end < start) {
    return [];
  }
  range = new Array(end - start + 1);
  for (let i = start; i <= end; i++) {
    range[i - start] = i;
  }
  return range;
};

module.exports = createRange;

