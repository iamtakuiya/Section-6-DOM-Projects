function getElement(selection) {
	const element = document.querySelector(selection);
	console.log(element);
	if (element) {
		return element;
	}
	throw new Error(
		`Please check "${selection}", selector, no such element exists`
	);
}

class Counter {
	constructor(element, value) {
		// Initialize
		this.counter = element;
		this.value = value;

		// Grab the DOM element
		this.resetBtn = element.querySelector('.reset');
		this.increaseBtn = element.querySelector('.increase');
		this.decreaseBtn = element.querySelector('.decrease');
		this.valueDOM = element.querySelector('.value');

		// Inject
		this.valueDOM.textContent = this.value;

		// Bind the function
		this.increase = this.increase.bind(this);
		this.decrease = this.decrease.bind(this);
		this.reset = this.reset.bind(this);

		// Event
		this.increaseBtn.addEventListener('click', this.increase);
		this.decreaseBtn.addEventListener('click', this.decrease);
		this.resetBtn.addEventListener('click', this.reset);
	}

	// Attach the increase method and created
	increase() {
		// console.log(this);
		this.value++;
		this.valueDOM.textContent = this.value;
	}

	// Decrease
	decrease() {
		this.value--;
		this.valueDOM.textContent = this.value;
	}

	// Reset
	reset() {
		this.value = 0;
		this.valueDOM.textContent = this.value;
	}
}

// Grab the DOM elements, Select the container
const first = getElement('.first-counter');
const second = getElement('.second-counter');

const firstCounter = new Counter(first, 1200);
const secondCounter = new Counter(second, 200);
