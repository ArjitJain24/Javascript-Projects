const list = document.querySelector("#list-container");
const form = document.querySelector("form");

// saving data to browser
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

// retrieve the data from the browser
function loadData() {
  list.innerHTML = localStorage.getItem("data");
}

// adding a task
function taskAdder(task) {
  if (task == "") {
    alert("You must Write Something");
    return;
  }
  const li = document.createElement("li");
  li.textContent = task;
  const list = document.querySelector("#list-container");
  list.appendChild(li);
  // adding cross icon to remove the tasks added
  const span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  saveData();
}

// task adder
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = document.querySelector(".search").value;
  taskAdder(task);
  form.reset();
});

// remove and style the tasks when clicked
list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

loadData();
