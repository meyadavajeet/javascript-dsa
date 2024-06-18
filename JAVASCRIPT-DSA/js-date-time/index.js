// ? 1. How to get Current Date Time

const currentDateTime = new Date();
console.log(currentDateTime);

// ? 2. Get year, month, date, day, hour min
console.log(currentDateTime.getFullYear());
console.log(currentDateTime.getMonth());
console.log(currentDateTime.getDate());
console.log(currentDateTime.getDay());
console.log(currentDateTime.getHours());
console.log(currentDateTime.getMinutes());
console.log(currentDateTime.getMilliseconds());

// ? 3. Get the month name and week name from date
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let month = [
  "January",
  "February",
  "March",
  "August",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log(week[currentDateTime.getDay()]);
console.log(month[currentDateTime.getMonth()]);

// ? custom date time

const customDate = new Date("12-10-2022 12:02:05");
console.log(customDate);
