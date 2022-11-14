let value;

// html içerisine eleman ekleme
// const newButton = document.createElement("a");
// value = document.getElementsByClassName("card-body")[1];

// newButton.id = "clear-todos";
// newButton.className = "btn btn-danger";
// newButton.href = "#";

// const text = document.createTextNode("Clear All");
// newButton.appendChild(text);

// value.appendChild(newButton);

// silme
// value = document.querySelector(".list-group-item");
// value.remove();

// Class ekleme ve Silme
// value = document.getElementById("todo");
// value.classList.add("Deneme");
// value.classList.remove("form-control");
// value.setAttribute("placeholder", "Todo Gir");
// value.removeAttribute("placeholder");

// DOM Eventleri

// const filterInput = document.getElementById("filter");

// filtetInput.onfocus = function () {
//   console.log("Focus olduk");
// };

// filterInput.addEventListener("focus", function (e) {
//   console.log(e.target.placeholder);
//   e.target.placeholder = "Todo Yazın";
// });

// const todoForm = document.getElementById("todo-form");
// todoForm.addEventListener("submit", submitForm);

// function submitForm(e) {
//   console.log("Submit oldu");
//   e.preventDefault();
// }

// const todoList = document.querySelector(".list-group");
// const clearTodos = document.getElementById("clear-todos");
// clearTodos.addEventListener("click", clearTodosFunc);

// function clearTodosFunc() {
//   todoList.innerHTML = "";
//   console.log("Hepsi Temizlendi");
// }
// console.log(todoList);

// filterInput.addEventListener("keyup", filterTodo);
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

// const listItem = document.querySelectorAll(".list-group-item")[3];

// console.log(listItem.previousElementSibling);

// Seçtiğim bir elementin

// console.log(value);

// Denemelerim

// element oluşturup ekleme

// let value;

// const newButton = document.createElement("a");
// value = document.getElementsByClassName("card-body")[1];

// newButton.id = "clear-todos";
// newButton.className = "btn btn-danger";
// newButton.href = "#";

// const text = document.createTextNode("Clear All");
// newButton.appendChild(text);

// value.appendChild(newButton);

// console.log(value);

// silme

// let valueremove;

// valueremove = document.querySelector(".list-group-item"); 
// valueremove.remove();
// console.log(valueremove);

// class ekleme silme düzenleme attribute

// let valueclass;

// valueclass = document.getElementById("todo");


// valueclass.classList.add("Deneme");
// valueclass.classList.remove("form-control");
// valueclass.setAttribute("placeholder", "Todo Gir" );
// valueclass.removeAttribute("placeholder");

// console.log(valueclass);

// DOM EVENTS

// const filterInput = document.getElementById("filter");

// filterInput.onfocus = function () {
//     console.log("focus oldu");
// };

// filterInput.addEventListener("focus", function(e){
//     console.log(e.target.placeholder);
//     e.target.placeholder = "Todo Yazın";
// })

// const todoForm = document.getElementById("todo-form");
// todoForm.addEventListener("submit", submitForm);

// function submitForm(e){
//     console.log("Submit oldu");
//     e.preventDefault();
// }

// const todoList = document.querySelector(".list-group-item");
// todoList.addEventListener("click", clearTodosfunc);


// function clearTodosfunc(){
//     todoList.innerHTML = "";
//     console.log("Hepsi Temizlendi");
// }



// console.log(todoList);






// const todosremove1 = document.getElementsByClassName("delete-item")[0];
// const todosremove2 = document.getElementsByClassName("delete-item")[1];
// const todosremove3 = document.getElementsByClassName("delete-item")[2];
// const todosremove4 = document.getElementsByClassName("delete-item")[3];
// const todosremoveall = document.querySelector(".list-group");
// const clearall = document.getElementById("clear-todos");
// clearall.addEventListener("click", clearfunc);


// todosremove1.addEventListener("click", clearfunc1);
// todosremove2.addEventListener("click", clearfunc2);
// todosremove3.addEventListener("click", clearfunc3);
// todosremove4.addEventListener("click", clearfunc4);




