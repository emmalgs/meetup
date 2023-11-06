const DayKey = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DAYS_IN_WEEK = 7;

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

const getLastDay = (year, month, weekday) => {
  const nextMonth = new Date(year, month + 1, 1);
  nextMonth.setDate(nextMonth.getDate() - 1);
  const lastWeekDay = nextMonth.getDay();
  const lastDay = nextMonth.getDate();
  if (lastWeekDay >= weekday) {
    return lastDay - (lastWeekDay - weekday);
  } else {
    return lastDay - (lastWeekDay + 7 - weekday);
  }
}

const getTeenthDay = (daysToAdd) => {
  return (daysToAdd + DAYS_IN_WEEK) < 13 ? daysToAdd + DAYS_IN_WEEK * 2 : daysToAdd + DAYS_IN_WEEK;
}

const findDay = (descriptor, daysToAdd, year, month, weekday) => {
  const dayOffsets = {
    first: daysToAdd,
    second: daysToAdd + DAYS_IN_WEEK,
    third: daysToAdd + DAYS_IN_WEEK * 2,
    fourth: daysToAdd + DAYS_IN_WEEK * 3,
    last: getLastDay(year, month, weekday),
    teenth: getTeenthDay(daysToAdd),
  }
  return dayOffsets[descriptor];
}