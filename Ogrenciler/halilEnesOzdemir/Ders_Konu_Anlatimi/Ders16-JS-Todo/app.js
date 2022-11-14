// Elemanları Seçme
const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo');
const todoList = document.querySelector('.list-group');
const clearButton = document.getElementById('clear-todos');
const firstCardBody = document.querySelectorAll('.card-body')[0];
const secondCardBody = document.querySelectorAll('.card-body')[1];
const filter = document.getElementById('filter');

// Eventler
eventListeners();
function eventListeners() {
  form.addEventListener('submit', addTodo);
  clearButton.addEventListener('click', clearAllTodos);
  secondCardBody.addEventListener('click', deleteTodo);
  filter.addEventListener('keyup', filterTodos);
}

// Todo Ekleme
function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === '') {
    showAlert('danger', 'Lütfen Bir Todo Giriniz.');
  } else {
    addTodoToUI(newTodo);
    showAlert('success', 'Todo Başarılı bir şekilde eklendi.');
  }
  e.preventDefault();
}

// Todo Ekleme (UI Tarafını Oluşturma)
function addTodoToUI(newTodo) {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = '#';
  link.className = 'delete-item';
  link.innerHTML = "<i class='fa fa-remove'></i>";
  listItem.className = 'list-group-item d-flex justify-content-between';
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todoList.appendChild(listItem);
  todoInput.value = '';
}

function clearAllTodos() {
  // todoList.innerHTML = "";
  while (todoList.firstChild != null) {
    todoList.removeChild(todoList.firstChild); // Daha hızlı çalışacak
  }
}

function deleteTodo(e) {
  console.log(e.target);
  console.log(e.target.parentElement);
  console.log(e.target.parentElement.parentElement);
  if (e.target.className === 'fa fa-remove') {
    e.target.parentElement.parentElement.remove();
    showAlert('success', 'Todo Başarıyla silindi.');
  }
}

function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItems = document.querySelectorAll('.list-group-item');

  listItems.forEach(function (listItem) {
    const text = listItem.textContent.toLowerCase();
    if (text.indexOf(filterValue) === -1) {
      showAlert('danger', 'Todo bulunamadı.');

      listItem.setAttribute('style', 'display:none !important');
    } else {
      listItem.setAttribute('style', 'display:block');
    }
  });
}

function showAlert(type, message) {
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);

  setTimeout(() => {
    alert.remove();
  }, 2000);
}
