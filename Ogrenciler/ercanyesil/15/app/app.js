//All Clear Todo    
const todoList = document.querySelector(".list-group");
const clearTodos = document.getElementById("clear-todos");
clearTodos.addEventListener("click", clearTodosFunc);

function clearTodosFunc() {
   todoList.innerHTML = "";
   console.log("Hepsi Temizlendi");
}

// Filter
const filterInput = document.getElementById("filter");

filterInput.addEventListener("focus", function (e) {
     console.log(e.target.placeholder);
     e.target.placeholder = "Aramak istediğiniz todoyu girin";
});

//create date items
var date = new Date();
var now = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

const listGroupİtem = document.querySelectorAll(".list-group-item");

for (let i = 0; i < listGroupİtem.length; i++) {
  listGroupİtem[i].addEventListener("click", selectClearTodo);
  function selectClearTodo() {
    listGroupİtem[i].remove();
  }
}




function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}


  