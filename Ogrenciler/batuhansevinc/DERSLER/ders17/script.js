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

// localStorage.setItem("Key","İçerik");

// const value=localStorage.getItem("Key");

// console.log(value);

// localStorage.clear();


// const todosSample = ["Todo 1","Todo 2", "Todo 3","Todo 4"];

// localStorage.setItem("Todolar", JSON.stringify(todosSample));

// const sampleTodos = JSON.parse(localStorage.getItem("Todolar"));

// console.log(typeof sampleTodos);

// getTodosFromStorage = local storage'dan todo varsa alıp bana getirecek
// addTodoToStorage = yeni eklediğim todoları local storage'e de ekleyecek

// loadAllTodos = local storage 'da todo var mı diye bakacak varsa onları ekrana yazdıracak addtodotouı

// // LOCAL STORAGE VERİ ALMA
// const todosSet = ["Todo 1","Todo 2","Todo 3","Todo 4"];
// localStorage.setItem("Todos", JSON.stringify(todosSet));
// // LOCAL STORAGE VERİ YAZMA
// const todosGet = JSON.parse(localStorage.getItem("Todos"));
// console.log(todosGet);

const getTodosFromStorage = document.querySelector("list-group");

let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

localStorage.setItem("items",JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

const newLi = (text) => {
    const li = document.createElement("li");
    li.textContent= text;
    ul.appendChild(li);
}

