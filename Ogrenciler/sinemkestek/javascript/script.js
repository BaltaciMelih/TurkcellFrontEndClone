// let value;
// value = document.all;
// console.log(value);

let value;

value = document.querySelectorAll("a:nth-child(even)");

console.log(value);

value.forEach(function (e) {
  e.style.background = "orange";
  e.style.color = "green";
});
console.log(value);
