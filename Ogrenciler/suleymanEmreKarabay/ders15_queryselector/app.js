let value;

value = document.querySelectorAll("li:nth-child(even)");

value.forEach(function (e){
    e.style.color = "yellow";
})