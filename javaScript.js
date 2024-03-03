let display = document.getElementById("display");
let display2 = document.getElementById("display2");
let currentOperation = null;
let currentNumber = '';
let previousNumber = '';

function addNumber(number) {
    currentNumber += number;
    display.value = currentNumber;
    display.scrollLeft = display.scrollWidth;

}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    currentOperation = null;
    display.value = currentNumber;
}

function deleteLast() {
    currentNumber = display.value.slice(0, -1);
    display.value = currentNumber;

}
function selectOperation(operation) {

    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    currentOperation = operation;
    previousNumber = currentNumber;
    currentNumber = '';

}
function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result;
    currentOperation = null;
    previousNumber = '';
    display.value = currentNumber;
}

