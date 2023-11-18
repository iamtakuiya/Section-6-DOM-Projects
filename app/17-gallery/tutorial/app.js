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
	this.container = element;

	// target
	this.modal = getElement('.modal');
	this.modalImg = getElement('.main-img');
	this.imageName = getElement('.image-name');
	this.modalImages = getElement('.modal-images');
	this.closeBtn = getElement('.close-btn');
	this.nextBtn = getElement('.next-btn');
	this.prevBtn = getElement('.prev-btn');

	// self reference
	let self = this;

	// constructor bind the functions and parent object together
	this.closeModal = this.closeModal.bind(this);
	this.nextImage = this.nextImage.bind(this);
	this.prevImage = this.prevImage.bind(this);
	this.pickUpImage = this.pickUpImage.bind(this);

	// bind to call the method as function
	// this.openModel = this.openModel.bind(this); // Refer to this Gallery object

	// Event
	// this.container.addEventListener('click', (e) => {
	// 	console.log(this); // Refer to container
	// 	this.openModel.bind(this);
	// });
	// Event
	this.container.addEventListener(
		'click',
		function (e) {
			// console.log(this); // Refer to container

			if (e.target.classList.contains('img')) {
				this.openModel(e.target, this.list);
			}
			// self.openModel;
			// console.log(this.openModel, self.openModel);
		}.bind(this)
	);
}

// Method of Gallery
Gallery.prototype.openModel = function (selectedImage, list) {
	// Main image
	this.setMainImage(selectedImage);
	// horizontal images
	this.modalImages.innerHTML = list
		.map((image) => {
			return `<img
			class="${
				selectedImage.dataset.id === image.dataset.id
					? 'modal-img selected'
					: 'modal-img main-img'
			}" 
			src="${image.src}" 
			title="${image.title}" 
			data-id="${image.dataset.id}"
			/>`;
		})
		.join('');
	this.modal.classList.add('open');
	this.closeBtn.addEventListener('click', this.closeModal);
	this.prevBtn.addEventListener('click', this.prevImage);
	this.nextBtn.addEventListener('click', this.nextImage);
	this.modalImages.addEventListener('click', this.pickUpImage);
};

// Set main image
Gallery.prototype.setMainImage = function (selectedImage) {
	this.modalImg.src = selectedImage.src;
	this.imageName.textContent = selectedImage.title;
};

// Close modal
Gallery.prototype.closeModal = function () {
	this.modal.classList.remove('open');
	this.closeBtn.removeEventListener('click', this.closeModal);
	this.prevBtn.removeEventListener('click', this.prevImage);
	this.nextBtn.removeEventListener('click', this.nextImage);
	this.modalImages.removeEventListener('click', this.pickUpImage);
};

//prev
Gallery.prototype.prevImage = function () {
	const selected = this.modalImages.querySelector('.selected');
	const prev =
		selected.previousElementSibling || this.modalImages.lastElementChild;
	selected.classList.remove('selected');
	prev.classList.add('selected');
	this.setMainImage(prev);
};

// Next
Gallery.prototype.nextImage = function () {
	const selected = this.modalImages.querySelector('.selected');
	const next =
		selected.nextElementSibling || this.modalImages.firstElementChild;
	selected.classList.remove('selected');
	next.classList.add('selected');
	this.setMainImage(next);
};

// Choose image
Gallery.prototype.pickUpImage = function (e) {
	if (e.target.classList.contains('modal-img')) {
		// Create local variable for selecting image and assign the current selected
		const selected = this.modalImages.querySelector('.selected');
		selected.classList.remove('selected');

		// Update the selected image by executing the function.
		this.setMainImage(e.target);
		e.target.classList.add('selected');
	}
};

// Create Gallery instance
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));
