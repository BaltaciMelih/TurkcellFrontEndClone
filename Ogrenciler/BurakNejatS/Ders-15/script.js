value = document.querySelectorAll("a:nth-child(odd)")

value.forEach(function (e) {
    e.style.background= "#ce0";
    e.style.color = "red";
    
});

console.log(value);