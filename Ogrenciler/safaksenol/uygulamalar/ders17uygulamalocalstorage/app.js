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
// loadAllTodosToUI();
function eventListeners() {
  form.addEventListener("submit", addTodo);
  clearButton.addEventListener("click", clearAllTodos);
  secondCardBody.addEventListener("click", deleteTodo);
  filter.addEventListener("keyup", filterTodos);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
}

// Todo Ekleme
function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    showAlert("danger", "Lütfen bir todo giriniz.");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
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
  localStorage.removeItem("todos");
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
  deleteTodoFromLS(e.target.parentElement.parentElement.textContent);
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

// Local Storage'e String Kaydetme
// localStorage.setItem("Key", "İçerik");
// const value = localStorage.getItem("Key");
// console.log(value);
// localStorage.clear();

// Local Storage'e Array Kaydetme
// const todosSample = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];
// localStorage.setItem("todolar", JSON.stringify(todosSample)); // "['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4']"
// const sampleTodos = JSON.parse(localStorage.getItem("todolar")); // ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4']
// console.log(sampleTodos);

// getTodosFromStorage
// addTodoToStorage
// loadAllTodos

// Local Storage'dan veri alma - Veri varsa o veri gelir yoksa boş array gelir.
function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

// Local Storage'a veri gönderme - Önce storage'daki verileri alıp sonra üzerine ekleme yapıp tekrar gönderdik.
function addTodoToStorage(newTodo) {
  let todos = getTodosFromStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI() {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

// Tek Tek silme tarafı ödevdi yapıldı düzgün şekilde çalışıyor pazar sabah 04.47

function deleteTodoFromLS(text) {
  todos = getTodosFromStorage();
  todos.forEach(function (item, index) {
    if (item === text) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}