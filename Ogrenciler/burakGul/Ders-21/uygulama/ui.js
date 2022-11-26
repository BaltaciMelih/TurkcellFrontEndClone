class UI {
  static addTodoToUI(newTodo) {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML += `
  <li>
    <p>${newTodo}</p>
  </li>
  `;
  }

  static clearInput(e) {
    e.value = "";
  }

  static displayMessage(message, type) {
    const cardBody = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function () {
      div.remove();
    }, 2000);
  }
}
