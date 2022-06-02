//buttons
let carBtn = document.getElementById("car-btn");
let lawnBtn = document.getElementById("lawn-btn");
let weedsBtn = document.getElementById("weeds-btn");
let sendBtn = document.getElementById("send-btn");

//display values
let renderService = document.getElementById("render-service");
let renderTotal = document.getElementById("render-total");

let serviceArray = [];

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

carBtn.addEventListener("click", () => {
  serviceArray.push(`<div><p>${wash.service}</p> <button>Remove</button> <p class="price">$${wash.value}</p></div>`);
  carBtn.disabled = true;
  console.log(serviceArray);
});

lawnBtn.addEventListener("click", () => {
  serviceArray.push(`<div><p>${mow.service}</p> <button>Remove</button> <p class="price">$${mow.value}</p></div>`);
  lawnBtn.disabled = true;
  console.log(serviceArray);
});

weedsBtn.addEventListener("click", () => {
  serviceArray.push(`<div><p>${pull.service}</p> <button>Remove</button> <p class="price">$${pull.value}</p></div>`);
  weedsBtn.disabled = true;
  console.log(serviceArray);
});

//example for later
// wash.totalValue = wash.value + mow.value;
// console.log(wash.totalValue);

let randomCalc = serviceArray;
