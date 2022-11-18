//let value;

// html içerisine eleman ekleme
//const newButton = document.createElement("a");
//value = document.getElementsByClassName("card-body")[1];

/* newButton.id = "clear-todos";
newButton.className = "btn btn-danger";
newButton.href = "#"; */

//const text = document.createTextNode("Ödevi bitir");
/* newButton.appendChild(text);

value.appendChild(newButton); */

// silme
ul = document.querySelector(".list-group");
//value.remove();

// Class ekleme ve Silme
//value = document.getElementById("todo");
// value.classList.add("Deneme");
// value.classList.remove("form-control");
//value.setAttribute("placeholder", "Todo Gir");
//value.removeAttribute("placeholder");

// DOM Eventleri

const filterInput = document.getElementById("filter");

/* filterInput.onfocus = function () {
  console.log("Focus olduk");
}; */

/* filterInput.addEventListener("focus", function (e) {
  console.log(e.target.placeholder);
  e.target.placeholder = "Todo Yazın";
}); */

const todoAdd = document.getElementById("todo-add");
let todoin = document.getElementById("todo");
todoAdd.addEventListener("click", addNewTodo);

function addNewTodo(e) {
  //console.log("Submit oldu");
  let newTodo = [
    document.createElement("li"),
    document.createElement("a"),
    document.createElement("i"),
  ];

  newTodo[2].classList.add("fa", "fa-remove");
  newTodo[1].classList.add("delete-item");
  newTodo[1].href = "#";
  newTodo[1].appendChild(newTodo[2]);
  newTodo[0].classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between"
  );
  newTodo[0].appendChild(newTodo[1]);
  const newTodoText = document.createTextNode(todoin.value);
  newTodo[2].appendChild(newTodoText);
  ul.appendChild(newTodo[0]).appendChild(newTodoText);
  newTodo[0].appendChild(newTodo[1]).appendChild(newTodo[2]);
  deleteItem();
  e.preventDefault();
}

// To-do listleri tek tek silmeyi aşağıdaki kod ile yaptım.
function deleteItem() {
  const todoList = document.querySelectorAll(".list-group-item");
  for (let i = 0; i < todoList.length; i++) {
    todoList[i].addEventListener("click", clearItemsFunc);
    function clearItemsFunc() {
      todoList[i].innerHTML = "";
      //todoList.previousElementSibling.innerHTML = "";
      console.log(`To-do temizlendi`);
    }
  }
}

ul = document.querySelector(".list-group");
const clearTodos = document.getElementById("clear-todos"); // Tüm taskları temizleyin butonuna basınca hepsini temizliyor.
clearTodos.addEventListener("click", clearTodosFunc);
function clearTodosFunc() {
  ul.innerHTML = "";
}

//todoList.previousElementSibling.addEventListener("click", clearTodosFunc);

//console.log(clearTodos);

filterInput.addEventListener("keyup", filterTodos);
/* function filterTodo(e) {
  console.log(e.target.value);
} */

// dblclick mousedown mouseup paste copy blur cut

//const todoButton = document.getElementById("clear-todos");

/* todoButton.addEventListener("mouseover", function (e) {
  e.target.style.backgroundColor = "green";
  e.target.style.borderColor = "green";
});
todoButton.addEventListener("mouseleave", function (e) {
  e.target.style.backgroundColor = "red";
  e.target.style.borderColor = "red";

  //console.log(e.target.parentElement);
  //console.log(e.target.previousElementSibling);
}); */

/* const listItem = document.querySelectorAll(".list-group-item")[3];

console.log(listItem.previousElementSibling); */

// Seçtiğim bir elementin

//console.log(listItem);

function filterTodos(e) {
  const filterValue = e.target.value.toLowerCase();
  const listItem = document.querySelectorAll(".list-group-item");
  listItem.forEach(function (listItem) {
    const text = listItem.textContent.toLocaleLowerCase();
    if (text.indexOf(filterValue) === -1) {
      listItem.appendChild(message);
      console.log(listItem);
    } else {
      listItem.setAttribute("style", "display:block; background-color: red;");
    }
  });
}

function Alert(e) {
  const message = document.createElement("div");
  e.message.classList.add("alert", "alert-danger", "alert-success");
  console.log(message);
  //return message;
}

Alert();
