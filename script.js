function add(inputArr) {
  let result = 0;
  for (let i = 0; i < inputArr.length; i++) {
    result = result + inputArr[i];
  }
  return result;
}

function subtract(inputArr) {
  let result = inpArr[0];
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
  let result = inpArr[0];
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
