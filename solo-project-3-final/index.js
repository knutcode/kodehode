const carBtn = document.getElementById("car-btn");
const lawnBtn = document.getElementById("lawn-btn");
const weedsBtn = document.getElementById("weeds-btn");
let listRender = document.getElementById("list-render");

let priceArray = [];
clicked = false;

carBtn.addEventListener("click", function () {
  priceArray.push(10);
  listRender.innerHTML = `
  <p>Wash Car</p> <button>Remove</button> <p class="price">$${priceArray}</p> </br>
  `;
});
