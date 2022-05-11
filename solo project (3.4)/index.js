let pwdOne = document.getElementById("pwd-el-one");
let pwdTwo = document.getElementById("pwd-el-two");
let pwdThree = document.getElementById("pwd-el-three");
let pwdFour = document.getElementById("pwd-el-four");

function genPassword() {
  let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 12;
  let password = "";

  for (var i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

function renderPassword() {
  document.getElementById("pwd-el-one").value = genPassword();
  document.getElementById("pwd-el-two").value = genPassword();
  document.getElementById("pwd-el-three").value = genPassword();
  document.getElementById("pwd-el-four").value = genPassword();
}
