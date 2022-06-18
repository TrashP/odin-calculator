function operate (a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case 'x': return a * b;
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
button[15].addEventListener('click', () => {display[0].textContent += '+'});

clear.addEventListener('click', () => {display[0].textContent = ''});
del.addEventListener('click', () => {display[0].textContent = display[0].textContent.slice(0, -1)});

button[14].addEventListener('click', () => {
    let str = display[0].textContent;
    const addIndex = str.indexOf('+');
    const subtractIndex = str.indexOf('-');
    const multiplyIndex = str.indexOf('x');
    const divideIndex = str.indexOf('/');
    let num1 = 0;
    let num2 = 0;
    let op = ''

    if (addIndex > 0) {
        op = str.charAt(addIndex);
    } else if (subtractIndex > 0) {
        op = str.charAt(subtractIndex);
    } else if (multiplyIndex > 0) {
        op = str.charAt(multiplyIndex);
    } else if (divideIndex > 0) {
        op = str.charAt(divideIndex);
    }

    if (op == '+') {
        num1 = parseInt(str.slice(0, addIndex));
        num2 = parseInt(str.slice(addIndex + 1, str.length));
    } else if (op == '-') {
        num1 = parseInt(str.slice(0, subtractIndex));
        num2 = parseInt(str.slice(subtractIndex + 1, str.length));
    } else if (op == 'x') {
        num1 = parseInt(str.slice(0, multiplyIndex));
        num2 = parseInt(str.slice(multiplyIndex + 1, str.length));
    } else if (op == '/') {
        num1 = parseInt(str.slice(0, divideIndex));
        num2 = parseInt(str.slice(divideIndex + 1, str.length));
    }

    display[0].textContent = operate(num1, num2, op);
});
