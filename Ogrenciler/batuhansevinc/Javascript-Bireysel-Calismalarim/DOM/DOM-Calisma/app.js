// let sonuc;

// sonuc = document.getElementById("title");
// sonuc = document.getElementById("title").id;
// sonuc = document.getElementById("title").className;
// sonuc = document.getElementById("title").classList;

// document.getElementById("title").style.fontSize = "30px";
// document.getElementById("title").innerText = "Todosss";
// document.getElementById("title").innerHTML = "<h1> Todosasd</h1>";

// sonuc = document.querySelector("li:last-child");
// sonuc = document.querySelector("li:nth-child(2)");
// console.log(sonuc);

let sonuc;

sonuc = document.getElementsByClassName("task");
sonuc = document.getElementsByClassName("task")[2];

// console.log(sonuc)

taskList = document.querySelectorAll("#task-list2 li");

// for(let i = 0; i < taskList.length; i++ ){
//     console.log(taskList[i]);
// };

for ( let task of taskList){
    task.style.color = "red";
    task.style.fontSize = "30px";
}