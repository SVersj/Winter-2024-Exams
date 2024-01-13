// Count words in a string
// Step 1:
// Improve code style and readability
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