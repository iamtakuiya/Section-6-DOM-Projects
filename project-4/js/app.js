// Add click event to button
// toggle class to show menu
// grab nav, icon

const menuBtn = document.querySelector('.btn--menu');
const nav = document.querySelector('.header__nav');
const menuList = nav.firstElementChild;

menuBtn.addEventListener('click', () => {
	console.log('clicked');
	show();
});

function show() {
	// if screen size is less than 736px, then apply this
	nav.classList.toggle('show--menu');
	menuList.classList.toggle('show--links');
}

window.addEventListener('resize', e => {
	// console.log(e.target.screen.width);
	const breakpoint = 736;
	let screenWidth = e.target.screen.width;
	if (screenWidth >= breakpoint) {
		nav.classList.remove('show--menu');
		menuList.classList.remove('show--links');
	}
});
