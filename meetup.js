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
  const firstDay = new Date(year, month - 1, 1).getDay();
  console.log(firstDay)
  let daysToAdd;
  if (DayKey.indexOf(weekday) >= firstDay) {
    daysToAdd = (DayKey.indexOf(weekday) - firstDay) + 1;
  } else {
    daysToAdd = (DayKey.indexOf(weekday) + 7 - firstDay) + 1;
  }
  if (descriptor === "first") {
    solution = new Date(year, month - 1, 1 + daysToAdd);
  } else if (descriptor === "teenth") {
    const teenthDays = daysToAdd + 7;
    if ((teenthDays) < 13) {
      solution = new Date(year, month - 1, teenthDays + 7);
    } else {
      solution = new Date(year, month - 1, teenthDays);
    }
  }
  return solution;
};
