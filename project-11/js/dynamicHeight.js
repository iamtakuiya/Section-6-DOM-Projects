const btn = document.querySelector('.btn');
const container = document.querySelector('.dynamic__container');
const box = document.querySelector('.dynamic__box');

function getHeight(el) {
	// const elHeight = el.getBoundingClientRect().height;
	return el.getBoundingClientRect().height;
}
function expand() {
	const containerHeight = container.getBoundingClientRect().height;
	const boxHeight = box.getBoundingClientRect().height;
	if (containerHeight === 0) {
		container.style.height = `${boxHeight}px`;
		console.log('add height', boxHeight);
	} else {
		container.style.height = 0;
		console.log('height is 0');
	}
}

btn.addEventListener('click', () => {
	expand();
});
