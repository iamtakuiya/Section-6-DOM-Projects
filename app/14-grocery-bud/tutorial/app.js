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
		return document.getElementById(selector.slice(1)); // Remove the "#" from the ID because selecting ID
	}

	log() {
		console.log(this.element);
		// console.table(this.element);
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
// clear
clrBtn.addEventListener('click', clearItems);
// load item when opening the browser
window.addEventListener('DOMContentLoaded', setupItems);

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
		createListItem(id, value)
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
              <button type="button" class="btn edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="btn delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
			`;

		// Grab edit and delete buttons
		const btns = element.querySelectorAll('.btn');
		// Check the contains class if edit and delete
		btns.forEach((btn) =>
			btn.addEventListener('click', () => {
				checkBtnClass(btn);
			})
		);

		// add event listeners to both buttons;
		const deleteBtn = element.querySelector('.delete-btn');
		deleteBtn.addEventListener('click', deleteItem);
		const editBtn = element.querySelector('.edit-btn');
		editBtn.addEventListener('click', editItem);

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
		editElement.innerHTML = value;
		// edited();
		displayAlert('value changed', 'success');
		// Edit local storage
		editLocalStorage(editId, value);
		setBackToDefault();
	} else {
		displayAlert(value + `is empty`, 'danger');
	}
}

// display alert
// function displayAlert(text, action) {
// 	alert.textContent = text;
// 	alert.classList.add(`alert-${action}`);
// }

function edited() {
	displayAlert('value changed', 'success');
	// Edit local storage
	editLocalStorage(editId, value);
	setBackToDefault();
}

function deleted() {
	displayAlert('item removed', 'danger');
	setBackToDefault();
}

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

// Reset UI Display
function setBackToDefault() {
	grocery.value = '';
	editFlag = false;
	editID = '';
	submitBtn.textContent = 'submit';
}

// delete
// function deleteItem(props) {
// 	const item = props.element;
// 	console.log(item + 'deleteItem');
// 	const deleteTargetItem = item.currentTarget.parentElement.parentElement;
// 	console.log(deleteTargetItem);
// }

function deleteItem(e) {
	const element = e.currentTarget.parentElement.parentElement;
	const id = element.dataset.id;
	list.removeChild(element);
	if (list.children.length === 0) {
		container.classList.remove('show-container');
	}
	deleted();
	console.log(element, id);
}

// edit
function editItem(e) {
	const element = e.currentTarget.parentElement.parentElement;
	// set edit item
	editElement = e.currentTarget.parentElement.previousElementSibling;

	// update form value
	grocery.value = editElement.innerHTML;
	editFlag = true;
	editID = element.dataset.id;
	submitBtn.textContent = 'edit';
	console.log(editElement, editID + 'editItem');
}

// ****** LOCAL STORAGE ******
function addToLocalStorage(...props) {
	console.log('added to local storage', props[0], props[1]);
	const id = props[0];
	const value = props[1];
	const grocery = { id, value };
	// Fetch the item data
	let items = getLocalStorage();
	console.log(items);
	// push the html template string
	items.push(grocery);
	localStorage.setItem('list', JSON.stringify(items));
}

function removeFromStorage(id) {
	let items = getLocalStorage();

	items = items.filter(function (item) {
		if (item.id !== id) {
			return item;
		}
	});
	localStorage.setItem('list', JSON.stringify(items));
}
function editLocalStorage(id, value) {
	let items = getLocalStorage();
	items = items.map((item) => {
		if (item.id === id) {
			item.value = value;
		}
		console.log(item);
		return item;
	});
	localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
	return localStorage.getItem('list')
		? JSON.parse(localStorage.getItem('list'))
		: [];
}

// Test setup localStorage
localStorage.setItem('orange', JSON.stringify(['item', 'Item2']));
const oranges = JSON.parse(localStorage.getItem('orange'));
console.log(oranges);
localStorage.removeItem('orange');

// ****** SETUP ITEMS ******
function setUpItems() {
	let items = getLocalStorage();
	if (items.length > 0) {
		items.forEach((item) => {
			createListItem(item.id, item.value);
		});
		container.classList.add('show-container');
	}
}

function createListItem(id, value) {
	const element = document.createElement('article');
	let attr = document.createAttribute('data-id');
	attr.value = id;
	element.setAttributeNode(attr);
	element.classList.add('grocery-item');
	element.innerHTML = `<p class="title">${value}</p>
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
	// add event listeners to both buttons;
	const deleteBtn = element.querySelector('.delete-btn');
	deleteBtn.addEventListener('click', deleteItem);
	const editBtn = element.querySelector('.edit-btn');
	editBtn.addEventListener('click', editItem);

	// append child
	list.appendChild(element);
}

// ****** LOGICAL FUNCTION ******
function checkBtnClass(props) {
	// props.classList.contains('.edit-btn') ? editItem : deleteItem;
	// props.classList.contains('edit-btn') ? editItem(props) : deleteItem(props);
}
