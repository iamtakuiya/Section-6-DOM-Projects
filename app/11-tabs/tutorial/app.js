const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

// about is event bubbliing
about.addEventListener('click', e => {
	// console.log(e.target);
	const id = e.target.dataset.id;
	if (id) {
		// remove active from other buttons
		btns.forEach(function (btn) {
			btn.classList.remove('active');
			e.target.classList.add('active');
		});

		articles.forEach(article => {
			article.classList.remove('active');
		});
		// Store the dataset id to the variable. G
		const element = document.getElementById(id);
		console.log(element);
		element.classList.add('active');
	}
});
