//buttons
let carBtn = document.getElementById("car-btn");
let lawnBtn = document.getElementById("lawn-btn");
let weedsBtn = document.getElementById("weeds-btn");

//display values
let listRender = document.getElementById("render-service");
let displayCost = document.getElementById("render-total");

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

//example for later
wash.totalValue = wash.value + mow.value;

console.log(wash.totalValue);
