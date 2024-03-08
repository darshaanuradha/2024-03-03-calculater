let display = document.getElementById("display");
let display1 = document.getElementById("display1");
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
    display1.value = '';
}

function deleteLast() {
    currentNumber = display.value.slice(0, -1);
    display.value = currentNumber;
    

}

function selectOperation(operation) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {

        display.value = calculate();
        currentNumber = '';
        previousNumber = '';
        currentOperation = operation;
        previousNumber = display.value;
    } else {
        currentOperation = operation;
        previousNumber = currentNumber;
        currentNumber = '';
    }
    display1.value = currentOperation;
}

function calculate() {
    let result = 0;
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
    }
    return result;
}

function displayResult() {
    display.value = calculate();
    previousNumber = calculate();
}

