// Generate random password
//Step 1:
// Use const to declare variables and add missing let keywords for key and Index variables:
let GeneratePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * MAX);
    key = key + alphabet[index];
  }
  return key;
};

module.exports = GeneratePassword;