const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
const todoList = document.querySelector(".list-group");
const clearButton= document.getElementById("clear-todos");
const firstCardBody= document.querySelectorAll(".card-body")[0];
const secondCardBody= document.querySelectorAll(".card-body") [1];


eventListeners();
function eventListeners(){
    form.addEventListener("submit", addTodo);
    clearButton.addEventListener("click", clearAllTodos);
    secondCardBody.addEventListener("click", deleteTodo);
}


//todo ekleme 
function addTodo(e){
    const newTodo = todoInput.ariaValueMax.trim();
    if(newTodo === ""){
        alert("bir todo ekleyin.")
    }


}

function addTodoToUI (newTodo ){
    const listItem = document.createElement("Li");
    const Link = document.createElement("a");
    Link.href="#";
    Link.className="delete-item";
    
}