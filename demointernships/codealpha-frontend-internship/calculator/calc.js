let display = document.getElementById('display');
let currentInput = '0';
let operator = '';

function appendNumber(num) {
  if (currentInput === '0') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  display.textContent = currentInput;
}

function appendOperator(op) {
  if (currentInput !== '0') {
    currentInput += op;
    display.textContent = currentInput;
  }
}

function calculate() {
  try {
    let result = eval(currentInput);
    display.textContent = result;
    currentInput = result.toString();
  } catch (error) {
    display.textContent = 'Error';
  }
}

function clearDisplay() {
  currentInput = '0';
  display.textContent = '0';
}