const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];
const weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

const weakdayEl = document.querySelector('.weakday');
const dateEl = document.querySelector('.date');
const monthEl = document.querySelector('.month');
const yearEl = document.querySelector('.year');
const hourEl = document.querySelector('.hour');
const minutesEl = document.querySelector('.minutes');

const dateElements = [weakdayEl, dateEl, monthEl, yearEl, hourEl, minutesEl];
console.log(dateElements);

let dateObject = new Date();
const year = dateObject.getFullYear();
let monthIndex = dateObject.getMonth();
month = months[monthIndex];
const date = dateObject.getDate();
let weakdayIndex = dateObject.getDay();
weakday = weekdays[weakdayIndex];
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();

dateElements[0].textContent = weakday;
dateElements[1].textContent = date;
dateElements[2].textContent = month;
dateElements[3].textContent = year;
dateElements[4].textContent = hours;
dateElements[5].textContent = minutes;
