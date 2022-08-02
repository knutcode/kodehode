const inputNum = document.getElementById("input-value");
const button = document.getElementById("btn");
const firstValue = document.getElementById("first-value");
const stepsValue = document.getElementById("steps-value");
const highestValue = document.getElementById("highest-value");

let arr = [];

function calcValue() {
  if (inputNum.value === "") {
    highestValue.textContent = "0";
    firstValue.textContent = "0";
    stepsValue.textContent = "0";
  } else {
    arr = [];
    collatz(inputNum.value);
    inputNum.value = "";
  }
  inputNum.focus();
}

button.addEventListener("click", () => {
  calcValue();
});

inputNum.addEventListener("keyup", (e) => {
  if (e.code !== "Enter") return;
  calcValue();
});

function collatz(n) {
  let steps = 0;
  let num = n;

  if (n > 1)
    while (num !== 1) {
      if (num % 2 === 0) {
        num = num / 2;
      } else {
        num = num * 3 + 1;
        arr.push(num);
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
