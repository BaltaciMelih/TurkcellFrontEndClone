// Select All Elements
const form = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo');
const todoList = document.querySelector('.list-group');
const cardBodyFirst = document.querySelectorAll('.card-body')[0];
const cardBodySecond = document.querySelectorAll('.card-body')[1];
const cardRow = document.querySelector('.card');
const cardContainer = document.querySelector('.container');
const allTodos = document.querySelector('.todo-lists');
// console.log(cardBodyFirst);
const filter = document.querySelector('#filter');
const clearAll = document.querySelector('#clear-todos');

let deleteBtns;
let editBtns;

const addLocalTodos = function (todo) {
  const newTodoUl = document.createElement('ul');
  newTodoUl.classList.add('list-group');

  const newTodoLi = document.createElement('li');
  newTodoLi.classList.add('list-group-item', 'd-flex', 'justify-content-between');

  const newTodoText = document.createElement('span');
  newTodoText.classList.add('list-group-item-text');
  newTodoLi.textContent = todo.text;

  newTodoUl.appendChild(newTodoLi);

  const newTodoDiv = document.createElement('div');
  newTodoDiv.classList.add('list-group-icons', 'd-flex', 'gap-2', 'justify-content-center', 'align-items-center');

  newTodoLi.appendChild(newTodoDiv);

  const newTodoDeleteBtn = document.createElement('button');
  newTodoDeleteBtn.classList.add('delete-item', 'order-last');

  const newTodoDeleteIcon = document.createElement('i');
  newTodoDeleteIcon.classList.add('fa', 'fa-remove');

  newTodoDeleteBtn.appendChild(newTodoDeleteIcon);

  const newTodoEditBtn = document.createElement('button');
  newTodoEditBtn.classList.add('edit-item');

  const newTodoEditIcon = document.createElement('i');
  newTodoEditIcon.classList.add('fa', 'fa-edit');

  newTodoEditBtn.appendChild(newTodoEditIcon);

  newTodoDiv.appendChild(newTodoDeleteBtn);
  newTodoDiv.appendChild(newTodoEditBtn);

  allTodos.appendChild(newTodoUl);
};

// Event Listeners

const starterConditions = () => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  if (!todos) {
    localStorage.setItem('todos', JSON.stringify([]));
  } else {
    todos.forEach((todo) => addLocalTodos(todo));

    deleteBtns = document.querySelectorAll('.delete-item');
    console.log(deleteBtns);

    editBtns = document.querySelectorAll('.edit-item');
    console.log(editBtns);
  }
};

starterConditions();

const addToDo = (e) => {
  e.preventDefault();

  const todoText = todoInput.value;

  const todo = {
    text: todoText,
  };

  const todos = JSON.parse(localStorage.getItem('todos'));
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
  console.log(todos);

  addLocalTodos(todo);
  form.reset;
};

const deleteTodo = (e) => {
  const todo = e.target.parentElement.parentElement;
  const text = todo.innerHTML;
  console.log(text);

  let todos = JSON.parse(localStorage.getItem('todos'));
  todos = todos.filter((tdName) => tdName.text != text);
  localStorage.setItem('todos', JSON.stringify(todos));
  todo.remove();
};

const editTodo = (e) => {
  const todo = e.target.parentElement.parentElement;
  const text = todo.innerHTML;

  let todos = JSON.parse(localStorage.getItem('todos'));
  todos = todos.filter((tdName) => tdName.text != text);
  localStorage.setItem('todos', JSON.stringify(todos));
  todo.remove();

  input.value;
};

form.addEventListener('submit', addToDo);
deleteBtns.forEach((btn) => addEventListener('click', deleteTodo));
editBtns.forEach((btn) => btn.addEventListener('click', editTodo));
