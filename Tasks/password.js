// Generate random password
//Step 5:
// Use const to declare MAX, since this value does not change in the function body:
let GeneratePassword = (alphabet, length = 8) => {
  const MAX = alphabet.length;
  let password = '';
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * MAX);
    password += alphabet[randomIndex];
  }
  return password;
};

module.exports = GeneratePassword;