// DOM Elements
const numberElements = [...document.querySelectorAll('.number')];

// Function to Update Count Dynamically
const updateDynamicCount = (element) => {
	console.log(element);

	// Retrieve the numeric value from the dataset
	const targetValue = parseInt(element.dataset.value);

	// Calculate dynamic increment to ensure a smooth count
	const countIncrement = Math.ceil(targetValue / 1000);

	let currentCount = 0;

	console.log(targetValue);

	// Set up interval to increment the count
	const countInterval = setInterval(() => {
		// Increase the count by the calculated dynamic increment
		currentCount += countIncrement;

		// Check if the count exceeds the target value
		// If so, display the target value and stop counting
		if (currentCount > targetValue) {
			element.textContent = `${targetValue}+`;
			clearInterval(countInterval);
			return;
		}

		// Display the current count in the DOM element
		element.textContent = `${currentCount}+`;
	}, 1000);
};

// Loop through each number element and initiate dynamic count
numberElements.forEach((numberElement) => {
	updateDynamicCount(numberElement);
});
