const API_URL = 'https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');

const fetchProducts = async () => {
	productsDOM.innerHTML = `<div class="loading"></div>`;

	try {
		/**
		 * Create resp variable and assign the await fetch() passing url
		 * Create data assign the await and call json() on the resp.
		 */
		const resp = await fetch(API_URL);
		const data = await resp.json();
		return data;
	} catch (error) {
		productsDOM.innerHTML = `<p class="error">there was an error</p>`;
	}
};

const displayProducts = (list) => {
	const productList = list
		.map((product) => {
			console.log(list);
			const { id } = product;
			const { name: title, price } = product.fields;
			const { url: img } = product.fields.image[0];

			const formatPrice = price / 100;

			// Return HTML structure and tagged template
			return `
    	<a href="product.html?id=${id}&name=john&age=25" class="single-product">
        <img src="${img}" alt="${title}" class="single-product-img img" />
        <footer>
          <h5 class="name">${title}</h5>
          <span class="price">${formatPrice}</span>
        </footer>
      </a>
    `;
		})
		.join('');
	productsDOM.innerHTML = `<div>${productList}</div>`;
	console.log(list);
};

const start = async () => {
	// Create data variable assign the await to call fetchProducts()
	const data = await fetchProducts();
	displayProducts(data);
};

start();
