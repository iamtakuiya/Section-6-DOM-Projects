const switcher = document.querySelector('.switch');
// const switchCover = switchContainer.getComputedStyle(switchContainer, '::before');
const switchCover = document.querySelector('.switch-btn__cover');
const switchBtn = document.querySelector('.switch-btn');
const video = document.querySelector('.video');

switcher.addEventListener('click', () => {
	// console.log('clicked', switchCover);
	switchCover.classList.toggle('switch-btn--is-active');
	if (switchCover.classList.contains('switch-btn--is-active')) {
		video.pause();
	} else {
		video.play();
	}
});