const calcInteract = (() => {
    const numButtons = function() {
        // make number & operator buttons interactive
        const button = document.getElementsByClassName('button');
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener('mouseenter', () => { 
                button[i].style.backgroundColor = 'gray';
        })
            button[i].addEventListener('mouseleave', () => {
                button[i].style.backgroundColor = 'lightgray';
            })
        }
    }
    
    const clearButtons = function() {
        // make clear buttons interactive
        const clear = document.getElementById('clear');
        clear.addEventListener('mouseenter', () => {clear.style.backgroundColor = 'red'});
        clear.addEventListener('mouseleave', () => {clear.style.backgroundColor = 'pink'});
    
        const del = document.getElementById('delete');
        del.addEventListener('mouseenter', () => {del.style.backgroundColor = 'blue'});
        del.addEventListener('mouseleave', () => {del.style.backgroundColor = 'lightblue'});
    }

    return { numButtons, clearButtons };
})();

const calcDisplay = (() => {
    // add numbers and operators to display
    const display = function() {
        const display = document.getElementsByClassName('display');
        const button = document.getElementsByClassName('button');
        const textContents = [7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', '.', 0, '=', '+'];
        for (let i = 0; i < 16; i++) {
            if (i == 14) {
                continue;
            }
            button[i].addEventListener('click', () => {display[0].textContent += textContents[i]});
        }
    
        clear.addEventListener('click', () => {display[0].textContent = ''});
        del.addEventListener('click', () => {display[0].textContent = display[0].textContent.slice(0, -1)});
    }

    // click event to allow continuous calculations
    const contDisplay = function() {
        const display = document.getElementsByClassName('display');
        const opButtons = document.querySelectorAll('[data-operator]');
        for (let i = 0; i < opButtons.length; i++) {
            opButtons[i].addEventListener('click', () => {
                let str = display[0].textContent;
                let op = str.charAt(str.length - 1);
                str = str.slice(0, str.length - 1);
                
                if (str.indexOf('+') > -1 || str.indexOf('-') > -1 || str.indexOf('*') > -1 || str.indexOf('/') > -1) {
                    display[0].textContent = calcLogic.logic(str) + op;
                }
            })
        }
    }

    // click event to end calculations
    const endCalc = function() {
        const display = document.getElementsByClassName('display');
        button[14].addEventListener('click', () => {    
            let str = display[0].textContent; 
            display[0].textContent = calcLogic.logic(str);
        });
    }

    return { display, contDisplay, endCalc };
})();

const calcLogic = (() => {
    function operate (a, b, op) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
        }
    }

    // logic to process string of type (num1, operator, num2)
    function logic(str) {
        const addIndex = str.indexOf('+');
        const subtractIndex = str.indexOf('-');
        const multiplyIndex = str.indexOf('*');
        const divideIndex = str.indexOf('/');
        let num1 = 0;
        let num2 = 0;
        let op = ''
        
        // determine operator
        if (addIndex > 0) {
            op = '+';
        } else if (subtractIndex > 0) {
            op = '-';
        } else if (multiplyIndex > 0) {
            op = '*';
        } else if (divideIndex > 0) {
            op = '/';
        }

        //determine num1 and num2
        if (op == '+') {
            num1 = parseFloat(str.slice(0, addIndex));
            num2 = parseFloat(str.slice(addIndex + 1, str.length));
        } else if (op == '-') {
            num1 = parseFloat(str.slice(0, subtractIndex));
            num2 = parseFloat(str.slice(subtractIndex + 1, str.length));
        } else if (op == '*') {
            num1 = parseFloat(str.slice(0, multiplyIndex));
            num2 = parseFloat(str.slice(multiplyIndex + 1, str.length));
        } else if (op == '/') {
            num1 = parseFloat(str.slice(0, divideIndex));
            num2 = parseFloat(str.slice(divideIndex + 1, str.length));
        }

        let answer = parseFloat(operate(num1, num2, op));
        return Math.round(answer * 1000) / 1000;
    }

    return { operate, logic };
})();

calcInteract.numButtons();
calcInteract.clearButtons();
calcDisplay.display();
calcDisplay.contDisplay();
calcDisplay.endCalc();
