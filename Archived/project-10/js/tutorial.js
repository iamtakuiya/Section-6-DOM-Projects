// The DOMContentLoaded event fires when the initial HTML document has been completely loaded
// and parsed, without wiating for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resourses such as stylesheets and images.

const switcher = document.querySelector('.switch');
// const switchCover = switchContainer.getComputedStyle(switchContainer, '::before');
const switchCover = document.querySelector('.switch-btn__cover');
const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video');

switcher.addEventListener('click', () => {
	// console.log('clicked', switchCover);
	if (!switchCover.classList.contains('switch-btn--is-active')) {
		switchCover.classList.add('switch-btn--is-active');
		video.pause();
	} else {
		switchCover.classList.remove('switch-btn--is-active');
		video.play();
	}
});

// preloader
const preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
	preloader.classList.add('preloader--hide');
});
