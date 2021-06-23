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

let inpArr = [3, 4, 9];
addn = add(inpArr);
subtn = subtract(inpArr);
console.log({ addn });
console.log({ subtn });
