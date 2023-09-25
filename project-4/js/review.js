const toggleBtn = document.querySelector('.toggle');
const menu = document.querySelector('.navbar__nav-links');

toggleBtn.addEventListener('click', () => {
	// console.log(menu.classList.contains('link-show'));
	showMenu();
});
function showMenu() {
	if (menu.classList.contains('link-show')) {
		menu.classList.remove('link-show');
	} else {
		menu.classList.add('link-show');
	}
}

console.log(toggleBtn);

window.addEventListener('resize', e => {
	let screenWidth = e.target.screen.width;
	// console.log(screenWidth);
	checkScreenWidth(screenWidth);
});

function checkScreenWidth(screen) {
	if (screen >= 800) {
		toggleBtn.classList.add('toggle--hide');
		menu.classList.remove('link-show');
	} else {
		toggleBtn.classList.remove('toggle--hide');
	}
}
