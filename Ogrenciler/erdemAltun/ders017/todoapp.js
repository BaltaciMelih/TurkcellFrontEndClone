// todo inputunu focus yapılması
const todoInput = document.getElementById("todo");

todoInput.onfocus = function () {
console.log("Focus olduk");
};

// filter inputunu focus yapılması
const filterInput = document.getElementById("filter");

filterInput.onfocus = function () {
 console.log("Focus olduk");
};

// todoform submit yapma
const todoForm = document.getElementById("todo-form");
todoForm.addEventListener("submit", submitForm);

function submitForm(e) {
  console.log("Submit oldu");
  e.preventDefault();// sayfa yenileme yapmaz
};

// butonların over ve leavelerinde renk değiştirmesi
const todoButton = document.getElementById("todo-add");

todoButton.addEventListener("mouseover", function (e) {
e.target.style.backgroundColor = "yellow";
    e.target.style.borderColor = "yellow";
});
todoButton.addEventListener("mouseleave", function (e) {
    e.target.style.backgroundColor = "blue";
    e.target.style.borderColor = "blue";
})

const todoClearButton = document.getElementById("clear-todos");
todoClearButton.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "yellow";
    e.target.style.borderColor = "yellow";
});
todoClearButton.addEventListener("mouseleave", function (e) {
    e.target.style.backgroundColor = "blue";
    e.target.syle.borderColor = "blue";
});

// Tüm markaların temizlenmesi işlemi
const todoList = document.querySelector(".list-group");
const clearTodos = document.getElementById("clear-todos");
clearTodos.addEventListener("click", clearTodosFunc);

 function clearTodosFunc() {
 todoList.innerHTML = "";
console.log("Tüm todolar silindi");
}


const carList = document.querySelector("car-list");

// Markaların tek tek silme işlemi 
// const listGroupİtem = document.querySelectorAll(".list-group-item");
// for (let i = 0; i < listGroupİtem.length; i++){
//    listGroupİtem[i].addEventListener("click", clearListİtem);
//    function clearListİtem() {
//       listGroupİtem[i].remove();
//    }
// } 

const deleteItems = document.getElementsByClassName("delete-item");
deleteItemLoop();
function deleteItemLoop() {
  for (let i = 0; i < deleteItems.length; i++) {
    function deleteItem() {
      deleteItems[i].parentElement.className = "d-none";
    }
    deleteItems[i].addEventListener("click", deleteItem);
  }
}


// Marka ekleme butonuna bastığında marka ekleme bakılacak
const listGroup = document.querySelector(".list-group");

todoButton.addEventListener("click", (e) => {
    e.preventDefault();
    addTodo();
});
function addTodo(todo) {
    let todotext = todoInput.value;
    if (todo) {
        todotext = todo.text;
    }
    if (todotext) {
        const newLi = document.createElement("li");
        newLi.innerText = todotext;
        newLi.classList.add("list-group-item", "d-flex", "justify-content-between");
        listGroup.appendChild(newLi);
        let newA = document.createElement("a");
        newA.innerHTML = "<i class='fa fa-remove'></i>";
        newA.classList.add("delete-item");
        newLi.appendChild(newA);

        deleteItemLoop();
    }
    console.log(todotext);
    
}



filterInput.addEventListener("input", (e) => {
const value = e.target.value;
const childCount = listGroup.childElementCount;

const items = listGroup.getElementsByTagName("li");
console.log(items);
for (const i in [...Array(childCount).keys()]) {
const item = items[i];
const invisible = item.innerText
.toLowerCase()
.includes(value.toLowerCase());
item.classList.toggle("d-none", !invisible);
}
}); 
