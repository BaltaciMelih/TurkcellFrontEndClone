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
const listGroupİtem = document.querySelectorAll(".list-group-item");
for (let i = 0; i < listGroupİtem.length; i++){
    listGroupİtem[i].addEventListener("click", clearListİtem);
    function clearListİtem() {
        listGroupİtem[i].remove();
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
        newLi.classList.add("list-group-item");
        listGroup.appendChild(newLi);
    }
    console.log(todotext);
    
    //li ve listgroup oluşturuldu

    // let newLi = document.createElement("li");
    // newLi.classList.add("list-group-item");
    // newLi.innerText = todoInput.value;
    // listGroup.appendChild("newLi");
    // console.log(newLi);

    // //  a ve delete-item oluşturma
    
    // let newA = document.createElement("a");
    // newA.innerHTML = "<i class='fa fa-remove'></i>"
    // newA.classList.add("delete-item");
    // newLi.appendChild("newA");
        
}

filterInput.addEventListener("input", (e) => {
    const value = e.target.value;
    listGroupİtem.forEach(li => {

        const invisible = li.innerText.toLowerCase().includes(value.toLowerCase());
        li.classList.toggle("d-none", !invisible);
        console.log(li);
        
    })
    
})
