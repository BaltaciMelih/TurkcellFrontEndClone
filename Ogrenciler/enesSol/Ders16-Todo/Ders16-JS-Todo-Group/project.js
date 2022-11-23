const ui = new UI();

const clearButton = document.getElementById("clear-todos");
const todoList = document.querySelector(".list-group");
const form = document.getElementById("todo-form");
console.log(form);

eventListeners();
function eventListeners() {
  clearButton.addEventListener("click", ui.clearAllTodos);
  form.addEventListener("submit", ui.add);
}




