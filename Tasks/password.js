// Generate random password
//Step 3:
// Rename the key and index variables for clarity
let GeneratePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * MAX);
    password += alphabet[randomIndex];
  }
  return password;
};

module.exports = GeneratePassword;