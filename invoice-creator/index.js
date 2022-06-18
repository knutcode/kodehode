let carBtn = document.getElementById("car-btn");
let lawnBtn = document.getElementById("lawn-btn");
let weedsBtn = document.getElementById("weeds-btn");
let sendBtn = document.getElementById("send-btn");

let renderService = document.getElementById("render-service");
let renderTotal = document.getElementById("render-total");

let serviceArray = [];
let valueArray = [];

let wash = { service: "Wash Car", value: 10, class: "removeWash" };
let mow = { service: "Mow Lawn", value: 20, class: "removeMow" };
let pull = { service: "Pull weeds", value: 30, class: "removePull" };

function pushTo(objSer, objVal, objCla) {
  serviceArray.push(
    `<div><p>${objSer.service}</p> <button onclick="${objCla.class}()">Remove</button> <p class="price"><span>$</span>${objVal.value}</p></div>`
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
  pushTo(wash, wash, wash);
  displayService();
  displayTotal();
  carBtn.disabled = true;
});

lawnBtn.addEventListener("click", () => {
  valueArray.push(mow.value);
  pushTo(mow, mow, mow);
  displayService();
  displayTotal();
  lawnBtn.disabled = true;
});

weedsBtn.addEventListener("click", () => {
  valueArray.push(pull.value);
  pushTo(pull, pull, pull);
  displayService();
  displayTotal();
  weedsBtn.disabled = true;
});
//REMOVE AND RESET FUNCTIONS
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

function remove(objSer, objVal, objCla) {
  let index = serviceArray.indexOf(
    `<div><p>${objSer.service}</p> <button onclick="${objCla.class}()">Remove</button> <p class="price"><span>$</span>${objVal.value}</p></div>`
  );
  serviceArray.splice(index, 1);
  valueArray.splice(index, 1);
}

function removeWash() {
  remove(wash, wash, wash);
  displayService();
  displayTotal();
  carBtn.disabled = false;
}

function removeMow() {
  remove(mow, mow, mow);
  displayService();
  displayTotal();
  lawnBtn.disabled = false;
}

function removePull() {
  remove(pull, pull, pull);
  displayService();
  displayTotal();
  weedsBtn.disabled = false;
}
