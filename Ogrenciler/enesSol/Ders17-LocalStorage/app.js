// Elemanları Seçme
const form = document.getElementById("todo-form");
const detailsInput = document.getElementById("details");
const todoInput = document.getElementById("todo");
const movieInput = document.getElementById("movie-image");
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
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
}

// Todo Ekleme
function addTodo(e) {
  const newTodo = todoInput.value.trim();
  const newDetails = detailsInput.value.trim();
  const movieUrl = movieInput.value.trim();
  if ((newTodo, newDetails, movieUrl === "")) {
    showAlert("danger", "Lütfen bir todo giriniz.");
  } else {
    addTodoToUI(newTodo, newDetails, movieUrl);
    addTodoToStorage(newTodo, newDetails, movieUrl);
    showAlert("success", "Todo başarılı bir şekilde eklendi.");
  }
  e.preventDefault();
}

// Todo Ekleme (UI Tarafını Oluşturma)
function addTodoToUI(newTodo, newDetails, movieUrl) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  const moviediv = document.createElement("div");
  moviediv.className = "card";

  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class='fa fa-remove'></i>";
  moviediv.innerHTML = `  <img style="width = 100px; height = 100px" src="${movieUrl}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${newTodo}</h5>
    <p class="card-text">${newDetails}</a>
  </div>`;
  listItem.className = "list-group-item d-flex justify-content-between";
  // listItem.appendChild(document.createElement(newTodo));
  listItem.appendChild(moviediv);
  listItem.appendChild(link);
  todoList.appendChild(listItem);
  todoInput.value = "";
  detailsInput.value = "";
  movieInput.value = "";
}

// Bütün todoları silme
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
  deleteItemFromLS(e.target.parentElement.parentElement);
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
function addTodoToStorage(newTodo, newDetails, movieUrl) {
  let todos = getTodosFromStorage();
  todos.push(newTodo, newDetails, movieUrl);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI() {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}

// Tek tek silme tarafı ödev
function deleteItemFromLS() {
  let todos = getTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (todo === todo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
