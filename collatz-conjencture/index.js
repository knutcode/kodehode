const inputNum = document.getElementById("input-value");
const button = document.getElementById("btn");
const firstValue = document.getElementById("first-value");
const stepsValue = document.getElementById("steps-value");
const highestValue = document.getElementById("highest-value");

let arr = [];

function calcValue() {
  return inputNum.value;
}

button.addEventListener("click", () => {
  if (inputNum.value === "") {
    highestValue.textContent = "0";
    firstValue.textContent = "0";
    stepsValue.textContent = "0";
  } else {
    arr = [];
    collatz(calcValue());
    inputNum.value = "";
  }
  inputNum.focus();
});

function collatz(n) {
  let steps = 0;
  let result = n;

  if (n > 1)
    while (result !== 1) {
      if (result % 2 === 0) {
        result = result / 2;
      } else {
        result = result * 3 + 1;
        arr.push(result);
      }
      steps++;
    }

  let highestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (highestNum < arr[i]) {
      highestNum = arr[i];
    }
  }
  highestValue.textContent = highestNum;
  firstValue.textContent = inputNum.value;
  stepsValue.textContent = steps;
  if (highestNum === undefined) {
    highestValue.textContent = inputNum.value;
  }
}
