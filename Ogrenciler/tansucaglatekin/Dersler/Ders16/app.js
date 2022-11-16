// ------------------ DERS 15 ------------------------
// let value;

// // html içerisine eleman ekleme
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
//   todoList.innerHTML = "";
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

// ------------------------- DERS 16 ----------------------------

// Elemanları Seçme
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const clearButton = document.getElementById("clear-todos");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.getElementById("filter");

// Eventler
eventListeners();
function eventListeners() {
  form.addEventListener("submit", addTodo);
  clearButton.addEventListener("click", clearAllTodos);
  secondCardBody.addEventListener("click", deleteTodo);
  filter.addEventListener("keyup", filterTodos);
}

// Todo Ekleme
function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    showAlert("danger", "Lütfen bir todo giriniz.");
  } else {
    addTodoToUI(newTodo);
    showAlert("success", "Todo başarılı bir şekilde eklendi.");
  }
  e.preventDefault();
}

// Todo Ekleme (UI Tarafını Oluşturma)
function addTodoToUI(newTodo) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class='fa fa-remove'></i>";
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todoList.appendChild(listItem);
  todoInput.value = "";
}

// ütün todoları silme
function clearAllTodos() {
  // todoList.innerHTML = "";
  while (todoList.firstChild != null) {
    todoList.removeChild(todoList.firstChild); // Daha hızlı çalışacak
  }
}

// Delete Todo (tek tek silme işlemi)
function deleteTodo(e) {
  // console.log(e.target);
  // console.log(e.target.parentElement);
  // console.log(e.target.parentElement.parentElement);
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    console.log("todo başarıyla silindi");
  }
}

// Filtreleme
function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  // console.log(listItems);
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    console.log(text.indexOf(filterValue));
    if (text.indexOf(filterValue) === -1) {
      const alert = document.querySelector(".alert");
      if (!alert) {
        showAlert("warning", "Aradığınız Todo Bulunamadı!");
      }
      listItem.setAttribute("style", "display:none !important");
    } else {
      listItem.setAttribute("style", "display:block");
    }
  });
}

// Alert Metodu
function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `mt-3 alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
}