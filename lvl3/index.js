// Initial solution
document.addEventListener("keydown", (e) => {
  if (e.key == "q" && e.repeat === false) {
    document.getElementById("clap").play();
    document.getElementById("clap").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "w" && e.repeat === false) {
    document.getElementById("hihat").play();
    document.getElementById("hihat").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "e" && e.repeat === false) {
    document.getElementById("kick").play();
    document.getElementById("kick").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "r" && e.repeat === false) {
    document.getElementById("openhat").play();
    document.getElementById("openhat").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "u" && e.repeat === false) {
    document.getElementById("ride").play();
    document.getElementById("ride").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "i" && e.repeat === false) {
    document.getElementById("snare").play();
    document.getElementById("snare").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "o" && e.repeat === false) {
    document.getElementById("tink").play();
    document.getElementById("tink").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "p" && e.repeat === false) {
    document.getElementById("tom").play();
    document.getElementById("tom").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
});

//Solution using switch (plays wrong audio?)
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
//     case "KeyW":
//       hihat.play();
//       hihat.currentTime = 0;
//     case "KeyE":
//       kick.play();
//       kick.currentTime = 0;
//     case "KeyR":
//       openhat.play();
//       openhat.currentTime = 0;
//     case "KeyU":
//       ride.play();
//       ride.currentTime = 0;
//     case "KeyI":
//       snare.play();
//       snare.currentTime = 0;
//     case "KeyO":
//       tink.play();
//       tink.currentTime = 0;
//     case "KeyP":
//       tom.play();
//       tom.currentTime = 0;
//   }
// });

// const allSounds = [
//   { key: "q", sound: new Audio("drums/clap.wav") },
//   { key: "w", sound: new Audio("drums/hihat.wav") },
//   { key: "e", sound: new Audio("drums/kick.wav") },
//   { key: "r", sound: new Audio("drums/openhat.wav") },
// ];

// document.addEventListener("keydown", (e) => {
//   for (const soundObj of allSounds) {
//     if (e.key === soundObj.key) {
//       playSound(soundObj);
//     }
//   }
// });

// let playSound = (sound) => {
//   sound.play();
//   sound.currentTime = 0;
// };
