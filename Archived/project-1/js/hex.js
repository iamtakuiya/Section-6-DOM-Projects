// Store hex color value
const hex = [0, 1, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const color = document.querySelector('.color')
const btn = document.querySelector('.btn')


function randomColor() {
    
    // Loop through until 6
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[generateRandomHex()];
        // console.log(hexColor)
    }
    
    // Display value
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;


    // console.log(document.body)
    // console.log(generateRandomHex())
}

// Number refer to the length of hex array.
function generateRandomHex() {
    return Math.floor(Math.random() * hex.length);
}

// Interact
btn.addEventListener('click', randomColor);