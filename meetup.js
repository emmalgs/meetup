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
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysToAdd = addDays(firstDay, weekday);
  return new Date(year, month - 1, findDay(descriptor, daysToAdd));
};

const addDays = (firstDay, weekday) => {
  let daysToAdd;
  if (DayKey.indexOf(weekday) >= firstDay) {
    daysToAdd = (DayKey.indexOf(weekday) - firstDay) + 1;
  } else {
    daysToAdd = (DayKey.indexOf(weekday) + 7 - firstDay) + 1;
  }
  return daysToAdd;
}

const findDay = (descriptor, daysToAdd) => {
  let day;
  if (descriptor === "first") {
    day = daysToAdd;
  } else if (descriptor === "second") {
    day = daysToAdd + 7;
  } else if (descriptor === "third") {
    day = daysToAdd + 14;
  } else if (descriptor === "fourth") {
    day = daysToAdd + 21;
  } else if (descriptor === "teenth") {
    const teenthDays = daysToAdd + 7;
    if ((teenthDays) < 13) {
      day = teenthDays + 7;
    } else {
      day = teenthDays;
    }
  }
  return day
}