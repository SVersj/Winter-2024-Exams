// Get one random element from an array
// Step 3:
// Add a check for an empty array to avoid errors when trying to get an element from an empty array
const sample = arr => (arr.length > 0) ? arr[Math.floor(Math.random() * arr.length)] : undefined;

module.exports = sample;

