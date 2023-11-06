const DayKey = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const meetup = (year, month, descriptor, weekday) => {
  let solution;
  let firstDay = new Date(year, month - 1, 1).getDay();
  let daysToAdd = DayKey.indexOf(weekday) + 7 - firstDay;
  if (descriptor === "first") {
    solution = new Date(year, month - 1, 1 + daysToAdd);
  } else if (descriptor === "teenth") {
    solution = new Date(year, month - 1, 1 + daysToAdd + 7);
  }
  return solution;
};

// So if the first day of the month is a Wednesday and we want to find the monteeth of that month, we know that the index difference between Wednesday and Monday is 2, and we want to add 7 so that we can find the following Monday. So the first monday is 5 days from the first of the month, so 1 + 5 = 6. So the first Monday of the month is the 6th day of the month. To find the monteenth of the month ....I'm off by one somewhere. If the monteenth of this month is 13 then the first monday is actually the 6...so 6 + 7 is 13...how do I turn that into js logic?
