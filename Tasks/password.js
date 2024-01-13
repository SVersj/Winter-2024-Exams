// Generate random password
//Step 4:
//Enter default parameters for the GeneratePassword function
// to make it easier to call the function without explicitly specifying the password length:
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
