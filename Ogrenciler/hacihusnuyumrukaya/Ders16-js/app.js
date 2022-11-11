//Elemanları Seçme
const form=document.getElementById("todo-form");
const todoInput=document.getElementById("todo");
const todoList=document.querySelector(".list-group");
const clearButton=document.getElementById("clear-todos");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.getElementById("filter");

//Eventler
eventListeners();
function eventListeners(){
  form.addEventListener("submit",addTodo);
  clearButton.addEventListener("click",clearAllTodos);
  secondCardBody.addEventListener("click",deleteTodo);
  filter.addEventListener("keyup",filterTodos);
}

//Alert
function alerts(name,color)
{
 const alertDiv=document.createElement("div");
 alertDiv.className=`alert alert-${color}`;
 alertDiv.textContent=`${name}`;
 firstCardBody.appendChild(alertDiv);

 setTimeout(function () {
  alertDiv.remove();
}, 2000);
}
//todo ekleme
function addTodo(e){
  const newTodo= todoInput.value.trim();
  if(newTodo=="") //yeni bir todo girilip submitlendiyse
  {
    alerts("Lütfen bir todo giriniz.","danger");
  }
  else
  {
  addTodoToUI(newTodo);
  alerts("Todo başarılı bir şekilde eklendi.","success");
  }
  e.preventDefault();
}

///todo ekleme uı 
function addTodoToUI(newTodo){
  const listItem=document.createElement("li");
  const link=document.createElement("a");
  link.href="#";
  link.className="delete-item";
  link.innerHTML="<i class='fa fa-remove'></i>";
  listItem.className="list-group-item d-flex justify-content-between";
  listItem.appendChild(document.createTextNode(newTodo));
  listItem.appendChild(link);
  todoList.append(listItem);
  todoInput.value="";
}


//hepsini silme
function clearAllTodos(){
  // todoList.innerHTML="";
  while(todoList.firstChild!=null){todoList.removeChild(todoList.firstChild);}  //daha performanslı
}

//tek tek silme
function deleteTodo(e){
  // console.log(e.target);
  // console.log(e.target.parentElement);
  // console.log(e.target.parentElement.parentElement);
  if(e.target.className=="fa fa-remove")
  {
    e.target.parentElement.parentElement.remove();
    console.log("Todo başarıyla silindi.");
  }
}


//filtreleme
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
        alerts("Aradığınız Todo Bulunamadı!","warning");
      }
      listItem.setAttribute("style", "display:none !important");
    } else {
      listItem.setAttribute("style", "display:block");
    }
  });
}

// Local Storage e  String Kaydetme
// localStorage.setItem("Key","İçerik");
// const value=localStorage.getItem("Key");
// console.log(value);
//  localStorage.clear();

//  Local Storage e  Array Kaydetme
//  const todosSample=["Todo 1","Todo 2","Todo 3","Todo 4"];
//  localStorage.setItem("Todolar",JSON.stringify(todosSample));
//  const sampleTodo=JSON.parse(localStorage.getItem("Todolar"));
//  console.log(sampleTodo); 