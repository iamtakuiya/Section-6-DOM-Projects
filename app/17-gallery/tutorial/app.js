function getElement(selection) {
	const element = document.querySelector(selection);

	if (element) return element;
	throw new Error(
		`Please check ${selection} selector, there's no ${selection} exists`
	);
}

function Gallery(element) {
	// console.log(element);
	this.list = [...element.querySelectorAll('.img')];

	// target
	this.modal = getElement('.modal');
	this.modalImg = getElement('.modal-img');
	this.modalImages = getElement('.modal-images');
	this.closeBtn = getElement('.close-btn');
	this.nextBtn = getElement('.next-btn');
	this.prevBtn = getElement('.prev-btn');
}

// Create Gallery instance
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
