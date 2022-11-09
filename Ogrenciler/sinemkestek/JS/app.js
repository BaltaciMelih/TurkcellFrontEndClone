const toDoAddBtn = document.getElementById("todo-add");
const toDoInput = document.getElementById("todo");
const clearAllToDo = document.getElementById("clear-todos");
const toDoFilter = document.getElementById("filter");
const listGroup = document.querySelector(".list-group");

toDoAddBtn.addEventListener("click", addTodo);
listGroup.addEventListener("click", deleteTask);
clearAllToDo.addEventListener("click", deleteAllTasks);

//add
function addTodo(event) {
  if (toDoInput.value == "") alert("Please enter a mission");
  else {
    var li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.appendChild(document.createTextNode(toDoInput.value));
    const a = document.createElement("a");
    a.classList = "delete-item";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fa fa-remove"></i>';
    console.log(li);
    li.appendChild(a);
    listGroup.appendChild(li);
    toDoInput.value = "";

    event.preventDefault();
  }
}

//clear

function deleteTask(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();
  }
  e.preventDefault();
}

//clear all

function deleteAllTasks(e) {
  listGroup.innerHTML = "";

  e.preventDefault();
}

//find item
toDoFilter.addEventListener("keyup", function () {
  let key = document.querySelector(listGroup);
  let data = this.value;

  for (let i = 0; i < listGroup.length; i++) {
    if (key[i].innerHTML.indexOf(data) > -1) {
      //-1'den büyükse yani bu harfi içeriyorsa ekranda kalsın
      key[i].style.display = "";
    } else {
      //içermiyorsa gözükmesin
      key[i].style.display = none;
    }
  }
});
