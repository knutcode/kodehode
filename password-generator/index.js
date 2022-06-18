// let pwdOne = document.getElementById("pwd-el-one");
// let pwdTwo = document.getElementById("pwd-el-two");
// let pwdThree = document.getElementById("pwd-el-three");
// let pwdFour = document.getElementById("pwd-el-four");

//Not needed since elements are called inside the renderPassword() function

function genPassword() {
  let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = document.getElementById("slider");
  let password = "";

  for (let i = 1; i <= passwordLength.value; i++) {
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

function copyText(clicked_id) {
  let copyText = document.getElementById(clicked_id);
  navigator.clipboard.writeText(copyText.value);
}
