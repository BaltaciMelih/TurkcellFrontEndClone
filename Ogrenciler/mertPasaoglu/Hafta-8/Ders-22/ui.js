function UI() {}

UI.prototype.addTodoToUI = function (newTodo) {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML += `
  <li>
    <p>${newTodo}</p>
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

UI.prototype.deleteTodoUI = function (deleteButton) {
deleteButton.parentElement.parentElement.remove();
};

UI.prototype.clearAllTodosUI = () => {
  const todoList = document.getElementById("todo-list");
  while(todoList.firstChild != null){
    todoList.removeChild(todoList.firstChild); 
  }
};
