let value;

// ADDING AN ELEMENT TO HTML
// const newButton = document.createElement("a");
// value = document.getElementsByClassName("card-body")[1];

// newButton.id = "clear-todos";
// newButton.className = "btn btn-danger";
// newButton.href = "#";

// const text = document.createTextNode("Clear All");
// newButton.appendChild(text);

// value.appendChild(newButton);

// REMOVING AN ELEMENT
// value = document.querySelector(".list-group-item");
// value.remove();

// Adding & Removing Classes

// value = document.getElementById("todo");

// value.classList.add("deneme");
// value.classList.remove("form-control");
// value.getAttribute("placeholder", "Modified Todo");
// value.removeAttribute("placeholder");

// DOM EVENTS
// const filterInput = document.getElementById("filter");
// FOCUS EVENT
// filterInput.onfocus = function () {
//   console.log("Focus oldu");
// };

// filterInput.addEventListener("focus", function (e) {
//   console.log(e.target.placeholder);
//   e.target.placeholder = "Todo Yazın";
// });

// SUBMIT EVENT
// const todoForm = document.getElementById("todo-form");
// todoForm.addEventListener("submit", submitForm);

// function submitForm(e) {
//   console.log("Submit oldu");
//   e.preventDefault();
// }

// const todoList = document.querySelector(".list-group");
// const clearTodos = document.getElementById("clear-todos");
// clearTodos.addEventListener("click", clearTodosFunc);

// function clearTodosFunc() {
//   todoList.innerHTML = "";
//   console.log("Hepsi Temizlendi");
// }

// console.log(todoList);

// KEYDOWN EVENT
// const filterInput = document.getElementById("filter");

// filterInput.addEventListener("keyup", filterTodos);
// function filterTodos(e) {
//   console.log(e.target.value);
// }

// dblclick mousedown mouseup paste copy (try to block copy and paste)

// const todoButton = document.getElementById("todo-add");

// todoButton.addEventListener("mouseover", function (e) {
//   e.target.style.backgroundColor = "orangered";
//   e.target.borderColor = "orangered";
// });

// todoButton.addEventListener("mouseleave", function (e) {
//   e.target.style.backgroundColor = "red";
//   e.target.borderColor = "red";
// });

// CHOOSE SIBLING ELEMENTS
const listItem = document.querySelector(".list-group-item");

console.log(listItem.nextElementSibling);
console.log(value);
