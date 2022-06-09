// // MY INITIAL SOLUTION (NEEDED AUDIO IN HTML)

// document.addEventListener("keydown", (e) => {
//   if (e.key == "q" && e.repeat === false) {
//     document.getElementById("clap").play();
//     document.getElementById("clap").currentTime = 0;
//     console.log(`Key "${e.key}"`);
//   }
//   if (e.key == "w" && e.repeat === false) {
//     document.getElementById("hihat").play();
//     document.getElementById("hihat").currentTime = 0;
//     console.log(`Key "${e.key}"`);
//   }
//   if (e.key == "e" && e.repeat === false) {
//     document.getElementById("kick").play();
//     document.getElementById("kick").currentTime = 0;
//     console.log(`Key "${e.key}"`);
//   }
//   if (e.key == "r" && e.repeat === false) {
//     document.getElementById("openhat").play();
//     document.getElementById("openhat").currentTime = 0;
//     console.log(`Key "${e.key}"`);
//   }
//   if (e.key == "u" && e.repeat === false) {
//     document.getElementById("ride").play();
//     document.getElementById("ride").currentTime = 0;
//     console.log(`Key "${e.key}"`);
//   }
//   if (e.key == "i" && e.repeat === false) {
//     document.getElementById("snare").play();
//     document.getElementById("snare").currentTime = 0;
//     console.log(`Key "${e.key}"`);
//   }
//   if (e.key == "o" && e.repeat === false) {
//     document.getElementById("tink").play();
//     document.getElementById("tink").currentTime = 0;
//     console.log(`Key "${e.key}"`);
//   }
//   if (e.key == "p" && e.repeat === false) {
//     document.getElementById("tom").play();
//     document.getElementById("tom").currentTime = 0;
//     console.log(`Key "${e.key}"`);
//   }
// });

//NEW SOLUTION USING SWITCH AND GETTING AUDIO FROM JS

// let clap = new Audio("drums/clap.wav");
// let hihat = new Audio("drums/hihat.wav");
// let kick = new Audio("drums/kick.wav");
// let openhat = new Audio("drums/openhat.wav");
// let ride = new Audio("drums/ride.wav");
// let snare = new Audio("drums/snare.wav");
// let tink = new Audio("drums/tink.wav");
// let tom = new Audio("drums/tom.wav");

// document.addEventListener("keydown", (e) => {
//   switch (e.code) {
//     case "KeyQ":
//       clap.play();
//       clap.currentTime = 0;
//       break;
//     case "KeyW":
//       hihat.play();
//       hihat.currentTime = 0;
//       break;
//     case "KeyE":
//       kick.play();
//       kick.currentTime = 0;
//       break;
//     case "KeyR":
//       openhat.play();
//       openhat.currentTime = 0;
//       break;
//     case "KeyU":
//       ride.play();
//       ride.currentTime = 0;
//       break;
//     case "KeyI":
//       snare.play();
//       snare.currentTime = 0;
//       break;
//     case "KeyO":
//       tink.play();
//       tink.currentTime = 0;
//       break;
//     case "KeyP":
//       tom.play();
//       tom.currentTime = 0;
//       break;
//   }
// });

//SOLUTION USING ARRAY AND GOING THROUGH EACH OBJECT

const allSounds = [
  { key: "q", sound: new Audio("drums/clap.wav"), name: "Clap" },
  { key: "w", sound: new Audio("drums/hihat.wav"), name: "Hihat" },
  { key: "e", sound: new Audio("drums/kick.wav"), name: "Kick" },
  { key: "r", sound: new Audio("drums/openhat.wav"), name: "Openhat" },
  { key: "u", sound: new Audio("drums/ride.wav"), name: "Ride" },
  { key: "i", sound: new Audio("drums/snare.wav"), name: "Snare" },
  { key: "o", sound: new Audio("drums/tink.wav"), name: "Tink" },
  { key: "p", sound: new Audio("drums/tom.wav"), name: "Tom" },
];

document.addEventListener("keydown", (e) => {
  for (const soundObj of allSounds) {
    if (e.key === soundObj.key && e.repeat === false) {
      playSound(soundObj.sound);
      console.log(soundObj);
    }
  }
});

let playSound = (sound) => {
  sound.play();
  sound.currentTime = 0;
};

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "KeyQ":
      if (e.repeat === false) {
        document.getElementById("clap").classList.add("pressed");
        setTimeout(function () {
          document.getElementById("clap").classList.remove("pressed");
        }, 250);
      }
      break;
    case "KeyW":
      if (e.repeat === false) {
        document.getElementById("hihat").classList.add("pressed");
        setTimeout(function () {
          document.getElementById("hihat").classList.remove("pressed");
        }, 250);
      }
      break;
    case "KeyE":
      if (e.repeat === false) {
        document.getElementById("kick").classList.add("pressed");
        setTimeout(function () {
          document.getElementById("kick").classList.remove("pressed");
        }, 250);
      }
      break;
    case "KeyR":
      if (e.repeat === false) {
        document.getElementById("openhat").classList.add("pressed");
        setTimeout(function () {
          document.getElementById("openhat").classList.remove("pressed");
        }, 250);
      }
      break;
    case "KeyU":
      if (e.repeat === false) {
        document.getElementById("ride").classList.add("pressed");
        setTimeout(function () {
          document.getElementById("ride").classList.remove("pressed");
        }, 250);
      }
      break;
    case "KeyI":
      if (e.repeat === false) {
        document.getElementById("snare").classList.add("pressed");
        setTimeout(function () {
          document.getElementById("snare").classList.remove("pressed");
        }, 250);
      }
      break;
    case "KeyO":
      if (e.repeat === false) {
        document.getElementById("tink").classList.add("pressed");
        setTimeout(function () {
          document.getElementById("tink").classList.remove("pressed");
        }, 250);
      }
      break;
    case "KeyP":
      if (e.repeat === false) {
        document.getElementById("tom").classList.add("pressed");
        setTimeout(function () {
          document.getElementById("tom").classList.remove("pressed");
        }, 250);
      }
  }
});

//i got lazy..

function clapClick() {
  let clap = new Audio("drums/clap.wav");
  clap.play();
  clap.currentTime = 0;
}
function hihatClick() {
  let hihat = new Audio("drums/hihat.wav");
  hihat.play();
  hihat.currentTime = 0;
}
function kickClick() {
  let kick = new Audio("drums/kick.wav");
  kick.play();
  kick.currentTime = 0;
}
function openhatClick() {
  let openhat = new Audio("drums/openhat.wav");
  openhat.play();
  openhat.currentTime = 0;
}
function rideClick() {
  let ride = new Audio("drums/ride.wav");
  ride.play();
  ride.currentTime = 0;
}
function snareClick() {
  let snare = new Audio("drums/snare.wav");
  snare.play();
  snare.currentTime = 0;
}
function tinkClick() {
  let tink = new Audio("drums/tink.wav");
  tink.play();
  tink.currentTime = 0;
}
function tomClick() {
  let tom = new Audio("drums/tom.wav");
  tom.play();
  tom.currentTime = 0;
}
