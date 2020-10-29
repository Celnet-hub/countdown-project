const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//creating a variable to hold some classes

const giveaway = document.querySelector(".giveaway"); //queries all class ='giveaway'
const deadline = document.querySelector(".deadline"); //queries all class ='deadline'
const items = document.querySelectorAll(".deadline-format h4"); //queries all class ='deadline-format'

//setting the expiry date
//let theFutureDate = new Date(2020, 11, 28, 5, 0, 0); //returns may 26 2020 17: 30: 00: 00

let currentdate = new Date();
let currentYear = currentdate.getFullYear();
let currentMonth = currentdate.getMonth();
let currentDay = currentdate.getDate();

const theFutureDate = new Date(
  currentYear,
  currentMonth,
  currentDay + 360,
  11,
  59,
  0,
);
const year = theFutureDate.getFullYear(); //returns 2020
const hours = theFutureDate.getHours(); //returns 17
const mins = theFutureDate.getMinutes(); //returns 30
const sec = theFutureDate.getSeconds(); //returns 0
const date = theFutureDate.getDate(); //returns 26
let month = theFutureDate.getMonth(); //returns 4
let day = theFutureDate.getDay(); //returns a value that corresponds to the weekday that reps 26/05/2020

month = months[month];
day = weekdays[day];

giveaway.textContent = `giveaway ends on ${day} ${date} ${month} ${year} ${hours}:${mins}:${sec}am`;

//future time
let theFutureTime = theFutureDate.getTime(); //returns a value in millisec

// 1s = 1000ms
// 1min = 60 secs
// 1hr = 60 mins
// 1 day = 24 hrs
function getTimeDiff() {
  let currentTime = new Date().getTime(); //returns a value in millisec
  let timeDiff = theFutureTime - currentTime; //value in millisec

  //values in mSec
  const millisecInOneDay = 24 * 60 * 60 * 1000;
  const millisecInOneHour = 60 * 60 * 1000;
  const millisecInOneMinute = 60 * 1000;

  //calculating the remaining peroid to the future.
  let numOfDaysToFuture = Math.floor(timeDiff / millisecInOneDay);
  let numOfHoursToFuture = Math.floor(
    (timeDiff % millisecInOneDay) / millisecInOneHour,
  );
  let numOfMinuteToFuture = Math.floor(
    (timeDiff % millisecInOneHour) / millisecInOneMinute,
  );
  let numOfSecToFuture = Math.floor((timeDiff % millisecInOneMinute) / 1000);

  // setting values array
  const values = [
    numOfDaysToFuture,
    numOfHoursToFuture,
    numOfMinuteToFuture,
    numOfSecToFuture,
  ];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });
  //creating a statment that clears countdown and retures a message.
  if (timeDiff < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Oops This giveaway has expired</h4>`;
  }
}

//write a function that automatically calls getTimeDiff() every 1s(1000ms)
let countDown = setInterval(() => {
  getTimeDiff();
}, 1000);

getTimeDiff();
