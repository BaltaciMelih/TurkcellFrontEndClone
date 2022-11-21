function Storage() {}

Storage.prototype.addStorage = function (newTodo) {
  let todos = this.getStorage();
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

Storage.prototype.getStorage = function () {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
};

Storage.prototype.clearAll = function () {
  localStorage.removeItem("todos");
};
