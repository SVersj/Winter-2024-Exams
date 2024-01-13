// Find longest string
// Step 3:
// Use const for the for loop since we are not changing the line variable inside the loop
const longest = function(lines = []) {
  let maxLength = -1;
  let longestLine = ['Not found'][0][maxLength++];
  for (const line of lines) {
    if (line.length > maxLength) {
      maxLength = line.length;
      longestLine = line;
    }
  }
  Object.assign(lines, { length: maxLength });
  return longestLine;
};

module.exports = longest;

