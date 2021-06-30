function add(inputArr) {
  let result = 0;
  for (let i = 0; i < inputArr.length; i++) {
    result = result + inputArr[i];
  }
  return result;
}

function subtract(inputArr) {
  let result = inputArr[0];
  for (let i = 1; i < inputArr.length; i++) {
    result = result - inputArr[i];
  }
  return result;
}

function multiply(inputArr) {
  let result = 1;
  for (let i = 0; i < inputArr.length; i++) {
    result = result * inputArr[i];
  }
  return result;
}

function divide(inputArr) {
  let result = inputArr[0];
  for (let i = 1; i < inputArr.length; i++) {
    result = result / inputArr[i];
  }
  return result;
}

function operate(inpOperator, inputArray) {
  let result = 0;
  if (inpOperator === '+') result = add(inputArray);
  if (inpOperator === '-') result = subtract(inputArray);
  if (inpOperator === '*') result = multiply(inputArray);
  if (inpOperator === '/') result = divide(inputArray);
  return result;
}

let inpArr = [3, 4, 9, 8];
addn = operate('+', inpArr);
subtn = operate('-', inpArr);
multn = operate('*', inpArr);
divn = operate('/', inpArr);
console.log({ addn });
console.log({ subtn });
console.log({ multn });
console.log({ divn });

function onNumberClick() {
  let button = this.document.activeElement;
  console.log(button.id);
  console.log(button.textContent);
  let screen = document.getElementById('screen-content');
  screen.textContent = screen.textContent + button.textContent;
  button.classList.add('button-hit');
}
function onClearAll(fromKB = false) {
  let button = this.document.activeElement;
  if (fromKB === true) button = document.getElementById('clr-all-btn');
  let screen = document.getElementById('screen-content');
  screen.textContent = '';
  button.classList.add('button-hit');
}
function onBackspace(fromKB = false) {
  let button = this.document.activeElement;
  if (fromKB === true) button = document.getElementById('clr-one-char-btn');
  let screen = document.getElementById('screen-content');
  screen.textContent = screen.textContent.slice(0, -1);
  button.classList.add('button-hit');
}
function onOperatorClick() {
  let button = this.document.activeElement;
  console.log(button.id);
  console.log(button.textContent);
  if (!(button.id === 'equal-btn' || button.id === 'plus-minus-btn')) {
    let screen = document.getElementById('screen-content');
    screen.textContent = screen.textContent + button.textContent;
  }
}
function operateExpression(fromKB = false) {
  let button = this.document.activeElement;
  if (fromKB === true) button = document.getElementById('equal-btn');
  button.classList.add('button-hit');
  let screen = document.getElementById('screen-content');
  let expressionStr = screen.textContent;
  let numberArr = expressionStr.split(/[+]+|[-]+|[*]+|[/]+/);
  let operatorArr = expressionStr.split(/[0-9]+|[0-9]+|[0-9]+|[0-9]+/);
  operatorArr = operatorArr.filter(ch => ch !== '');
  operatorArr = operatorArr.filter(ch => ch !== '.');
  console.table({ numberArr });
  console.table({ operatorArr });
  let result = +numberArr[0];
  for (let i = 1; i < numberArr.length; i++) {
    result = operate(operatorArr[i - 1], [result, +numberArr[i]]);
  }
  screen.textContent = result;
}

function onConvertBtnClick() {
  let button = this.document.activeElement;
  let screen = document.getElementById('screen-content');
  let expressionStr = screen.textContent;
  let idOperator = expressionStr.indexOf();
  let numberArr = expressionStr.split(/[+]+|[-]+|[*]+|[/]+/);
  console.table(numberArr);
  let lastIndex = expressionStr.lastIndexOf(numberArr[numberArr.length - 1]);
  console.log(lastIndex);
  let baseString = expressionStr.slice(0, lastIndex);
  //decide the operator to be added
  let lastNumInExpression = numberArr[numberArr.length - 1];
  idOperatorInString = lastNumInExpression.indexOf('-');
  if (idOperatorInString === -1) {
    //no negation
    lastNumInExpression = '-' + lastNumInExpression;
  } else {
    lastNumInExpression = lastNumInExpression.replace('-', '');
  }

  screen.textContent = baseString + lastNumInExpression;
}

//implement keyboard events
document.addEventListener('keydown', function(e) {
  console.log(e.key);
  console.log(e.code);
  if (e.key === 'Delete') onClearAll(true);
  if (e.key === '=') operateExpression(true);
  if (e.key === 'Backspace') onBackspace(true);
  if (
    (e.keyCode >= 48 && e.keyCode <= 57) ||
    e.key === '.' ||
    e.key === '+' ||
    e.key === '-' ||
    e.key === '/' ||
    e.key === '*'
  ) {
    let screen = document.getElementById('screen-content');
    screen.textContent = screen.textContent + e.key;
    //add a nudge to the button
    let btnClass = '';
    if (e.code === 'Equal' && e.shiftKey) btnClass = '.' + 'add';
    else if (e.code === 'Digit8' && e.shiftKey) btnClass = '.' + 'multiply';
    else btnClass = '.' + e.code;
    let button = document.querySelector(btnClass);
    if (!button) return;

    button.classList.add('button-hit');
  }
});
