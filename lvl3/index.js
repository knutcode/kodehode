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
