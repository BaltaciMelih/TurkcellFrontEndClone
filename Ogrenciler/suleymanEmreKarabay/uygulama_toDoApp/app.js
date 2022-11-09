// -let value;

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


const toDoButton = document.querySelector("#todo-add");
const todo_add_input = document.querySelector("#todo");
const ul_element = document.querySelector(".list-group");

const clearAllButton = document.querySelector("#clear-todos");

const deleteItemButton = document.querySelectorAll(".delete-item");

const todo_filter_input = document.querySelector("#filter");


toDoButton.addEventListener("click",todoAdd);

clearAllButton.addEventListener("click",clearAllToDo);

for (let i = 0; i < deleteItemButton.length; i++) {
    deleteItemButton[i].addEventListener("click", deleteItemTodo)
}

todo_filter_input.addEventListener("focus", filter);


function todoAdd(){
    const add_i_element = document.createElement("i");
    add_i_element.className = "fa fa-remove";

    const add_a_element = document.createElement("a");
    add_a_element.className = "delete-item";
    add_a_element.href = "#";

    add_a_element.appendChild(add_i_element);

    const add_li_element = document.createElement("li");
    add_li_element.className = "list-group-item d-flex justify-content-between";

    const todo_add_text = document.createTextNode(todo_add_input.value);

    add_li_element.appendChild(todo_add_text);
    add_li_element.appendChild(add_a_element);

    ul_element.appendChild(add_li_element);
}

function clearAllToDo(){
    const li_element = document.querySelectorAll(".list-group-item");

    for(let i = 0; i < Number(li_element.length);i++){
        li_element[i].remove();
    }
}

function deleteItemTodo(e){
    const delete_li_element = e.target.parentElement.parentElement;
    console.log(delete_li_element);
    delete_li_element.remove();
}

function filter(){
    

    todo_filter_input.addEventListener("keyup", function(){
        const li_item_text = document.querySelectorAll(".list-group-item");

        
        while(todo_filter_input.value.length > 0){
            for(let i = 0; i < todo_filter_input.value.length;i++){
                if(li_item_text[i].innerText == todo_filter_input.value[i]){
                    li_item_text[i].style.display = "";
                }else{
                    li_item_text[i].style.display = "none";
                }
            }
            break;
        }
    });
    
}

