/**
 * Grab button
 * Click button to get the different data
 * Data stor the array
 * Trick to index
 * id for random text
 * Index is countable and access the reviewers index. Like reviewers[index]
 */

const btns = document.querySelectorAll('.btn');

// data
const reviewers = [
	{
		gender: 'female',
		author: 'Jewel Broll',
		role: 'UX/UI Designer',
		review: `My neighbor Julisa has one of these. She works as a bartender and she says it looks crooked.i use it once a week when i'm in my firetruck. talk about contempt!!!`,
		id: 1
	},
	{
		gender: 'male',
		author: 'Lucien Dietze',
		role: 'CFO',
		review: `i use it once a week when i'm in my firetruck. My neighbor Lori has one of these. She works as a taxidermist and she says it looks whopping. heard about this on ndombolo radio, decided to give it a try.`,
		id: 2
	},
	{
		gender: 'female',
		author: 'Roselyn Frerichs',
		role: 'Front-End Developer',
		review: `this apple watch is dominant. My neighbor Frona has one of these. She works as a gambler and she says it looks bearded. I saw one of these in Cote d'Ivoire and I bought one.`,
		id: 3
	},
	{
		gender: 'male',
		author: 'Minh Mazurowski',
		role: 'UX/UI Designer',
		review: `i use it once a week when i'm in my firetruck. My neighbor Lori has one of these. She works as a taxidermist and she says it looks whopping. heard about this on ndombolo radio, decided to give it a try.`,
		id: 4
	}
];

function render(reviewer) {
	const reviewCard = document.querySelector('.review-card');
	let template = `
    <div class="review-card__profile">
      <div class="img-container img--collapse">
        <img class="img--collapse" src="https://xsgames.co/randomusers/avatar.php?g=${reviewer.gender}" alt="" />
      </div>
      <h2 class="author">${reviewer.author}</h2>
      <h4 class="role">${reviewer.role}</h4>
    </div>
    <div class="review--card__text">
      <p>
        ${reviewer.review}
      </p>
    </div>
  `;
	reviewCard.innerHTML = template;
}

function random() {
	let randomIndex = Math.floor(Math.random() * reviewers.length);
	render(reviewers[randomIndex]);
	console.log(randomIndex);
}

let index = 0;


btns.forEach(btn => {
	btn.addEventListener('click', e => {
		const prevBtn = document.querySelector('.btn--prev svg');
		const nextBtn = document.querySelector('.btn--next svg');
		const randomBtn = document.querySelector('.btn--random');

		if (e.target === nextBtn) {
			index++;
			if (index >= reviewers.length) {
				index = 0;
			}
			render(reviewers[index]);
			console.log(index);
		} else if (e.target === prevBtn) {
			index--;
			if (index < 0) {
				index = reviewers.length - 1;
			}
			render(reviewers[index]);
			console.log(index);
		} else if (e.target === randomBtn) {
			random();
		}
	});
});

// Initial render so, display index 0 data
render(reviewers[index]);

// console.log(prevBtn, nextBtn, reviewers)
