// Find longest string
// Step 2:
// improve variable names and logic
const longest = function(lines = []) {
  let maxLength = -1;
  let longestLine = ['Not found'][0][maxLength++];
  for (let line of lines) {
    if (line.length > maxLength) {
      maxLength = line.length;
      longestLine = line;
    }
  }
  Object.assign(lines, { length: maxLength });
  return longestLine;
};

module.exports = longest;

