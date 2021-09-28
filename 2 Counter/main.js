const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')
const h2 = document.querySelector('h2')

let number = 0;

const changeTextNumber = () => {
    h2.textContent = number
    if (number === 0) {
        h2.style.color = 'rgb(41, 41, 41)';
    } else if (number > 0) {
        h2.style.color = 'green'
    } else {
        h2.style.color = 'red'
    }
}

const resetNumber = () => {
    number = 0
    changeTextNumber()
}

const decreaseNumber = () => {
    number--
    changeTextNumber()
}

const increaseNumber = () => {
    number++
    changeTextNumber()
}

reset.addEventListener('click', resetNumber)
decrease.addEventListener('click', decreaseNumber)
increase.addEventListener('click', increaseNumber)
