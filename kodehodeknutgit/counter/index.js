//simple code calculating human to dog years
// let myAge = 25
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// myDogAge

// let bonusPoints = 50;
// bonusPoints;
// bonusPoints = bonusPoints + 50;
// bonusPoints;
// bonusPoints = bonusPoints - 75;
// bonusPoints;
// bonusPoints = bonusPoints + 45;
// bonusPoints;

//initialize the count
//listen for clicks
//increment the count variable when button is pressed
//change count-el in HTML to reflect new count

// function increment() {
//   console.log("the button was clicked");
// }

// function meaningOfLife() {
//   console.log(42);
// }
// meaningOfLife();

// let lap1 = 34;
// let lap2 = 28;
// let lap3 = 49;

// function raceTime() {
//   //let raceTime = lap1 + lap2 + lap3;
//   console.log(lap1 + lap2 + lap3);
// }
// raceTime();

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let saveCount = " " + count + " - ";
  saveEl.textContent += saveCount;
  console.log(count);
  countEl.textContent = 0;
  count = 0;
}

// let username = "Knut";
// let message = "You have three new notifications";
// let messageToUser = message + ", " + username + "!";

// console.log(messageToUser);

// let name = "Knut";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name + "!";

// console.log(myGreeting);
