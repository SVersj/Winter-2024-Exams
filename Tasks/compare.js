// Compare two dictionaries
//Step 2:
// Replace the check with a boolean value
// Compare two dictionaries

let compare = (firstValues, ...parametersList) => {
  const secondValues = parametersList[0];
  let keysA = Object.keys(firstValues);
  let keysB = Object.keys(secondValues);
  if (keysA.join('-') !== keysB.join('-')) return false;
  let result = true;
  for (let key of keysA) {
    result = result && (firstValues[key] === secondValues[key]);
  }
  return result;
};

module.exports = compare;

