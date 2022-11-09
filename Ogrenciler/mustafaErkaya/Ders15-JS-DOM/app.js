let value;

//html içerisine eleman ekleme
const newButton = document.createElement("a");
value = document.getElementsByClassName("card-body")[1];

// console.log(value);
newButton.id = "clear-todos";
newButton.className = "btn btn-danger";
newButton.href = "#";

const text = document.createTextNode("Clear All");
newButton.appendChild(text);

value.appendChild(newButton);

// silme
value = document.querySelectorAll(".list-group-item")[2];
value.remove();

// Class ekleme ve Silme
value = document.getElementById("todo");
value.classList.add("erkaya");
value.classList.remove("form-control");
value.setAttribute("placeholder", "Todo Gir");
value.removeAttribute("placeholder");

// DOM Eventleri

const filterInput = document.getElementById("filter");

filterInput.onfocus = function () {
  console.log("Focus olduk");
};

filterInput.addEventListener("focus", function (e) {
  console.log(e.target.placeholder);
  e.target.placeholder = "Todo Yazın";
});

const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", submitForm);
console.log(todoForm);
function submitForm(e) {
  console.log("Submit oldu");
  e.preventDefault();
}

const todoList = document.querySelector(".list-group");
const clearTodos = document.getElementById("clear-todos");
clearTodos.addEventListener("focus", clearTodosFunc )

function clearTodosFunc() {
  todoList.innerHTML = " ";
  console.log("Hepsi Temizlendi");
  e.preventDefault();
}
console.log(todoList);

// filterInput.addEventListener("keyup", filterTodo);
// function filterTodo(e) {
//   console.log(e.target.value);
// }

// dblclick mousedown mouseup paste copy blur cut

// const todoButton = document.getElementById("todo-add");

// todoButton.addEventListener("mouseover", function (e) {
//   e.target.style.backgroundColor = "green";
//   e.target.style.borderColor = "green";
// });
// todoButton.addEventListener("mouseleave", function (e) {
//   e.target.style.backgroundColor = "red";
//   e.target.style.borderColor = "red";
//   console.log(e.target.parentElement);
//   console.log(e.target.previousElementSibling);
// });

// const listItem = document.querySelectorAll(".list-group-item")[3];

// console.log(listItem.previousElementSibling);

// Seçtiğim bir elementin

// console.log(value);
