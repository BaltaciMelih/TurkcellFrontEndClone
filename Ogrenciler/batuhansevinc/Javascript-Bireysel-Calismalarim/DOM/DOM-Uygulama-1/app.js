let sonuc;

ul = document.getElementById("task-list");

sonuc = ul.children;
ul.children[0].children[0].children[0].checked = true;
ul.children[1].children[0].children[0].checked = true;
ul.children[1].nextElementSibling.children[0].children[0].checked = true;
// sonuc = document.getElementById("title").parentElement;
// sonuc = document.querySelector(".task").nextElementSibling;
console.log(sonuc);
