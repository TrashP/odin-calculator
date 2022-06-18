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
clear.addEventListener('mouseenter', () => {clear.style.backgroundColor = 'red'});
clear.addEventListener('mouseleave', () => {clear.style.backgroundColor = 'pink'});

const del = document.getElementById('delete');
del.addEventListener('mouseenter', () => {del.style.backgroundColor = 'blue'});
del.addEventListener('mouseleave', () => {del.style.backgroundColor = 'lightblue'});

const display = document.getElementsByClassName('display');
button[0].addEventListener('click', () => {display[0].textContent += 7});
button[1].addEventListener('click', () => {display[0].textContent += 8});
button[2].addEventListener('click', () => {display[0].textContent += 9});
button[3].addEventListener('click', () => {display[0].textContent += '/'});

button[4].addEventListener('click', () => {display[0].textContent += 4});
button[5].addEventListener('click', () => {display[0].textContent += 5});
button[6].addEventListener('click', () => {display[0].textContent += 6});
button[7].addEventListener('click', () => {display[0].textContent += 'x'});

button[8].addEventListener('click', () => {display[0].textContent += 1});
button[9].addEventListener('click', () => {display[0].textContent += 2});
button[10].addEventListener('click', () => {display[0].textContent += 3});
button[11].addEventListener('click', () => {display[0].textContent += '-'});

button[12].addEventListener('click', () => {display[0].textContent += '.'});
button[13].addEventListener('click', () => {display[0].textContent += 0});
button[14].addEventListener('click', () => {display[0].textContent += '='});
button[15].addEventListener('click', () => {display[0].textContent += '+'});

clear.addEventListener('click', () => {display[0].textContent = ''});
del.addEventListener('click', () => {display[0].textContent = display[0].textContent.slice(0, -1)});

