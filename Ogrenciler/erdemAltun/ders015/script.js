let value;

// value = document.all;
// value = document.body
// value = document.head
// value = document.location
// value = document.URL
// value = document.scripts[0]
// value = document.links
// value = document.links[0].getAttribute("class")
// value = document.links[document.links.length - 1].className
// value = document.links[0].className

//id ile html element seçme
// value = document.getElementById("link3");

//class ile html element seçme
// value = document.getElementsByClassName("link")

//class ile html element seçme
// value = document.getElementByTagName("a")

// value = document.querySelector("#link3");


// value = document.querySelector("a:nth-child(2)")
// value = document.querySelector("a:first-child")


value = document.querySelectorAll("a:nth-child(even)");

value.forEach(function (e) {
    e.style.background = "#ce0"
    e.style.color = "#fff"
})

console.log(value)