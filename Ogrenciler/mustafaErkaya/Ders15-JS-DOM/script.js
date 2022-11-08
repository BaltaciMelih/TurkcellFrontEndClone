let value;
// value = document;
//value = document.body;
//value = document.head;
//value = document.URL;
//value = document.scripts;


value = document.querySelectorAll("li:nth-child(even)");

value.forEach(function(e){
    e.style.background = "black";
    e.style.width = "300px";
    e.style.color = "white";
})
console.log(value);