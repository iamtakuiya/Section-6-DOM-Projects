const tabContainer = document.querySelector('.tabs-container');
const tabs = document.querySelectorAll('.tab');
const articles = document.querySelectorAll('article');

tabContainer.addEventListener('click', e => {
	const clickedTab = e.target.closest('.tab');

	// If clicking the tab then happen these things
	if (clickedTab) {
		const id = clickedTab.dataset.id; // Retrieve the data id attribute
		tabs.forEach(tab => {
			tab.classList.remove('active');
		});

		clickedTab.classList.add('active'); // Add active class to the clicked tab

		// Remove active class from the entire article by bubbling
		articles.forEach(article => {
			article.classList.remove('active');
		});

		const content = document.getElementById(id); // The same as 'article'
		content.classList.add('active');
	}
});
