function UI() {}

UI.prototype.addTodoToUI = function (newtodo) {
  const todoList = document.getElementById("todo-list");
  console.log(todoList);
  todoList.innerHTML += `
  <li>
    <p>${newtodo}</p>
  </li>
  `;
};

UI.prototype.clearInput = function (e) {
  e.value = "";
};

UI.prototype.displayMessage = function (message, type) {
  const cardBody = document.querySelector(".card-body");
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  cardBody.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 2000);
};

UI.prototype.clearAllTodos = function () {
  if (confirm("Emin misiniz?")) {
    while (todoList.firstChild != null) {
      todoList.removeChild(todoList.firstChild); // Daha hızlı çalışacak
    }
    ui.displayMessage("Silme işlemi başarılı", "success");
  }
};

UI.prototype.add = function (e) {
  e.preventDefault();
  const todoInput = document.getElementById("todo");
  const newtodo = todoInput.value.trim();
  if (newtodo === "") {
    ui.displayMessage("eksik giriş", "danger");
  } else {
    ui.addTodoToUI(newtodo);
    ui.displayMessage("basarılı giriş", "success");
  }
};
