// data
const reviews = [
	{
		gender: 'female',
		author: 'Jewel Broll',
		job: 'UX/UI Designer',
		img: `https://xsgames.co/randomusers/avatar.php?g=female`,
		review: `My neighbor Julisa has one of these. She works as a bartender and she says it looks crooked.i use it once a week when i'm in my firetruck. talk about contempt!!!`,
		id: 1
	},
	{
		gender: 'male',
		author: 'Lucien Dietze',
		job: 'CFO',
		img: `https://xsgames.co/randomusers/avatar.php?g=male`,
		review: `i use it once a week when i'm in my firetruck. My neighbor Lori has one of these. She works as a taxidermist and she says it looks whopping. heard about this on ndombolo radio, decided to give it a try.`,
		id: 2
	},
	{
		gender: 'female',
		author: 'Roselyn Frerichs',
		job: 'Front-End Developer',
		img: `https://xsgames.co/randomusers/avatar.php?g=female`,
		review: `this apple watch is dominant. My neighbor Frona has one of these. She works as a gambler and she says it looks bearded. I saw one of these in Cote d'Ivoire and I bought one.`,
		id: 3
	},
	{
		gender: 'male',
		author: 'Minh Mazurowski',
		job: 'UX/UI Designer',
		img: `https://xsgames.co/randomusers/avatar.php?g=male`,
		review: `i use it once a week when i'm in my firetruck. My neighbor Lori has one of these. She works as a taxidermist and she says it looks whopping. heard about this on ndombolo radio, decided to give it a try.`,
		id: 4
	}
];

const img = document.querySelector('.img-container img');
const author = document.querySelector('.author');
const job = document.querySelector('.role');
const info = document.querySelector('.review--card__text');

const prevBtn = document.querySelector('.btn--prev svg');
const nextBtn = document.querySelector('.btn--next svg');
const randomBtn = document.querySelector('.btn--random');

// Set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
	showPerson();
});

function showPerson() {
	const item = reviews[currentItem]; // Access the index of array by passing currentItem
	img.src = item.img;
	author.textContent = item.author;
	job.textContent = item.job;
	info.textContent = item.review;
}

nextBtn.addEventListener('click', function () {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	showPerson();
});

prevBtn.addEventListener('click', function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	showPerson();
});

// show random person
function randomPerson() {
	currentItem = Math.floor(Math.random() * reviews.length);
	showPerson();
	console.log(currentItem);
}

randomBtn.addEventListener('click', () => {
	randomPerson();
});
