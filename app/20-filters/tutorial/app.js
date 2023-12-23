// import products from '../tutorial/products.js';

let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
	// Return Sorry message, if no item matches
	if (filteredProducts.length < 1) {
		productsContainer.innerHTML = `
			<h6>Sorry, no products matched your search</h6>
		`;
		return;
	}

	// destructuring access each key properties
	productsContainer.innerHTML = filteredProducts
		.map(({ id, title, image, price }) => {
			/**
			 * Key place into each attribute by using string template.
			 */
			return `
            <article class="product" data-id="${id}">
            <img src="${image}" alt="" class="product-img img" />
            <footer>
              <h5 class="product-name">${title}</h5>
              <span class="product-price">${price}</span>
            </footer>
          </article>
    `;
		})
		.join('');
};
displayProducts();

/**
 * Filter
 */
const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

// getting value
form.addEventListener('keyup', () => {
	const inputValue = searchInput.value;

	// Modify filtered product
	filteredProducts = products.filter((product) => {
		return product.title.toLowerCase().includes(inputValue);
	});
	displayProducts();

	// Check value
	console.log(
		(filteredProducts = products.filter((product) => {
			return product.title.toLowerCase().includes(inputValue);
		}))
	);
});

/**
 * Filter buttons
 */
const companyFilterOption = document.querySelector('.companies');

const displayButtons = () => {
	const buttons = [
		'all', // show all option
		...new Set(products.map((product) => product.company)) // extract company keys
	];

	companyFilterOption.innerHTML = buttons
		.map((company) => {
			return `<button class="company-btn" data-id="${company}">${company}</button>`;
		})
		.join('');
};
displayButtons();

// More specific
companyFilterOption.addEventListener('click', (e) => {
	const el = e.target;
	if (el.classList.contains('company-btn')) {
		// if id is selected at 'all', show product all by spreading
		// if (el.dataset.id === 'all') {
		// 	filteredProducts = [...products]; // spreading out all products array data
		// } else {
		// 	filteredProducts = products.filter((product) => {
		// 		return product.company === el.dataset.id;
		// 	});
		// }

		const isIdAll = el.dataset.id === 'all' ? true : false;
		switch (isIdAll) {
			case true:
				filteredProducts = [...products]; // spreading out all products array data
				break;
			default:
				filteredProducts = products.filter((product) => {
					return product.company === el.dataset.id;
				});
		}
	}
	// After searching, reset filter text input
	searchInput.value = '';

	// Finally, back default UI display.
	displayProducts();
});