// function clearfunc(){
//     todosremoveall.innerHTML = "";
//     console.log("todolar silindi");
// }


// function clearfunc1(){
//     item1= document.querySelectorAll(".list-group-item");
//     item1[0].addEventListener("click", function(){
//         item1[0].remove();
//     })
//     console.log("todo1 silindi");
// }

// function clearfunc2(){
//     item2= document.querySelectorAll(".list-group-item");
//     item2[1].addEventListener("click", function(){
//         item2[1].remove();
//     })
//     console.log("todo2 silindi");
    
// }

// function clearfunc3(){
//     item3= document.querySelectorAll(".list-group-item");
//     item3[2].addEventListener("click", function(){
//         item3[2].remove();
//     })
//     console.log("todo3 silindi");
// }

// function clearfunc4(){
//     item4= document.querySelectorAll(".list-group-item");
//     item4[3].addEventListener("click", function(){
//         item4[3].remove();
//     })
//     console.log("todo4 silindi");
// }
// const filterInput = document.getElementById("filter");
// filterInput.addEventListener("keyUp", filterTodo);
// function filterTodo(e){
//     console.log(e.target.value);
     
// }

// var close = document.getElementsByClassName('close');
// for(var i=0;i<close.length;i++){
//         close[i].onclick = function(){
//         var li = this.parentElement;
//         li.style.display='none';
//     }
// }


// tek tek silme ve tümünü silme

// const removeitemsbypart = document.querySelectorAll(".deleteitem");
// const todolistitem = document.querySelectorAll(".list-group-item");
// const clearall = document.getElementById("clear-todos");







// for (let i = 0; i<removeitemsbypart.length; i++){

    
//     clearall.addEventListener("click", function(){
//         todolistitem[i].remove();
//         console.log("bütün todolar silindi");
//     })
//     removeitemsbypart[i].addEventListener("click", function(){
//         todolistitem[i].remove();
//         console.log("todo",(i+1)+" silindi.");

//     })
// }


// Elemanları seçme

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const clearButton = document.getElementById("clear-todos");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.getElementById("filter");

// Eventler

eventListeners();
function eventListeners(){
  form.addEventListener("submit", addTodo);
  clearButton.addEventListener("click", clearAllTodos);
  secondCardBody.addEventListener("click",deleteTodo);
  filter.addEventListener("keyup",filterTodos);
  document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
}

// Todo Ekleme

function addTodo(e) {
  const newTodo = todoInput.value.trim();
  if (newTodo === "") {
    showAlert("danger", "Lütfen bir todo giriniz.");
  } else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);
    showAlert("success", "Todo başarılı bir şekilde eklendi");
  }
  e.preventDefault();
}

// Todo Ekleme (UI TARAFI)

function addTodoToUI(newTodo) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = "#";
  link.className = "delete-item";
  link.innerHTML = "<i class= 'fa fa-remove'></i>";
  listItem.className="list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todoList.appendChild(listItem);
  todoInput.value = "";

}

// bütün todoları silme

function clearAllTodos() {
  // todoList.innerHTML = "";
  while (todoList.firstChild != null){
    todoList.removeChild(todoList.firstChild); // faster
  }
  localStorage.removeItem("todos");
}

// tek tek todo silme işlemi
function deleteTodo(e) {
  if (e.target.className === 'fa fa-remove') {
    const todo = e.target.parentElement.parentElement;
    todo.remove();
    deletepart(e.target.parentElement.parentElement.textContent);
    showAlert('success', 'Todo başarıyla silindi.');
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

// Alert Func

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `mt-3 alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);

  setTimeout(function(){
    alert.remove();
  }, 2000);
}

// Local storage veri alma

function getTodosFromStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  return todos;
}

// local storage'a veri gönderme 

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

// tek tek silme

function deletepart(dlt) {
  let allTodos = getTodosFromStorage();
  allTodos.forEach(function (anyTodo, i) {
    if (anyTodo === dlt) {
      allTodos.splice(i, 1);
    }
  });
  localStorage.setItem('todos', JSON.stringify(allTodos));
}





