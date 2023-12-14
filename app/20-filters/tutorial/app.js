// import products from '../tutorial/products.js';

let filteredProducts = [...products];

const productsContainer = document.querySelector('.products-container');

const displayProducts = () => {
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
