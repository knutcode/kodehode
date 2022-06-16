const userInput = document.querySelector("input");
const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-button");
const sortBtn = document.querySelector("#sort-abc-button");

const lsTask = JSON.parse(localStorage.getItem("lsTask"));
//note: my application of localStorage is borrowed but fully deconstructed and rewritten to match my code
//      as i didn't figure out how to do it on my own (i tried using a full array of li's instead of the object v)

if (lsTask) {
  lsTask.forEach((task) => {
    addToList(task);
  });
}
//^ if lsTask exists (this case its in localStorage),
//  use values from lsTask object in the addToList function and runs it for each task from previous ls updates

// ===== ENTER KEY PRESSED INSIDE INPUT =====
userInput.addEventListener("keyup", (e) => {
  if (e.code !== "Enter" || userInput.value.match(/^ *$/)) return;
  addToList();
});
//^ value from input appends to list when enter key is pressed

// ===== SUBMIT BUTTON =====
submitBtn.addEventListener("click", () => {
  if (userInput.value.match(/^ *$/)) return;
  addToList();
});
//^ value from input appends to list when submit button is pressed

// ===== CLEAR BUTTON =====
clearBtn.addEventListener("click", () => {
  document.querySelector("#p-el").textContent = "*awaiting tasks*";
  document.querySelectorAll("li").forEach((li) => li.remove());
  localStorage.clear();
});
//^ clears the entire list and resets "status" of list

// ===== SORT BUTTON =====
sortBtn.addEventListener("click", () => {
  let ul = document.querySelector("ul");

  Array.from(ul.getElementsByTagName("li"))
    .sort((a, b) => a.textContent.localeCompare(b.textContent))
    .forEach((li) => ul.appendChild(li));
  updateLS();
});
//^ sorts list numerically and alphabetically top to bottom and updates the LS

function addToList(task) {
  if (userInput.value.endsWith("task")) {
    window.open("https://www.youtube.com/watch?v=atQOxz9a1zo", "_blank");
    userInput.placeholder = "*add a real task...";
    userInput.focus();
    userInput.value = "";
    //^ little trolling
  } else {
    document.querySelector("#p-el").textContent = "your list";
    //^ sets list title ()

    const li = document.createElement("li");
    const p = document.createElement("p");
    const wipe = document.createElement("button");
    const btn = document.createElement("button");
    //^ creates elements to be used in list

    p.textContent = userInput.value;
    if (task) {
      p.textContent = task.text;
    }
    wipe.textContent = "done?";
    btn.textContent = "remove";
    //^ adds text to elements, if task in ls exists, use its .text value instead

    btn.classList.add("hidden");
    //^ hides the "remove" button

    function hide() {
      p.classList.add("wiped");
      btn.classList.remove("hidden");
      btn.classList.add("completed");
      wipe.classList.add("hidden");
    }
    //^ function to "wipe out" selected task and "marks it as completed", adds option to remove after.

    if (task && task.completed) {
      hide();
    }
    //^ if task in ls exists and meets the condition, run the hide command

    li.append(p, wipe, btn);
    document.querySelector("ul").append(li);
    //^ renders/appends task + interactive buttons to a list

    wipe.addEventListener("click", () => {
      hide();
      updateLS();
    });
    //^ runs hide function and updates ls when clicked

    btn.addEventListener("click", () => {
      li.remove();
      updateLS();
      if (document.querySelector("ul").textContent == "") {
        document.querySelector("#p-el").textContent = "*awaiting task*";
      }
    });
    //^ removes selected task/li element and updates the ls, and sets "status" to awaiting if UL is empty

    userInput.focus();
    userInput.value = "";
    updateLS();
    //^ clears the input-field, sets its value to "" and updates ls
  }
}

function updateLS() {
  const taskList = document.querySelectorAll("li");
  const storedList = [];

  taskList.forEach((li) => {
    storedList.push({
      text: li.firstChild.textContent,
      completed: li.innerText.includes("remove"),
    });
  });
  localStorage.setItem("lsTask", JSON.stringify(storedList));
}
//^ puts object in localStorage with textContent from firstChild of each li (<p>) and checks if the task has been marked as completed
