//buttons
let carBtn = document.getElementById("car-btn");
let lawnBtn = document.getElementById("lawn-btn");
let weedsBtn = document.getElementById("weeds-btn");
let sendBtn = document.getElementById("send-btn");
let mainContainer = document.getElementById("main-container");

//display values
let renderService = document.getElementById("render-service");
let renderTotal = document.getElementById("render-total");

let serviceArray = [];
let valueArray = [];

let wash = {
  service: "Wash Car",
  value: 10,
};
let mow = {
  service: "Mown Lawn",
  value: 20,
};
let pull = {
  service: "Pull weeds",
  value: 30,
};

function pushTo(objSer, objVal) {
  serviceArray.push(`<div><p>${objSer.service}</p> <button>Remove</button> <p class="price">$${objVal.value}</p></div>`);
}

function displayService() {
  renderService.innerHTML = serviceArray.join(" ");
  console.log(serviceArray);
}

function displayTotal() {
  const sum = valueArray.reduce((partialSum, a) => partialSum + a, 0);
  renderTotal.textContent = `$${sum}`;
}

function resetAll() {
  serviceArray = [];
  valueArray = [];
  renderService.innerHTML = "";
  displayTotal();
  carBtn.disabled = false;
  lawnBtn.disabled = false;
  weedsBtn.disabled = false;
}
//example for later
// wash.totalValue = wash.value + mow.value;
// console.log(wash.totalValue);

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

sendBtn.addEventListener("click", () => {
  resetAll();
});
