const toDoAddBtn = document.getElementById("todo-add");
const toDoInput = document.getElementById("todo");
const clearAllToDo = document.getElementById("clear-todos");
const toDoFilter = document.getElementById("filter");
const listGroup = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll[0];
let items;

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
function deleteTaskFromLS(text) {
  items = getItemsFromLS();
  items.forEach(function (item, index) {
    if (item === text) {
      items.splice(index, 1);
    }
  });
  localStorage.setItem("items", JSON.stringify(items));
}

function deleteTask(e) {
  if (e.target.className === "fa fa-remove") {
    e.target.parentElement.parentElement.remove();

    deleteTaskFromLS(e.target.parentElement.parentElement.textContent);
  }
  e.preventDefault();
}

//clear all

function deleteAllTasks(e) {
  listGroup.innerHTML = "";

  e.preventDefault();
}

// //find item
// toDoFilter.addEventListener("keyup", function () {
//   let key = document.querySelector(listGroup);
//   let data = this.value;

//   for (let i = 0; i < listGroup.length; i++) {
//     if (key[i].innerHTML.indexOf(data) > -1) {
//       //-1'den büyükse yani bu harfi içeriyorsa ekranda kalsın
//       key[i].style.display = "";
//     } else {
//       //içermiyorsa gözükmesin
//       key[i].style.display = none;
//     }
//   }
// });
setItemToLS(toDoInput.value);
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

function showAlert(type, message) {
  const alert = document.createElement("div");
  alert.className = `mt-3 alert alert-${type}`;
  alert.textContent = message;
  firstCardBody.appendChild(alert);

  setTimeout(function () {
    alert.remove();
  }, 2000);
}
function loadItems() {
  items = getItemsFromLS();
  items.forEach(function (item) {
    createItem(item);
  });
}

function getItemsFromLS() {
  if (localStorage.getItem("items") === null) {
    items = [];
  } else {
    items = JSON.parse(localStorage.getItem("items"));
  }
  return items;
}
function setItemToLS(text) {
  items = getItemsFromLS();
  items.push(text);
  localStorage.setItem("items", JSON.stringify(items));
}
