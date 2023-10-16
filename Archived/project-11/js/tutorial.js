// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertiacally.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels.

/* ================================= */
// Set date
/* ================================= */
const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

/* ================================= */
// Close links
/* ================================= */
const toggleBtn = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', () => {
	// linksContainer.classList.toggle('show-links');
	const containerHeight = linksContainer.getBoundingClientRect().height;
	const linksHeight = links.getBoundingClientRect().height;
	if (containerHeight === 0) {
		linksContainer.style.height = `${linksHeight}px`;
		// console.log(linksHeight, containerHeight);
	} else {
		linksContainer.style.height = 0;
	}
});

/* ================================= */
// Fixed Nav
/* ================================= */
/**
 * Compare scroll offsetY and navHeight
 * If the scroll offset is greater than navHeight add class otherwise remove.
 */

const topTo = document.querySelector('.top-link');
const navbar = document.querySelector('#nav');

window.addEventListener('scroll', () => {
	const scrollHeight = window.scrollY;
	const navHeight = navbar.getBoundingClientRect().height;

	if (scrollHeight > navHeight) {
		navbar.classList.add('fixed-nav');
	} else {
		navbar.classList.remove('fixed-nav');
	}

	console.log(scrollHeight);
	if (scrollHeight > 1000) {
		topTo.classList.add('show-link');
	} else {
		topTo.classList.remove('show-link');
	}
});

/* ================================= */
// Smooth scroll
/* ================================= */
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
	link.addEventListener('click', e => {
		e.preventDefault();
		// navigate to specific spot
		// Correspond a and id
		const id = e.currentTarget.getAttribute('href').slice(1);
		const element = document.getElementById(id);

		// calculate the heights
		const navHeight = navbar.getBoundingClientRect().height;
		const containerHeight = linksContainer.getBoundingClientRect().height;
		const fixedNav = element.classList.contains('fixed-nav');

		let position = element.offsetTop - navHeight;

		if (!fixedNav) {
			position = position - navHeight;
		}

		if (navHeight > 82) {
			position = position + containerHeight;
		}

		window.scrollTo({
			left: 0,
			top: position
		});
		linksContainer.style.height = 0;
	});
});
