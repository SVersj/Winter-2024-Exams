// Get day number
// Step 2:
// Move the dayIndex variable declaration to the beginning of the function to improve code readability

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getDayNumber = (inputString) => {
  let dayIndex;

  for (dayIndex = 0; dayIndex < daysOfWeek.length; dayIndex++) {
    if (inputString.startsWith(daysOfWeek[dayIndex].toLowerCase())) {
      return dayIndex + 1;
    }
  }

  return -1;
};

module.exports = getDayNumber;




