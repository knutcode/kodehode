let length = 3.281; // multiply = M -> Ft, divide = Ft -> M
let volume = 3.785; // divide = L -> gallon
let mass = 2.205; // multiply = Kg -> Pounds
let inputEl = document.getElementById("input-el");
let meterfeet = document.getElementById("meterfeet");
let litergallon = document.getElementById("litergallon");
let kilopound = document.getElementById("kilopound");

function calcNumber() {
  let number = document.getElementById("input-el").value;
  if (number === "") {
    number = 0;
  }
  // Length
  meterfeet.textContent = number + " m = " + (number * length).toFixed(3) + " ft | ";
  meterfeet.textContent += number + " ft = " + (number / length).toFixed(3) + " m";
  // Volume
  litergallon.textContent = number + " L = " + (number / volume).toFixed(3) + " gal | ";
  litergallon.textContent += number + " gal = " + (number * volume).toFixed(3) + " L";
  // Mass
  kilopound.textContent = number + " Kg = " + (number * mass).toFixed(3) + " lb | ";
  kilopound.textContent += number + " lb = " + (number / mass).toFixed(3) + " Kg";
}
