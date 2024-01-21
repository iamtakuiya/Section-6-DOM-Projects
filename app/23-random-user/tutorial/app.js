import get from './utils/getElement.js';
import fetchUser from './utils/fetchuser.js';

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');
const btns = [...document.querySelectorAll('.icon')];

const showUser = async () => {
	// Invoke the getUser async func
	// getUser().then((data) => console.log(data));

	const person = await getUser();
	console.log(person);
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
