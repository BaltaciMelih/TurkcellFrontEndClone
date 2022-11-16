// Local Storage'e String Kaydetme
// localStorage.setItem("Key", "İçerik");
// const value = localStorage.getItem("Key");
// console.log(value);
// localStorage.clear();

// Local Storage'e Array Kaydetme
// const todosSample = ["Todo 1", "Todo 2", "Todo 3", "Todo 4"];
// localStorage.setItem("todolar", JSON.stringify(todosSample)); // "['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4']"
// const sampleTodos = JSON.parse(localStorage.getItem("todolar")); // ['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4']
// console.log(sampleTodos);

// getTodosFromStorage
// addTodoToStorage
// loadAllTodos

// Local Storage'dan veri alma - Veri varsa o veri gelir yoksa boş array gelir.
function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
  }
  
  // Local Storage'a veri gönderme - Önce storage'daki verileri alıp sonra üzerine ekleme yapıp tekrar gönderdik.
  function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function (todo) {
      addTodoToUI(todo);
    });
  }

  
  // Tek tek silme tarafı ödev