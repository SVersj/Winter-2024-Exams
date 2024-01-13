// Get day number
// Step 3:
// We can use the findIndex method to improve readability and reduce code.

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (inputString) => {
  const dayIndex = daysOfWeek.findIndex(day => inputString.startsWith(day.toLowerCase()));

  return dayIndex !== -1 ? dayIndex + 1 : -1;
};

module.exports = getDayNumber;


