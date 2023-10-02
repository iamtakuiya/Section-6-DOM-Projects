/**
 * Grab the elements, text and buttons
 * Add and remove hide class from buttons and text
 */
const plus = document.querySelectorAll('.btn-plus');
const minus = document.querySelectorAll('.btn-minus');
const questions = document.querySelectorAll('article.questions__content');

// Select questions
// grab the button within the question

questions.forEach(question => {
	// Grab all btns from the children
	const btn = question.firstElementChild.children[1];
	const text = question.lastElementChild;

	btn.addEventListener('click', e => {
		// console.log(e.currentTarget);
		const currentQuestion = e.currentTarget.parentElement.nextElementSibling;

		// Select plus and minus icons
		const plus = e.currentTarget.firstElementChild;
		const minus = e.currentTarget.lastElementChild;
		// Store two icons into array for accessing with index.
		const buttonIcons = [plus, minus];
		// Toggle class list by selecting array index 0 or 1
		buttonIcons.forEach(btn => btn.classList.toggle('show'));

		if (currentQuestion) {
			console.log(currentQuestion.nextElementSibling);
		}

		// check text whether match or not current target and text

		text.classList.toggle('show');
	});
});

// Add show icon to plus icon when loading browser.
window.addEventListener(
	'DOMContentLoad',
	plus.forEach(plus => plus.classList.add('show'))
);
