const productsDOM = document.querySelector('.product');
const URL = 'https://course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
	try {
		productsDOM.innerHTML = `<h4 class="product-loading">Loading...</h4>`;
		// console.log(window.location.search);

		// Get the URL
		const params = new URLSearchParams(window.location.search);
		const id = params.get('id');
		console.log(id);

		const response = await fetch(`${URL}?id=${id}`);
		const data = await response.json(); // convert json object
		return data;
	} catch (error) {
		productsDOM.innerHTML = `<p class="error">Sorry, now loading problem. Please make sure the url</p>`;
		console.log(error);
	}
};

const displayProduct = (product) => {
	// Setup dynamic data and use destructuring to extract each properties
	const {
		company,
		colors,
		description,
		name: title,
		price,
		image
	} = product.fields;
	const { url: img } = image[0];
	document.title = title.toUpperCase();

	// colors
	const colorsList = colors.map((color) => {
		return `<span class="product-color" style="background: ${color}"></span>`;
	});

	// Inject the html template
	productsDOM.innerHTML = `
  <div class="product-wrapper">
				<img src="${img}" alt="${title}" class="img" />

				<div class="product-info">
					<h3>${title}</h3>
					<h5>${company}</h5>
					<span>${price / 100}</span>
					<!-- Color selector -->
					<div class="colors">
            ${colorsList}
					</div>

					<p>
          ${description}
					</p>

					<button class="btn">add to cart</button>
				</div>
  `;
	console.log(product);
};

const start = async () => {
	const data = await fetchProduct();
	displayProduct(data);
};

// Call the start() function
start();
