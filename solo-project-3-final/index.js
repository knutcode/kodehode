let carBtn = document.getElementById("car-btn");
let lawnBtn = document.getElementById("lawn-btn");
let weedsBtn = document.getElementById("weeds-btn");
let sendBtn = document.getElementById("send-btn");

let renderService = document.getElementById("render-service");
let renderTotal = document.getElementById("render-total");

let serviceArray = [];
let valueArray = [];

let wash = { service: "Wash Car", value: 10 };
let mow = { service: "Mow Lawn", value: 20 };
let pull = { service: "Pull weeds", value: 30 };

function pushTo(objSer, objVal) {
  serviceArray.push(
    `<div><p>${objSer.service}</p> <button onclick="remove()">Remove</button> <p class="price"><span>$</span>${objVal.value}</p></div>`
  );
}

function displayService() {
  renderService.innerHTML = serviceArray.join(" ");
  console.log(serviceArray);
}

function displayTotal() {
  const sum = valueArray.reduce((partialSum, a) => partialSum + a, 0);
  renderTotal.textContent = `$${sum}`;
}

carBtn.addEventListener("click", () => {
  valueArray.push(wash.value);
  pushTo(wash, wash);
  displayService();
  displayTotal();
  carBtn.disabled = true;
});

lawnBtn.addEventListener("click", () => {
  valueArray.push(mow.value);
  pushTo(mow, mow);
  displayService();
  displayTotal();
  lawnBtn.disabled = true;
});

weedsBtn.addEventListener("click", () => {
  valueArray.push(pull.value);
  pushTo(pull, pull);
  displayService();
  displayTotal();
  weedsBtn.disabled = true;
});

function resetAll() {
  serviceArray = [];
  valueArray = [];
  renderService.innerHTML = "";
  displayTotal();
  carBtn.disabled = false;
  lawnBtn.disabled = false;
  weedsBtn.disabled = false;
}

sendBtn.addEventListener("click", () => {
  resetAll();
});

// function remove() {
//   console.log(
//     serviceArray.indexOf(
//       `<div class="item"><p>Wash Car</p> <button class="idBtn" id="idBtn" onclick="remove()">Remove</button> <p class="price"><span class="dollar">$</span>10</p></div>`
//     )
//   );
// }
