// Elemanları Seçme
const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const clearButton = document.getElementById("clear-todos");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.getElementById("filter");

// Eventler
eventListeners();
function eventListeners() {
  form.addEventListener("submit", addTodo);
  clearButton.addEventListener("click", clearAllTodos);
  secondCardBody.addEventListener("click", deleteTodo);
  filter.addEventListener("keyup", filterTodos);
}

// Todo Ekleme
function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    showAlert("danger", "Lütfen bir todo giriniz.");
  } else {
    addTodoToUI(newTodo);
    showAlert("success", "Todo başarılı bir şekilde eklendi.");
  }
  e.preventDefault();
}

// Todo Ekleme (UI Tarafını Oluşturma)
function addTodoToUI(newTodo) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class='fa fa-remove'></i>";
  listItem.className = "list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todoList.appendChild(listItem);
  todoInput.value = "";
}

// ütün todoları silme
function clearAllTodos() {
  // todoList.innerHTML = "";
  while (todoList.firstChild != null) {
    todoList.removeChild(todoList.firstChild); // Daha hızlı çalışacak
  }
}

// Delete Todo (tek tek silme işlemi)
function deleteTodo(e) {
  // console.log(e.target);
  // console.log(e.target.parentElement);
  // console.log(e.target.parentElement.parentElement);
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
    console.log("todo başarıyla silindi");
  }
}

// Filtreleme
function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll(".list-group-item");
  // console.log(listItems);
  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    console.log(text.indexOf(filterValue));
    if (text.indexOf(filterValue) === -1) {
      const alert = document.querySelector(".alert");
      if (!alert) {
        showAlert("warning", "Aradığınız Todo Bulunamadı!");
      }
      listItem.setAttribute("style", "display:none !important");
    } else {// Select DOM Elements.
      const form = document.querySelector('#todo-form');
      const todoInput = document.querySelector('#todo');
      const todoLists = document.querySelector('.list-group');
      const firstCardBody = document.querySelectorAll('.card-body')[0];
      const secondCardBody = document.querySelectorAll('.card-body')[1];
      const clearButton = document.querySelector('#clear-todos');
      const filter = document.querySelector('#filter');
      
      eventListeners();
      function eventListeners() {
        form.addEventListener('submit', addTodo);
        clearButton.addEventListener('click', clearAll);
        secondCardBody.addEventListener('click', deleteTodo);
        filter.addEventListener('keyup', filterTodos);
        document.addEventListener('DOMContentLoaded', starterConditions);
      }
      
      function starterConditions() {
        let starter = getStorage();
        starter.forEach(function (todo) {
          addTodoUI(todo);
        });
      }
      
      function addTodo(e) {
        const newTodo = todoInput.value.trim();
        if (newTodo == '') {
          todoInput.style.border = '2px solid red';
          showAlert('danger', 'Lütfen boş bırakmayınız');
          setTimeout(() => {
            todoInput.style.border = '1px solid rgba(0,0,0,.125)';
          }, 2500);
        } else {
          addTodoUI(newTodo);
          addStorage(newTodo);
          showAlert('success', 'Başarıyla eklendi LS + UI');
        }
        e.preventDefault();
      }
      
      // String değeri arayüze ekleme
      function addTodoUI(todo) {
        const newTodoLi = document.createElement('li');
        newTodoLi.classList.add('list-group-item', 'd-flex', 'justify-content-between');
        // newTodoLi.classname = 'list-group-item d-flex justify-content-between';
      
        const newTodoDeleteBtn = document.createElement('a');
      
        newTodoDeleteBtn.classList.add('delete-item', 'order-last');
        newTodoDeleteBtn.href = '#';
        newTodoDeleteBtn.innerHTML = `<i class='fa fa-remove'></i>`;
      
        newTodoLi.appendChild(newTodoDeleteBtn);
        newTodoLi.appendChild(document.createTextNode(todo));
        todoLists.appendChild(newTodoLi);
        todoInput.value = '';
      }
      
      function addStorage(newTodo) {
        let todos = getStorage();
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos)); // Arrayleri string şeklinde gönderdik.
      }
      // Storage'den tüm todoları almak için kullanılır.
      function getStorage() {
        let todos;
        if (localStorage.getItem('todos') === null) {
          todos = [];
        } else {
          todos = JSON.parse(localStorage.getItem('todos'));
        }
        return todos;
      }
      
      function showAlert(type, message) {
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        firstCardBody.appendChild(alert);
      
        setTimeout(() => {
          alert.remove();
        }, 1500);
      }
      
      function clearAll() {
        while (todoLists.firstChild !== null) {
          todoLists.removeChild(todoLists.firstChild);
        }
        localStorage.removeItem('todos');
      }
      
      function filterTodos(e) {
        const filterValue = e.target.value.toLowerCase();
        const listItems = document.querySelectorAll('.list-group-item');
        // console.log(listItems);
        listItems.forEach(function (listItem) {
          const text = listItem.textContent.toLowerCase();
          if (text.indexOf(filterValue) === -1) {
            // Bulamadı
            listItem.setAttribute('style', 'display:none !important');
          } else {
            listItem.setAttribute('style', 'display:block');
          }
        });
      }
      
      function deleteTodo(e) {
        if (e.target.className === 'fa fa-remove') {
          const todo = e.target.parentElement.parentElement;
          todo.remove();
          deleteStorage(e.target.parentElement.parentElement.textContent);
          showAlert('success', 'Todo başarıyla Local Storageden silindi.');
        }
      }
      
      function deleteStorage(willDeleted) {
        let allTodos = getStorage();
        allTodos.forEach(function (anyTodo, i) {
          if (anyTodo === willDeleted) {
            allTodos.splice(i, 1);
          }
        });
        localStorage.setItem('todos', JSON.stringify(allTodos));
      }
      
      // https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
      
      listItem.setAttribute("style", "display:block");
    }
  });
}

// Alert Metodu
function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `mt-3 alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
}
