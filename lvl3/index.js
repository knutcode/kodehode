document.addEventListener("keydown", (e) => {
  if (e.key == "q") {
    document.getElementById("clap").play();
    document.getElementById("clap").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "w") {
    document.getElementById("hihat").play();
    document.getElementById("hihat").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "e") {
    document.getElementById("kick").play();
    document.getElementById("kick").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "r") {
    document.getElementById("openhat").play();
    document.getElementById("openhat").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "u") {
    document.getElementById("ride").play();
    document.getElementById("ride").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "i") {
    document.getElementById("snare").play();
    document.getElementById("snare").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "o") {
    document.getElementById("tink").play();
    document.getElementById("tink").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "p") {
    document.getElementById("tom").play();
    document.getElementById("tom").currentTime = 0;
    console.log(`Key "${e.key}"`);
  }
});
