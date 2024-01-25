let display = document.getElementById('display');
let calculator = document.getElementById('calculator');
let darkMode = false;
let currentValue = '';
let currentOperator = '';


function appendToDisplay(value) {
    if (isOperator(value)) {
        if (currentOperator !==''){
           calculateResult();
    }
        currentOperator = value;
        currentValue = parseFloat(display.value);
        display.value = '';
    } else {
        display.value += value;
    }
}
function calculateResult() {
    try {
        let result = calculate(currentValue, currentOperator,  parseFloat(display.value));
        display.value=result;
        currentValue = result;
        currentOperator = ''; 
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
    currentValue = '';
    currentOperator = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function toggleDarkMode() {
    darkMode = !darkMode;
    calculator.classList.toggle('dark-mode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function calculate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                throw new Error('Cannot divide by zero');
            }
        default:
            throw new Error('Invalid operator');
    }
}