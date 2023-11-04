class Timer {
	constructor(element, count) {
		this.element = element;
		this.count = count;
		this.isRunning = false; // Initialize the timer status as not running

		this.startBtn = this.grabElement('#start');
		this.resetBtn = this.grabElement('#reset');
		this.countElement = this.grabElement('.timer__count');

		this.countElement.textContent = this.count;

		// Add click event
		this.onClick(this.startBtn, () => this.start());
		this.onClick(this.resetBtn, () => this.reset());
	}

	grabElement(element) {
		return document.querySelector(element);
	}

	start() {
		if (!this.isRunning) {
			this.isRunning = true;
			this.timerInterval = setInterval(() => {
				this.count++;
				this.countElement.textContent = this.count;
			}, 1000);
		}
		console.log(this.count);
	}

	reset() {
		if (this.isRunning) {
			this.isRunning = false;
			clearInterval(this.timerInterval);
			this.count = 0;
			this.countElement.textContent = this.count;
		}
	}

	// Add click event
	onClick(target, callBackFunction) {
		target.addEventListener('click', callBackFunction);
	}
}

function selector(selection) {
	const container = document.querySelector(selection);

	console.log(container);
	if (container) {
		return container;
	} else {
		throw new Error(`Check the ${container}, there's no exist the element`);
	}
}

const timerContainer = selector('.timer');
const timer = new Timer(timerContainer, 0);
console.log(timer);
