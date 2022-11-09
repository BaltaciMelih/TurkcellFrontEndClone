// -let value;

// html içerisine eleman ekleme
// const newButton = document.createElement("a");
// value = document.getElementsByClassName("card-body")[1];

// newButton.id = "clear-todos";
// newButton.className = "btn btn-danger";
// newButton.href = "#";

// const text = document.createTextNode("Clear All");
// newButton.appendChild(text);

// value.appendChild(newButton);

// silme
// value = document.querySelector(".list-group-item");
// value.remove();

// Class ekleme ve Silme
// value = document.getElementById("todo");
// value.classList.add("Deneme");
// value.classList.remove("form-control");
// value.setAttribute("placeholder", "Todo Gir");
// value.removeAttribute("placeholder");

// DOM Eventleri

// const filterInput = document.getElementById("filter");

// filtetInput.onfocus = function () {
//   console.log("Focus olduk");
// };

// filterInput.addEventListener("focus", function (e) {
//   console.log(e.target.placeholder);
//   e.target.placeholder = "Todo Yazın";
// });

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
//   todoList.className = "d-none";
//   console.log("Hepsi Temizlendi");
// }

// console.log(todoList);

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

// Tüm Todo Temizle
const listGroup = document.querySelector("#list-group");
const listGroupItems = document.querySelectorAll(".list-group-item");
const clearTodos = document.getElementById("clear-todos");
clearTodos.addEventListener("click", clearTodosFunc);

function clearTodosFunc() {
  listGroupItems.forEach((e) => e.remove());
}

// Seçili Todo Temizleyin
const deleteItems = document.getElementsByClassName("delete-item");
deleteItemLoop();
function deleteItemLoop() {
  for (let i = 0; i < deleteItems.length; i++) {
    function deleteItem() {
      deleteItems[i].parentElement.className = "d-none";
    }
    deleteItems[i].addEventListener("click", deleteItem);
  }
}

// Todo Ekle
const todoButton = document.querySelector("#todo-add");

todoButton.addEventListener("click", newTodo);

function newTodo(e) {
  const todoInput = document.querySelector("#todo");
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  const textNode = document.createTextNode(todoInput.value);
  const a = document.createElement("a");
  a.href = "#";
  a.className = "delete-item";
  const faIcon = document.createElement("i");
  faIcon.className = "fa fa-remove";

  listGroup.appendChild(li).appendChild(textNode);
  li.appendChild(a).appendChild(faIcon);

  e.preventDefault();
  todoInput.remove;
  deleteItemLoop();
}
