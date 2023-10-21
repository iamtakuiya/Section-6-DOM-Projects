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
// ****** END SELECT ITEMS ******
// ==============================================

// ****** EVENT LISTENERS ******

// submit form
form.addEventListener('submit', addItem);
clrBtn.addEventListener('click', clearItem);

// ****** END EVENT LISTENERS ******
// ==============================================

// ****** FUNCTIONS ******
function addItem(e) {
	e.preventDefault();
	const value = grocery.value;
	console.log(value);
	const id = new Date().getTime().toString();
	console.log(id);

	if (value && !editFlag) {
		// Create article and add class
		const element = document.createElement('article');
		element.classList.add('grocery-item');
		// create attr
		const attr = document.createAttribute('data-id');
		attr.value = id;
		element.setAttributeNode(attr);
		//Inject
		element.innerHTML = `
				<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
			`;

		// append child
		list.appendChild(element);
		// display alert
		displayAlert('item added to the list', 'success');
		// show container
		container.classList.add('show-container');

		// call function to add data into localStorage
		addToLocalStorage(id, value);
		setBackToDefault();

		// console.log(editFlag + ' Please, add any item here.');
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

// Remove item
function clearItems() {
	const items = document.querySelectorAll('.grocery-item');

	if (items.length > 0) {
		items.forEach((item) => list.removeChild(item));
	}
	container.classList.remove('show-container');
	displayAlert('empty list', 'danger');
	setBackToDefault();
}

// Reset form
function setBackToDefault() {
	grocery.value = '';
	editFlag = false;
	editID = '';
	submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE ******
function addToLocalStorage(...props) {
	console.log('added to local storage', props[0], props[1]);
}

// ****** SETUP ITEMS ******
