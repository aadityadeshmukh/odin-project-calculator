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

let inpArr = [3, 4, 9, 8];
addn = add(inpArr);
subtn = subtract(inpArr);
multn = multiply(inpArr);
divn = divide(inpArr);
console.log({ addn });
console.log({ subtn });
console.log({ multn });
console.log({ divn });
