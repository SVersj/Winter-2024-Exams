// Find longest string
// Step 4:
// Using destructuring to improve readability.
const longest = function(lines = []) {
  let maxLength = -1;
  let longestLine = ['Not found'][0][maxLength++];
  for (const line of lines) {
    const { length } = line;
    if (length > maxLength) {
      maxLength = length;
      longestLine = line;
    }
  }
  Object.assign(lines, { length: maxLength });
  return longestLine;
};

module.exports = longest;