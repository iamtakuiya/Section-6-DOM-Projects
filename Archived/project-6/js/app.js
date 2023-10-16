// Grab the button

// grab layer modal-project__container--base
// Set the condition
// modal - overlay--active
// modal-overlay--non-active

const openModalBtn = document.querySelector('.btn--open-modal');
const closeModalBtn = document.querySelector('.btn--close-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const modalBaseContent = document.querySelector('.modal-project__container--base');
const elements = [openModalBtn, closeModalBtn, modalOverlay, modalBaseContent];

function handleModalOverlay() {
	// Open modal
	if (modalOverlay.classList.contains('modal-overlay--non-active')) {
		modalBaseContent.classList.add('modal-overlay--non-active');
		modalOverlay.classList.remove('modal-overlay--non-active');
		modalOverlay.classList.add('modal-overlay--active');
	} else if (modalOverlay.classList.contains('modal-overlay--active')) {
		modalOverlay.classList.remove('modal-overlay--active');
		modalBaseContent.classList.remove('modal-overlay--non-active');
		modalOverlay.classList.add('modal-overlay--non-active');
	}
}

// openModalBtn.addEventListener('click', () => {
// 	if (modalOverlay.classList.contains('modal-overlay--non-active')) {
// 		modalBaseContent.classList.add('modal-overlay--non-active');
// 		modalOverlay.classList.remove('modal-overlay--non-active');
// 		modalOverlay.classList.add('modal-overlay--active');
// 	}
// });
// closeModalBtn.addEventListener('click', () => {
// 	if (modalOverlay.classList.contains('modal-overlay--active')) {
// 		modalOverlay.classList.remove('modal-overlay--active');
// 		modalBaseContent.classList.remove('modal-overlay--non-active');
// 		modalOverlay.classList.add('modal-overlay--non-active');
// 	}
// });

openModalBtn.addEventListener('click', handleModalOverlay);
closeModalBtn.addEventListener('click', handleModalOverlay);

// console.log(elements);
