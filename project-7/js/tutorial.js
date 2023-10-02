// using selectors inside the element

// Select question title
// Select specific element within the question by childElementsibling?

const questions = document.querySelectorAll('article.question');

questions.forEach(question => {
	const btn = question.children[0].lastElementChild;

	btn.addEventListener('click', e => {
		// console.log(e.currentTarget);
		const current = e.currentTarget;
		questions.forEach(item => {
			// Check the item as question if no match by clicking button, then remove
			if (item !== question) {
				item.classList.remove('show-text');
				console.log(item);
			}
		});

		question.classList.toggle('show-text');
	});
});

// traversing the dom

// Select all buttons for adding event at once
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
// 	btn.addEventListener('click', function (e) {
// 		const question = e.currentTarget.parentElement.parentElement; // Traversing to parent from evnet target
// 		question.classList.toggle('show-text');
// 	});
// });
