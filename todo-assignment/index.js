const userInput = document.querySelector("input");
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-button");
const sortBtn = document.querySelector("#sort-abc-button");

userInput.addEventListener("keyup", (e) => {
  if (e.code !== "Enter" || userInput.value.match(/^ *$/)) return;
  userInput.focus();
  addToList();
}); //^ value from input appends to list when enter key is pressed

submitBtn.addEventListener("click", () => {
  if (userInput.value.match(/^ *$/)) return;
  userInput.focus();
  addToList();
}); //^ value from input appends to list when submit button is pressed

clearBtn.addEventListener("click", () => {
  document.querySelector("#p-el").textContent = "*awaiting tasks*";
  document.querySelectorAll("li").forEach((li) => li.remove());
}); //^ clears the entire list and resets "status" of list

sortBtn.addEventListener("click", () => {
  let ul = document.querySelector("ul");

  Array.from(ul.getElementsByTagName("li"))
    .sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach((li) => ul.appendChild(li));
}); //^ sorts list numerically and alphabetically top to bottom

function addToList() {
  document.querySelector("#p-el").textContent = "your list";
  //^ sets list title ()

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
    btn.classList.add("completed");
    wipe.classList.add("hidden");
  }); //^ "wipes out" selected task and "marks it as completed", adds option to remove after.

  btn.addEventListener("click", () => li.remove());
  userInput.value = "";
  //^ function to remove selected task from list and clears the input-field
}
