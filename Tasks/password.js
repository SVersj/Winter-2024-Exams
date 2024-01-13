// Generate random password
//Step 2:
// Use a short form of the assignment operator to concatenate strings
let GeneratePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * MAX);
    key += alphabet[index];
  }
  return key;
};

module.exports = GeneratePassword;