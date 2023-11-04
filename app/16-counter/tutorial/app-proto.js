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

function Counter(element, value) {
	// console.log(element, value);
	this.counter = element;
	this.value = value;
	this.resetBtn = element.querySelector('.reset');
	this.increaseBtn = element.querySelector('.increase');
	this.decreaseBtn = element.querySelector('.decrease');
	this.valueDOM = element.querySelector('.value');
	this.valueDOM.textContent = this.value;

	// bind all function
	this.increase = this.increase.bind(this);
	this.decrease = this.decrease.bind(this);
	this.reset = this.reset.bind(this);

	this.increaseBtn.addEventListener('click', this.increase);
	this.decreaseBtn.addEventListener('click', this.decrease);
	this.resetBtn.addEventListener('click', this.reset);
}

// Attach the increase method and created
Counter.prototype.increase = function () {
	// console.log(this);
	this.value++;
	this.valueDOM.textContent = this.value;
};

// Decrease
Counter.prototype.decrease = function () {
	this.value--;
	this.valueDOM.textContent = this.value;
};

// Reset
Counter.prototype.reset = function () {
	this.value = 0;
	this.valueDOM.textContent = this.value;
};

// Grab the DOM elements, Select the container
const first = getElement('.first-counter');
const second = getElement('.second-counter');

const firstCounter = new Counter(first, 1200);
const secondCounter = new Counter(second, 200);

firstCounter.increase();
firstCounter.reset();

// getElement('.first-counterdffdx'); // Test to check error msg
