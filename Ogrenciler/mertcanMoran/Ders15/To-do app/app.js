let value;

// html içerisine eleman ekleme
//const newButton = document.createElement("a");
//value = document.getElementsByClassName("card-body")[1];

/* newButton.id = "clear-todos";
newButton.className = "btn btn-danger";
newButton.href = "#"; */

/* const text = document.createTextNode("Clear All");
newButton.appendChild(text);

value.appendChild(newButton); */

// silme
//value = document.querySelector(".list-group");
//value.remove();

// Class ekleme ve Silme
//value = document.getElementById("todo");
// value.classList.add("Deneme");
// value.classList.remove("form-control");
//value.setAttribute("placeholder", "Todo Gir");
//value.removeAttribute("placeholder");

// DOM Eventleri

//const filterInput = document.getElementById("filter");

/* filterInput.onfocus = function () {
  console.log("Focus olduk");
}; */

/* filterInput.addEventListener("focus", function (e) {
  console.log(e.target.placeholder);
  e.target.placeholder = "Todo Yazın";
}); */

const todoForm = document.getElementById("todo-form"); // Bu önemli todo ekleye basınca submit olduğunu anlayabiliyoruz.
let newTodo = document.querySelector(".list-group-item");
todoForm.addEventListener("submit", submitForm);

function submitForm() {
  console.log("Submit oldu");
  newTodo.append.innerHTML = "ödevi bitir";
  //e.preventDefault();
}

// To-do listleri tek tek silmeyi aşağıdaki kod ile yaptım.
const todoList = document.querySelectorAll(".list-group-item");
for (let i = 0; i < todoList.length; i++) {
  todoList[i].addEventListener("click", clearItemsFunc);
  function clearItemsFunc() {
    todoList[i].innerHTML = "";
    //todoList.previousElementSibling.innerHTML = "";

    console.log(`To-do ${todoList[i]} temizlendi`);
  }
}

value = document.querySelector(".list-group");
const clearTodos = document.getElementById("clear-todos"); // Tüm taskları temizleyin butonuna basınca hepsini temizliyor.
clearTodos.addEventListener("click", clearTodosFunc);
function clearTodosFunc() {
  value.innerHTML = "";
}

//todoList.previousElementSibling.addEventListener("click", clearTodosFunc);

console.log(clearTodos);

/* filterInput.addEventListener("keyup", filterTodo);
function filterTodo(e) {
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
