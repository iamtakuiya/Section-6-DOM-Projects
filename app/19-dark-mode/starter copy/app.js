// import { articles } from './data';

const toggleTheme = document.querySelector('.btn');
const articlesContainer = document.querySelector('.article');

toggleTheme.addEventListener('click', () => {
	document.documentElement.classList.toggle('dark-theme');
});

console.log(articlesContainer);

// Render data into DOM
const renderArticle = articles
	.map((article) => {
		// Destructuring extract the value from the object or arrays.
		const { title, date, length, snippet } = article;

		// format date
		const formatDate = moment(date).format('MMM do, YYYY');
		console.log(formatDate);

		return `
  			<h2 class=${title}></h2>
				<div class="post-info">
					<span class="date">${formatDate}</span>
					<span class="read time">${length} min read</span>
				</div>
				<p class="content">
        ${snippet}
        </p>
  `;
	})
	.join('');

// Render article into the DOM
articlesContainer.innerHTML = renderArticle;
