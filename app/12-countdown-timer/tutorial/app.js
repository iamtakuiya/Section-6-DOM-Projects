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

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// Generate template days
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// console.log(tempDate, tempYear, tempMonth);

// Crete date object
// let futureDate = new Date(2023, 9, 18, 20, 50, 0); // `YYYY-MM-DDTHH:mm:ss.sssZ`
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
const year = futureDate.getFullYear();
// hours and minute
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// month
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();

let weekday = weekdays[futureDate.getDay()];

// Inject date
giveaway.textContent = `Giveaway Ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes} a.m`;

// console.log(futureDate.getDay());

/* ===============================
Convert the time 
=============================== */
//future time ms
const futureTime = futureDate.getTime();

const DEFAULT_SECONDS = 1000;
const DEFAULT_MINUTES = 60;
const DEFAULT_HOURS = 60;
const DEFAULT_DAY = 24;

function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;
	console.log(t);

	// value in ms
	const oneDay =
		DEFAULT_DAY * DEFAULT_HOURS * DEFAULT_MINUTES * DEFAULT_SECONDS;
	// const oneDay = DEFAULT_DAY * oneHour;
	const oneHour = DEFAULT_HOURS * DEFAULT_MINUTES * DEFAULT_SECONDS;
	const oneMinutes = DEFAULT_MINUTES * DEFAULT_SECONDS;

	// Calculate all values
	let days = t / oneDay;
	days = Math.floor(days);
	// remaining times
	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinutes);
	let seconds = Math.floor((t % oneMinutes) / DEFAULT_SECONDS);
	// console.log(5 % 2);

	// Set values array
	const values = [days, hours, minutes, seconds];

	function format(item) {
		if (item < 10) {
			return (item = `0${item}`);
		}
	}

	items.forEach((item, index) => {
		item.innerHTML = values[index];
		console.log(index);
	});

	// Stop timer and insert the message
	if (t <= 0) {
		clearInterval(countdown);
		// deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
	}
}

// countdown
let countdown = setInterval(getRemainingTime, DEFAULT_SECONDS);

getRemainingTime();
