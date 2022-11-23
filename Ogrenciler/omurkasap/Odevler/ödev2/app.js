const name = document.querySelector("#name")
const director = document.querySelector("#director")
const img = document.querySelector("#img")
const date = document.querySelector("#date")
const btn = document.querySelector("#btnCreate")

var list = document.querySelector("#Movies");

btn.addEventListener("click",movieAdd)
function movieAdd() {
    let name = name.value;
    let director = director.value;
    let img = img.value;
    let date = date.value;
    createItem(name,director,img,date)
}

 
// list.addEventListener("click", function(item){
//     if(item.target.tagName="li") {
//         item.target.classList.toggle("checked"); 
//         ToggleDeleteButton();
//     }

    //Ekleyince liste gidiyor!!!
    // function ToggleDeleteButton() {
    // var checklist = document.querySelectorAll(".checked")
    // if(checklist.length>0){
    //     document.querySelector(#deleteAll).classList.remove("d-none");
    // }
    // }
// }) 

// document.querySelector("#btnCreate").onclick=function(){
//     const name = name.value.trim();
//     const director = director.value.trim();
//     const img = img.value.trim();
//     const date = date.value.trim();
//     createItem(name,director,img,date)
// }

function createItem(name, director, img, date){
    let table = document.createElement("table");
    table.className= "table";
    table.innerHTML = `<thead>
    <tr>
      <th scope="col">İMG</th>
      <th scope="col">NAME</th>
      <th scope="col">DIRECTOR</th>
      <th scope="col">DATE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td><img class="img-fluid" src="${img}" alt=""></td>
      <td>${name}</td>
      <td>${director}</td>
      <td>${date}</td>
    </tr>
   
  </tbody>`
   
  list.appendChild(table);
   
    // var t = document.createTextNode(item)
    // li.className="list-group-item"
    // li.appendChild(t);
    // list.appendChild(li);

    // var span = document.createElement("span");
    // var text = document.createTextNode("\u00D7");
    // span.className = "close";
    // span.style.cursor = "pointer";
    // span.appendChild(text);
    // li.appendChild(span);

    // span.onclick = function(){
    //     var li = this.parentElement;
    //     li.style.display="none"; 
    //     li.classList.remove("checked")
    // }

}