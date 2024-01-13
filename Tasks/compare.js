// Compare two dictionaries
//Step 1:
// Correct the variable name and add parentheses in the function declaration to improve readability

let compare = (firstValues, ...parametersList) => {
  const secondValues = parametersList[0];
  let keysA = Object.keys(firstValues);
  let keysB = Object.keys(secondValues);
  if (keysA.join('-') !== keysB.join('-')) return false;
  let result = true;
  for (let key of keysA) {
    if (firstValues[key] === secondValues[key]) result = result && true;
    else {
      result = result && false;
    }
  }
  return result;
};

module.exports = compare;
