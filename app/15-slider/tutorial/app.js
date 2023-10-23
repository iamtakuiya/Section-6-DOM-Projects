const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');

slides.forEach((slide, index) => {
	slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', () => {
	counter++;
	console.log(counter, slides.length);
	carousel();
	randomValue();
});
prevBtn.addEventListener('click', () => {
	counter--;
	carousel();
});

function carousel() {
	// working with slides

	// if (counter === slides.length) {
	// 	counter = 0;
	// } else if (counter < 0) {
	// 	counter = slides.length - 1;
	// }

	if (counter < slides.length - 1) {
		nextBtn.style.display = 'block';
	} else {
		nextBtn.style.display = 'none';
	}

	if (counter > 0) {
		prevBtn.style.display = 'block';
	} else {
		prevBtn.style.display = 'none';
	}

	slides.forEach((slide) => {
		slide.style.transform = `translate(-${counter * 100}%)`;
	});
}
prevBtn.style.display = 'none';

// Experiment switch
function randomValue() {
	let randomNumber = Math.floor(Math.random() * 5);
	tada(randomNumber);
	return randomNumber;
}

function tada(random) {
	switch (random) {
		case 2:
			console.log(`Congrates Number is ${random}`);
			return;
		default:
			console.log(`Number is not ${random}`);
	}
}

// switch (counter) {
// 	case counter > 1:
// 		nextBtn.style.backgroundColor = 'blue';
// 	case counter < 0 && counter >= slides.length:
// 		prevBtn.style.color = 'salmon';
// }
