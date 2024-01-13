// Get month number
// Step 3:
// Simplify the return value condition using the ternary operator
const Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const Month = (s) => {
  const lowercaseInput = s.toLowerCase();
  const index = Months.findIndex(month => lowercaseInput.startsWith(month));
  return index !== -1 ? index + 1 : -1;
};

module.exports = Month;