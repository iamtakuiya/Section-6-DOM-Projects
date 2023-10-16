/**
 * classList - show/gets all classes
 * contains - checks classList for specific class
 * add - add class
 * remove - remove class
 * toggle - toggle class
 */

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
	// console.log(links.classList);
	// console.log(links.classList.contains('random'));
	// console.log(links.classList.contains('links'));
	// if (links.classList.contains('show-links')) {
	// 	// remove class if contains the class
	// 	links.classList.remove('show-links');
	// } else {
	// 	// add class if contains the class
	// 	links.classList.add('show-links');
	// 	console.log(false);
	// }
	links.classList.toggle('show-links');
});
