const ui = new UI();

const clearButton = document.getElementById("clear-todos");

eventListeners();
function eventListeners() {
  clearButton.addEventListener("click", clearAllTodos);
}

function clearAllTodos() {
  if (confirm("Emin misiniz?")) {
    ui.displayMessage("Silme işlemi başarılı", "success");
  }
}
