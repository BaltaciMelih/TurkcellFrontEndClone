// Elemanları Seçme
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const clearButton = document.getElementById("clear-todos");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];

// Eventler
eventListeners();
function eventListeners() {
  form.addEventListener("submit", addTodo);
  clearButton.addEventListener("click", clearAllTodos);
  secondCardBody.addEventListener("click", deleteTodo);
}

// Todo Ekleme
function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    console.log("Bir Todo Girin");
  } else {
    addTodoToUI(newTodo);
    console.log("Todo Girişi Başarılı");
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

function clearAllTodos() {
  // todoList.innerHTML = "";
  while (todoList.firstChild != null) {
    todoList.removeChild(todoList.firstChild); // Daha hızlı çalışacak
  }
}

function deleteTodo(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    console.log("todo başarıyla silindi");
  }
}
