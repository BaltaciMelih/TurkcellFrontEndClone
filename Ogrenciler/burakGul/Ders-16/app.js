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
    newlocalStorage (newTodo);
    showAlert("success", "Todo başarılı bir şekilde eklendi.");
  }
  e.preventDefault();
 
  
}

// Todo Ekleme (UI Tarafını Oluşturma)
function addTodoToUI(newTodo) {
  // newlocalStorage (newTodo);
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
  // localStorage.setItem ("todo",JSON.stringify(newTodo));
  // const sample = JSON.parse(localStorage.getItem("todo"));
  // console.log(sample);
}

function newlocalStorage (newTodo){
let sample;
if (localStorage.getItem("sample") != null ) {
  localStorage.setItem ("newTodo",JSON.stringify(newTodo));
  sample.push(newTodo) ;
  
} else {
  sample = [""];
  localStorage.setItem ("newTodo",JSON.stringify(newTodo));
  sample.push(newTodo) ;
  
}

console.log(sample);};

// function newlocalStorage (newTodo){const random= JSON.parse(localStorage.getItem("newTodo"))  
// };






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
    } else {
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
// localStorage.setItem("Key" ,"İçerik");

// const value = localStorage.getItem ("Key");

// console.log(value);

// localStorage.clear();

// const todoSample = ["Todo 1","Todo 2","Todo 3","Todo 4"];

// localStorage.setItem("todolar", JSON.stringify(todoSample));

// const sampleTodo = JSON.parse(localStorage.getItem(todolar));

// console.log(sampleTodos);


