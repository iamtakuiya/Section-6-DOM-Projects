const URL = 'https://icanhazdadjoke.com/';

// Setup DOM element
const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
	// Disable the button during the fetch operaton
	btn.disabled = true;
	fetchDadJoke();
});

/**
 * fetch dad joke
 */
const fetchDadJoke = async () => {
	result.textContent = 'Loading...';

	// Error handling
	try {
		/**
		 * Fetch URL and second parameter as object
		 */
		const response = await fetch(URL, {
			headers: {
				Accept: 'application/json',
				'User-Agent': 'learning app'
			}
		});

		// Check ok property
		if (!response.ok) {
			// Create Error object instance with specific Error messages
			// Error has message field
			throw new Error('Failed to fetch dad joke: Response not ok');
		}
		const data = await response.json();

		// Inject the jokes, say the API data object and access joke key and value
		result.textContent = data.joke;
		// console.log(response, data);
	} catch (error) {
		// Logging error
		console.log('Error', error);
		result.innerHTML = `OOps! There was an error...<br/>${error.message}`;
	} finally {
		// Enable the button after fetch operation (success or failure)
		btn.disabled = false;
	}
};

// Initially load dad joke when loading a page
fetchDadJoke();
