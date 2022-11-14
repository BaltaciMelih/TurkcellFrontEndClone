// Elemanları seçme

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const clearButton = document.getElementById("clear-todos");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.getElementById("filter");

// Eventler

eventListeners();
function eventListeners(){
  form.addEventListener("submit", addTodo);
  clearButton.addEventListener("click", clearAllTodos);
  secondCardBody.addEventListener("click",deleteTodo);
  filter.addEventListener("keyup",filterTodos);
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
    showAlert("success", "Todo başarılı bir şekilde eklendi");
  }
  e.preventDefault();
}

// Todo Ekleme (UI TARAFI)

function addTodoToUI(newTodo) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class= 'fa fa-remove'></i>";
  listItem.className="list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todoList.appendChild(listItem);
  todoInput.value = "";

}

// bütün todoları silme

function clearAllTodos() {
  // todoList.innerHTML = "";
  while (todoList.firstChild != null){
    todoList.removeChild(todoList.firstChild); // faster
  }
  localStorage.removeItem("todos");
}

// tek tek todo silme işlemi
function deleteTodo(e) {
  if (e.target.className === 'fa fa-remove') {
    const todo = e.target.parentElement.parentElement;
    todo.remove();
    deletepart(e.target.parentElement.parentElement.textContent);
    showAlert('success', 'Todo başarıyla silindi.');
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

// Alert Func

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `mt-3 alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);

  setTimeout(function(){
    alert.remove();
  }, 2000);
}

// Local storage veri alma

function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

// local storage'a veri gönderme 

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

// tek tek silme

function deletepart(dlt) {
  let allTodos = getTodosFromStorage();
  allTodos.forEach(function (anyTodo, i) {
    if (anyTodo === dlt) {
      allTodos.splice(i, 1);
    }
  });
  localStorage.setItem('todos', JSON.stringify(allTodos));
}


