const userInput = document.querySelector("input");
const submitBtn = document.querySelector("#submit-btn");

userInput.addEventListener("keyup", (e) => {
  userInput.focus();
  if (e.code !== "Enter" || userInput.value.match(/^ *$/)) return;
  addToList();
});

submitBtn.addEventListener("click", () => {
  userInput.focus();
  if (userInput.value.match(/^ *$/)) return;
  addToList();
});

function addToList() {
  const li = document.createElement("li");
  const p = document.createElement("p");
  const btn = document.createElement("button");
  const wipe = document.createElement("button");

  btn.classList.add("hidden");
  p.textContent = userInput.value;
  wipe.textContent = "done?";
  btn.textContent = "remove";

  li.append(p, wipe, btn);
  document.querySelector("ul").append(li);

  wipe.addEventListener("click", () => {
    p.classList.add("wiped");
    btn.classList.remove("hidden");
    btn.classList.add("done");
    wipe.classList.add("hidden");
  });

  btn.addEventListener("click", () => li.remove());
  userInput.value = "";
}
