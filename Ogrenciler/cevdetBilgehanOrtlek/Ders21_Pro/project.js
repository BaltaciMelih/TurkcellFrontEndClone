const ui = new UI();

const clearButton = document.getElementById("clear-todos");
const filter = document.getElementById("filter");

eventListeners();
function eventListeners() {
  clearButton.addEventListener("click", clearAllTodos);
  filter.addEventListener("keyup", filterTodos);
}

function clearAllTodos() {
  if (confirm("Emin misiniz?")) {
    ui.displayMessage("Silme işlemi başarılı", "success");
  }
}
