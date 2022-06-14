const userInput = document.querySelector("input");
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-button");

userInput.addEventListener("keyup", (e) => {
  if (e.code !== "Enter" || userInput.value.match(/^ *$/)) return;
  userInput.focus();
  addToList();
});

submitBtn.addEventListener("click", () => {
  if (userInput.value.match(/^ *$/)) return;
  userInput.focus();
  addToList();
});

clearBtn.addEventListener("click", () => {
  document.querySelectorAll("li").forEach((li) => li.remove());
});

function addToList() {
  document.querySelector("#p-el").textContent = "Your *tasks";
  //   clearBtn.classList.remove("hidden");

  const li = document.createElement("li");
  const p = document.createElement("p");
  const wipe = document.createElement("button");
  const btn = document.createElement("button");
  //^ creates elements to be used in list

  p.textContent = userInput.value;
  wipe.textContent = "done?";
  btn.textContent = "remove";
  //^ adds text to elements

  btn.classList.add("hidden");
  //^ hides the "remove" button

  li.append(p, wipe, btn);
  document.querySelector("ul").append(li);
  //^ renders/appends task + interactive buttons to a list

  wipe.addEventListener("click", () => {
    p.classList.add("wiped");
    btn.classList.remove("hidden");
    btn.classList.add("done");
    wipe.classList.add("hidden");
  });
  //^ "wipes out" selected task and marks it as completed, adds option to remove after.

  btn.addEventListener("click", () => li.remove());
  userInput.value = "";
  //^ function to remove selected task from list and finally clears the input-field
}
