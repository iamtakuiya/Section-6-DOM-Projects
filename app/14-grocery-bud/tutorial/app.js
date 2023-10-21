// ****** SELECT ITEMS ******
class Selector {
	constructor(selector) {
		this.element = selector.startsWith('#')
			? this.id(selector)
			: this.query(selector);
		this.log();
	}

	query(selector) {
		return document.querySelector(selector);
	}

	id(selector) {
		return document.getElementById(selector.slice(1)); // Remove the "#" from the ID becausee selecting ID
	}

	log() {
		console.log(this.element);
	}
}

const alert = new Selector('.alert').element;
const form = new Selector('.grocery-form').element;
// const form = document.querySelector('.grocery-form');
const submitBtn = new Selector('.submit-btn').element;
const grocery = new Selector('#grocery').element;
const container = new Selector('.grocery-container').element;
const list = new Selector('.grocery-list').element;
const clrBtn = new Selector('.clear-btn').element;

// Edit option
let editElement;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS ******

// submit form
form.addEventListener('submit', addItem);

function addItem(e) {
	e.preventDefault();
	const value = grocery.value;
	console.log(value);
	const id = new Date().getTime().toString();
	console.log(id);

	if (value && !editFlag) {
		console.log(editFlag + ' Please, add any item here.');
	} else if (value && editFlag) {
		console.log(editFlag + ' editing');
	} else {
		displayAlert(value + `is empty`, 'danger');
	}
}

// display alert
// function displayAlert(text, action) {
// 	alert.textContent = text;
// 	alert.classList.add(`alert-${action}`);
// }
function displayAlert(...props) {
	alert.textContent = props[0];
	alert.classList.add(`alert-${props[1]}`);

	// remove alert
	setTimeout(() => {
		alert.textContent = '';
		alert.classList.remove(`alert-${props[1]}`);
	}, 1000);
}
// ****** FUNCTIONS ******

// ****** LOCAL STORAGE ******
