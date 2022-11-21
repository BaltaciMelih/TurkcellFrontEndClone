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

let a = setInterval(function () {
  console.log("Deneme");
}, 2000);

console.log(typeof a);
