const colors = ['red', 'green', 'blue', 'rgb(133, 200, 122)'];
const btn = document.querySelector('#btn');
const colorText = document.querySelector('.color');

function randomValue(color) {
    return color[Math.floor(Math.random() * color.length)];
}

btn.addEventListener('click', () => {
    const body = document.body;
    const randomColor = randomValue(colors)
    colorText.textContent = randomColor;
    body.style.backgroundColor = randomColor;
    // console.log(body)
})
// console.log(colors,btn, colorText)