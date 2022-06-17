function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate (a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
}

const button = document.getElementsByClassName('button');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseenter', () => { 
        button[i].style.backgroundColor = 'gray';
})
    button[i].addEventListener('mouseleave', () => {
        button[i].style.backgroundColor = 'lightgray';
    })
}

const clear = document.getElementById('clear');
clear.addEventListener('mouseenter', () => {clear.style.backgroundColor = 'red';})
clear.addEventListener('mouseleave', () => {clear.style.backgroundColor = 'pink';})

const del = document.getElementById('delete');
del.addEventListener('mouseenter', () => {del.style.backgroundColor = 'blue';})
del.addEventListener('mouseleave', () => {del.style.backgroundColor = 'lightblue';})