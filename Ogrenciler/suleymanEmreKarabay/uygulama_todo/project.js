const clearButton = document.getElementById("clear-todos");
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.getElementById("todo-list");

const ui = new UI();
const storage = new Storage();

eventListeners();
function eventListeners() {
  clearButton.addEventListener("click", clearAllTodos);
  todoForm.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", starterCon);
}

function clearAllTodos() {
  if (confirm("Emin misiniz?")) {
    ui.clearAll();
    ui.displayMessage("Silme işlemi başarılı", "success");
    storage.clearAll();
  }
}

function addTodo(e) {
  const newTodo = todoInput.value.trim();

  if (newTodo == "") {
    ui.displayMessage("İnput Boş olamaz", "danger");
  } else {
    ui.addTodoToUI(newTodo);
    storage.addStorage(newTodo);
    ui.displayMessage("İnput Başarılı eklendi", "success");
  }

  e.preventDefault();
}

function starterCon() {
  let getStorage = storage.getStorage();
  getStorage.forEach((element) => {
    ui.addTodoToUI(element);
  });
}
