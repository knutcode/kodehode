let carBtn = document.getElementById("car-btn");
let lawnBtn = document.getElementById("lawn-btn");
let weedsBtn = document.getElementById("weeds-btn");
let listRender = document.getElementById("render-service");
let displayCost = document.getElementById("render-total");
let body = document.getElementById("app");
// let listRenderLawn = document.getElementById("list-render-lawn");
// let listRenderWeeds = document.getElementById("list-render-weeds");

let priceArray = [];

body.addEventListener("click", () => {
  displayCost.innerHTML = `$${priceArray}`;
});

carBtn.addEventListener("click", () => {
  priceArray.push(10);
  listRender.innerHTML += `
  <div class="car">
    <p>Wash Car</p>
    <button onclick="removeCarRender()">Remove</button> 
    <p class="price">$${priceArray}</p>
  </div>
  `;
});

function renderService() {}
