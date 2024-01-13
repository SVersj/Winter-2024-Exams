// Replace substring with newstr
//Step 3:
// Replacing the "do...while" loop with a more readable version

const replaceSubstring = (str, substr, newstr) => {
  if (substr === '') {
    return str;
  } else {
    let src = str;
    let res = '';

    let index = src.indexOf(substr);
    while (index !== -1) {
      const start = src.substring(0, index);
      src = src.substring(index + substr.length, src.length);
      res += start + newstr;
      index = src.indexOf(substr);
    }

    return res + src;
  }
};

module.exports = replaceSubstring;

