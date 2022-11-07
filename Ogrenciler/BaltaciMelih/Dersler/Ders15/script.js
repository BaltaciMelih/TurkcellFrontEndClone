let value;

// value = document.all;
// value = document.body;
// value = document.head;
// value = document.location;
// value = document.URL;
// value = document.scripts[0];
// value = document.links;
// value = document.links[0].attributes("class");
// value = document.links[document.links.length - 1].classList;
// value = document.links[0].className;

// ID ile html element seçme
// value = document.getElementById("link3");
// value = document.getElementById("link3").className;
// value = document.getElementById("id3").textContent = "Değişti";

// Class ile html element seçme
// value = document.getElementsByClassName("link");
// value = document.getElementsByClassName("link")[2].getAttribute("id");

// Tag ile html element seçme
// value = document.getElementsByTagName("a");

// querySelector ile html element seçme
// value = document.querySelector(".link3");
// value=document.querySelector("#id3").className

// value = document.querySelector(".link3");
// value.style.border = "5px solid red";
// value.className += "btn btn-success";
// value.textContent = "Sıkça Sorulan Sorular";

// value = document.querySelector("a:nth-child(2)");
// value = document.querySelectorAll("a:first-child");
// value = document.querySelectorAll("a:nth-child(odd)");

value = document.querySelectorAll("a:nth-child(even)");

value.forEach(function (e) {
  e.style.background = "green";
  e.style.color = "white";
});

console.log(value);
