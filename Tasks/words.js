// Count words in a string
// Step 4:
// Reduce redundant conditions and improve logic
const countWords = (s) => {
  let numberOfWordsInS = 0;
  let flag = false;

  for (let c of s) {
    if (c === ' ') {
      flag = false;
    } else if (!flag) {
      flag = true;
      numberOfWordsInS++;
    }
  }

  return numberOfWordsInS;
};

module.exports = countWords;

