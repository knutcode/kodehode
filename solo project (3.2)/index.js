let number = 20;
let length = 3.281; // multiply = M -> Ft, divide = Ft -> M
let volume = 3.785; // divide = L -> gallon
let mass = 2.205; // multiply = Kg -> Pounds
let numlen = number.toFixed(3) * length.toFixed(3);

let displayednumber = document.getElementById("dispNumb");
let meterfeet = document.getElementById("meterfeet");
let litergallon = document.getElementById("litergallon");
let kilopound = document.getElementById("kilopound");

function calcNumber() {
  displayednumber.textContent = number;
}

function calcConversion() {
  meterfeet.textContent = number + " m = " + (number * length).toFixed(3) + " ft | ";
  meterfeet.textContent += number + " ft = " + (number / length).toFixed(3) + " m";
  litergallon.textContent = number + " L = " + (number / volume).toFixed(3) + " gal | ";
  litergallon.textContent += number + " gal = " + (number * volume).toFixed(3) + " L";
  kilopound.textContent = number + " Kg = " + (number * mass).toFixed(3) + " lb | ";
  kilopound.textContent += number + " lb = " + (number / mass).toFixed(3) + " Kg";
}

// function calcLG() {
//   litergallon.textContent =
//     "Liters = " + number / volume + " | " + "Gallon = " + number * volume;
// }

// function calcKP() {
//   kilopound.textContent =
//     "Kilos = " + number * mass + " | " + "Pounds = " + number / mass;
// }
