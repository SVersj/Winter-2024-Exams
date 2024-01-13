// Replace substring with newstr
//Step 5:
// Use the arrow function to improve your code style

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


