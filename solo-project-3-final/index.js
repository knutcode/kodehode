const carBtn = document.getElementById("car-btn");
const lawnBtn = document.getElementById("lawn-btn");
const weedsBtn = document.getElementById("weeds-btn");
let listRender = document.getElementById("list-render");
let displayCost = document.getElementById("dolla");
let body = document.getElementById("app");
// let listRenderLawn = document.getElementById("list-render-lawn");
// let listRenderWeeds = document.getElementById("list-render-weeds");

let priceArray = [];
clickedCar = false;
clickedLawn = false;

body.addEventListener("click", () => {
  displayCost.innerHTML = `$${priceArray}`;
});

carBtn.addEventListener("click", () => {
  if (clickedCar === false) {
    clickedCar = true;
    priceArray.push(10);
    listRender.innerHTML += `
  <div class="car">
    <p>Wash Car</p>
    <button onclick="removeCarRender()">Remove</button> 
    <p class="price">$${priceArray}</p>
  </div>
  `;
  }
  if (clickedCar === true) {
    return;
  }
});

lawnBtn.addEventListener("click", () => {
  if (clickedLawn === false) {
    clickedLawn = true;
    priceArray.push(20);
    listRender.innerHTML += `
  <div class="car">
    <p>Mow Lawn</p>
    <button onclick="removeLawnRender()">Remove</button> 
    <p class="price">$${priceArray}</p>
  </div>
  `;
  }
  if (clickedLawn === true) {
    return;
  }
});

function removeCarRender() {
  clickedLawn = false;
  clickedCar = false;
  priceArray.shift();
  listRender.innerHTML = ``;
}

function removeLawnRender() {
  clickedLawn = false;
  clickedCar = false;
  priceArray.shift();
  listRender.innerHTML = ``;
}
// lawnBtn.addEventListener("click", function () {
//   priceArray.push(20);
//   listRenderLawn.innerHTML = `
//   <p>Mow Lawn</p> <button>Remove</button> <p class="price">$${priceArray}</p> </br>
//   `;
// });

// weedsBtn.addEventListener("click", function () {
//   priceArray.push(30);
//   listRenderWeeds.innerHTML = `
//   <p>Pull Weeds</p> <button>Remove</button> <p class="price">$${priceArray}</p> </br>
//   `;
// });
