// Count words in a string
// Step w:
// Using const to declare variables that don't change within a block
const countWords = (s) => {
  let numberOfWordsInS = 0;
  let flag = false;

  for (let c of s) {
    if (!flag) {
      if (c === ' ') {
        flag = false;
      } else {
        flag = true;
        numberOfWordsInS++;
      }
    } else {
      if (c === ' ') {
        flag = false;
      } else {
        flag = true;
      }
    }
  }

  return numberOfWordsInS;
};

module.exports = countWords;
