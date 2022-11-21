const ui = new UI();

const clearButton = document.getElementById("clear-todos");

const deleteButton = document.querySelectorAll(".delete-item")

eventListeners();
function eventListeners() {
  clearButton.addEventListener("click", clearAllTodos);
  deleteButton.addEventListener("click", deleteTodo);
}

function deleteTodo(e){
  ui.deleteTodoUI(e.target);
}

function clearAllTodos() {
  if (confirm("Emin misiniz?")) {
    ui.displayMessage("Silme işlemi başarılı", "success");
    ui.clearAllTodosUI();
  }
}


