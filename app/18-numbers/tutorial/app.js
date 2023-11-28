console.log('numbers project');

// Elements
const items = [...document.querySelectorAll('.number')];

// Functions
const updateCount = (el) => {
	console.log(el);
	const value = parseInt(el.dataset.value); // Store the dataset value

	// Dynamic counting approach
	const increment = Math.ceil(value / 1000); // round up count if the value is decimal
	let initialValue = 0;

	console.log(value);
	const increaseCount = setInterval(() => {
		// Assign the increment value of dynamic dataset
		initialValue += increment;

		// Check the initial value if it greater than value of data
		// Stop counting up
		if (initialValue > value) {
			el.textContent = `${value}+`;
			clearInterval(increaseCount);
			return;
		}

		// Insert the counting value to the DOM element
		el.textContent = `${initialValue}+`;
	}, 1);
};

// Looper
items.forEach((item) => {
	updateCount(item);
});
