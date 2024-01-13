// Generate int array from given range
// Step 2:
// Check the condition at the beginning of the function and return an empty array immediately
// if to is less than from
const createRange = (...range) => {
  let [from, to] = range;
  if (to < from) {
    return [];
  }
  range = new Array(to - from + 1);
  for (let i = from; i <= to; i++) {
    range[i - from] = i;
  }
  return range;
};

module.exports = createRange;


