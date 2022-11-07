let value;

value= document.querySelectorAll("a:nth-child(even)");
value.forEach(function (e) {
    e.style.background = "#ce0";
    e.style.color= "#fff";
});
console.log(value);