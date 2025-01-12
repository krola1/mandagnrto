const inputField = document.querySelector("#input-field");
const inputForm = document.querySelector("#input-form");
const submitButton = document.querySelector("#submit-button");
const listContainer = document.querySelector("#list-container");
let listArr = [];

// oppadatere fra storage

if (localStorage.getItem("listArr"))
  listArr = JSON.parse(localStorage.getItem("listArr"));
localStorage.setItem("listArr", JSON.stringify(listArr));

// rendre
// card design
const cardDesign = (str) => {
  let mainCard = document.createElement("div");
  mainCard.className = "main-card";
  let container1 = document.createElement("div");
  container1.className = "container";
  let isComplete = document.createElement("input");
  isComplete.type = "checkbox";
  isComplete.id = "checkbox2";
  let tasktext = document.createElement("p");
  tasktext.textContent = str;
  let container2 = document.createElement("div");
  container2.className = "container";
  let editButton = document.createElement("input");
  editButton.type = "button";
  editButton.value = "Edit";
  editButton.id = "edit-button";
  let deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  deleteButton.id = `${str}`;
  container1.append(isComplete);
  container2.append(editButton, deleteButton);
  mainCard.append(container1, tasktext, container2);
  listContainer.prepend(mainCard);
  // slette
  deleteButton.addEventListener("click", () => {
    listArr.splice(listArr.indexOf(deleteButton.id, 1));
    localStorage.setItem("listArr", JSON.stringify(listArr));
    renderTasks();
  });
};
//main render
const renderTasks = () => {
  while (listContainer.firstChild)
    listContainer.removeChild(listContainer.firstChild);
  for (task in listArr) {
    cardDesign(listArr[task]);
  }
};

// legge til
inputForm.addEventListener("submit", () => {
  if (inputField.value != "") {
    listArr.push(inputField.value);
    localStorage.setItem("listArr", JSON.stringify(listArr));
  } else {
    alert("Cannot submit empty task");
  }
});

renderTasks();

// redigere

// merke som fulført
// vise fullførte

// dropdown sotering
