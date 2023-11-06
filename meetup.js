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
  const weekdayIndex = DayKey.indexOf(weekday);
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysToAdd = addDays(firstDay, weekdayIndex);
  const day = findDay(descriptor, daysToAdd, year, month - 1, weekdayIndex);
  return new Date(year, month - 1, day);
};

const addDays = (firstDay, weekday) => {
  return weekday >= firstDay
  ? (weekday - firstDay) + 1
  : (weekday + 7 - firstDay) + 1;
}

const findDay = (descriptor, daysToAdd, year, month, weekday) => {
  let day;
  if (descriptor === "first") {
    day = daysToAdd;
  } else if (descriptor === "second") {
    day = daysToAdd + 7;
  } else if (descriptor === "third") {
    day = daysToAdd + 14;
  } else if (descriptor === "fourth") {
    day = daysToAdd + 21;
  } else if (descriptor === 'last') {
    const nextMonth = new Date(year, month + 1, 1);
    nextMonth.setDate(nextMonth.getDate() - 1);
    const lastWeekDay = nextMonth.getDay();
    const lastDay = nextMonth.getDate();
    if (lastWeekDay >= weekday) {
      day = lastDay - (lastWeekDay - weekday);
    } else {
      day = lastDay - (lastWeekDay + 7 - weekday);
    }
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