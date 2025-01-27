const addingButton = document.getElementById("addingButton");
const clearingButton = document.getElementById("clearingButton");
const inputTask = document.getElementById("inputTask");
const taskList = document.getElementById("taskList");
let defaultParagraph = document.getElementById("defaultParagraph");

function taskCreation() {
  const inputTaskValue = inputTask.value;
  if (inputTaskValue === "") {
    alert("Введите текст задачи!");
    return;
  } else {
    defaultParagraph.remove();
    const taskItem = document.createElement("div");
    taskItem.classList.add("main-part__task-list-field__task-item");
    const taskItemText = document.createElement("p");
    taskItemText.classList.add("main-part__task-list-field__task-item-text");
    taskItemText.textContent = inputTaskValue;
    const taskItemCheckboxLabel = document.createElement("label");
    const taskItemCheckbox = document.createElement("input");
    taskItemCheckbox.classList.add("main-part__task-list-field__task-item-checkbox");
    taskItemCheckbox.type = "checkbox";
    const taskItemCustomCheckbox = document.createElement("span");
    taskItemCustomCheckbox.classList.add("custom-checkbox");
    taskList.append(taskItem);
    taskItem.append(taskItemText);
    taskItem.append(taskItemCheckboxLabel);
    taskItemCheckboxLabel.append(taskItemCheckbox);
    taskItemCheckboxLabel.append(taskItemCustomCheckbox);
    inputTask.value = "";
    clearingButton.className = "main-part__button__clearing-button-active";
    let localStorageArray = JSON.parse(window.localStorage.getItem("Tasks")) || [];
    localStorageArray.push(inputTaskValue);
    window.localStorage.setItem("Task", JSON.stringify(localStorageArray));
  }
}

addingButton.addEventListener("click", taskCreation);

function listCleareance() {
  taskList.innerHTML = "";
  clearingButton.className = "main-part__button__clearing-button";
  defaultParagraph = document.createElement("p");
  defaultParagraph.id = "defaultParagraph";
  defaultParagraph.classList.add("main-part__task-list-field__default-text");
  defaultParagraph.textContent = "Нет задач";
  taskList.append(defaultParagraph);
}

clearingButton.addEventListener("click", listCleareance);
