document.addEventListener("keydown", (e) => {
  if (e.key == "q") {
    document.getElementById("clap").play();
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "w") {
    document.getElementById("hihat").play();
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "e") {
    document.getElementById("kick").play();
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "r") {
    document.getElementById("openhat").play();
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "u") {
    document.getElementById("ride").play();
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "i") {
    document.getElementById("snare").play();
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "o") {
    document.getElementById("tink").play();
    console.log(`Key "${e.key}"`);
  }
  if (e.key == "p") {
    document.getElementById("tom").play();
    console.log(`Key "${e.key}"`);
  }
});
