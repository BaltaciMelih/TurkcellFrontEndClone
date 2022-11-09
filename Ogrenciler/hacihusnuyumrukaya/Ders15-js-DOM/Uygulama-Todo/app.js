
//Tüm Taskları Temizleyin Butonu
 const listGroup = document.querySelector(".list-group");
const clearTodos = document.getElementById("clear-todos");
clearTodos.addEventListener("click", clearTodosFunc);
 function clearTodosFunc() {
    listGroup.innerHTML = "";
 }

 //Tek Task Silme 
 function deleteTodo()
 {
  const listItem = document.querySelectorAll(".list-group-item");
    for(let i=0; i<listItem.length; i++)
  { 
      const removeIcon = document.getElementsByTagName("i"); //ikona basıldığında
      removeIcon[i].addEventListener("click", clearTodosFunc);
      function clearTodosFunc() {
      listItem[i].remove();  //bu itemi silmekiçin
      console.log(listItem[i].textContent);
    }
  }
}
deleteTodo();


 //Task Ekleme
  const todoEkle = document.querySelector("#todo-add");
  const todo = document.querySelector("#todo");
  todoEkle.addEventListener("click", yeniTodo);

  function yeniTodo() {
    const liste= document.createElement("li");
    liste.className = "list-group-item d-flex justify-content-between";
    const textTodo = document.createTextNode(todo.value);
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    const Ikon = document.createElement("i");
    Ikon.className = "fa fa-remove";
    todo.value = "";
    listGroup.appendChild(liste).appendChild(textTodo);
    liste.appendChild(link).appendChild(Ikon);
    deleteTodo();
  }


//Filtreleme Kısmı
  const filterInput = document.getElementById("filter");
  filterInput.addEventListener("keyup", filterTodo);
  function filterTodo(e) {
   console.log(e.target.value);
   
 }


//  const todoButtonRenk = document.getElementById("todo-add");
//  todoButtonRenk.addEventListener("mouseover", function (e) {
//     e.target.style.backgroundColor = "blue";
//      e.target.style.borderColor = "blue";
//    });

// let value;

// html içerisine eleman ekleme  Clear All adında buton
//const newButton = document.createElement("a");
// value = document.getElementsByClassName("card-body")[1];

 //newButton.id = "clear-todos";
//newButton.className = "btn btn-danger";
//newButton.href = "#";

 //const text = document.createTextNode("Clear All");
 //newButton.appendChild(text);

 //value.appendChild(newButton);



// silme
// value = document.querySelector(".list-group-item");
 //value.remove();

// Class ekleme ve Silme
//  value = document.getElementById("todo");
//  value.classList.add("Deneme"); //class ekledi ve sildi
// value.classList.remove("form-control");
// value.setAttribute("placeholder", "Todo Gir"); //özelliğini değiştirdi
// value.removeAttribute("placeholder");  //özelliği sildi

// DOM Eventleri

//   const filterInput = document.getElementById("filter");

//  filterInput.onfocus = function () {
//    console.log("Focus olduk");
//  };

// filterInput.addEventListener("focus", function (e) {
//   console.log(e.target.placeholder);
//   e.target.placeholder = "Todo Yazın";
//  });

//  const todoForm = document.getElementById("todo-form");
//   todoForm.addEventListener("submit", submitForm);

//  function submitForm(e) {
//  console.log("Submit oldu");
//  e.preventDefault();
//   }

//  const todoList = document.querySelector(".list-group");
//  const clearTodos = document.getElementById("clear-todos");
//  clearTodos.addEventListener("click", clearTodosFunc);

//  function clearTodosFunc() {
//   todoList.innerHTML = "";
//   console.log("Hepsi Temizlendi");
// }
// console.log(todoList);

//  filterInput.addEventListener("keyup", filterTodo);
// function filterTodo(e) {
//   console.log(e.target.value);
// }

// dblclick mousedown mouseup paste copy blur cut

// const todoButton = document.getElementById("todo-add");

// todoButton.addEventListener("mouseover", function (e) {
//   e.target.style.backgroundColor = "green";
//   e.target.style.borderColor = "green";
// });
// todoButton.addEventListener("mouseleave", function (e) {
//   e.target.style.backgroundColor = "red";
//   e.target.style.borderColor = "red";
//   console.log(e.target.parentElement);
//   console.log(e.target.previousElementSibling);
// });

//  const listItem = document.querySelectorAll(".list-group-item")[3];

// console.log(listItem.previousElementSibling);

// Seçtiğim bir elementin

//  console.log(value);