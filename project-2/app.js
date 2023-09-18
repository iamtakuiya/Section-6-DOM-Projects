// set initial count
let count = 0;


// Select value buttons
const btns = document.querySelectorAll('.btn');
let value = document.querySelector('#value');

function checkBtn(styles) {
    if (styles.contains('btn--increase')) {
        count++;
    } else if (styles.contains('btn--decrease')) {
        count--;
    } else if (styles.contains('btn--reset')) {
        count = 0;
    }
    value.textContent = count;
    changeColor(count);
}

// count is global variable, so it's not necessary to pass the argument.
// I do this for practical purpose
function changeColor(count) {
    switch (true) {
        case (count > 0):
            value.style.color = 'hsl(131, 69%, 56%)';
            break;
        case (count < 0):
            value.style.color = 'hsl(0, 86%, 57%)';
            break;
        case (count === 0):
            value.style.color = '#222';
            break;
        default:
    }
    console.log(count)
}

btns.forEach(btn => { 
    btn.addEventListener('click', (e) => {
        // console.log(e.currentTarget.textContent + ': clicked')
        // Get the current target classList
        const styles = e.currentTarget.classList;
        checkBtn(styles);
      
    })
})