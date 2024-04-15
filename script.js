// Made by Sana

// Selecting HTML elements using their class names and storing them in variables
let time = document.querySelector(".time");
let day = document.querySelector(".day");
let date = document.querySelector(".date");
let hour1 = document.querySelector(".hour");
let min1 = document.querySelector(".min");
let sec1 = document.querySelector(".sec");
let am = document.querySelector(".meridiem");

// Array containing names of days of the week
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Setting up an interval that runs every 1000 milliseconds (1 second)
setInterval(() => {
    // Creating a new Date object to get the current date and time
    let today = new Date();

    // Extracting seconds, minutes, and hours from the Date object
    let sec = today.getSeconds();
    let min = today.getMinutes();
    let hours = today.getHours();
    let meridiem = (hours < 12) ? "AM" : "PM";

    // Getting the day of the week, month and date from the Date object
    let day1 = weekDays[today.getDay()];
    let date1 = today.getDate();

    // Note: Months are zero-indexed, so we add 1 to get the correct month
    let month = today.getMonth() + 1;

    // Extracting the year from the Date object
    let year = today.getFullYear();
    
    // Updating the formats of time items
    hours = (hours % 12) || 12;
    hours = hours < 10 ? "0" + hours: hours;
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec: sec;
    date1 = date1 < 10 ? "0" + date1: date1;
    month = month < 10 ? "0" + month: month;

    // Updating the text content of HTML elements with the current time, day, and date
    hour1.innerText = hours;
    min1.innerText = min;
    sec1.innerText = sec;
    am.innerText = meridiem;
    day.innerText = day1;
    date.innerText = `${date1}-${month}-${year}`;
}, 1000);
