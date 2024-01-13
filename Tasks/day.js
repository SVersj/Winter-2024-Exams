// Get day number
// Step 1:
// Changing variable names

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const parseDay = (inputString) => {
  let dayIndex;
  for (dayIndex = 0; dayIndex < daysOfWeek.length; dayIndex++) {
    if (inputString.startsWith(daysOfWeek[dayIndex].toLowerCase())) {
      return dayIndex + 1;
    }
  }
  return -1;
};

module.exports = parseDay;
