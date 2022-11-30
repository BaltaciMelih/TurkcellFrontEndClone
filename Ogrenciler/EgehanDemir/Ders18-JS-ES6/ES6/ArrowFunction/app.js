// function deneme(name) {
//   console.log("Merhaba " + name);
// }

// deneme("Varol");

// const merhaba = function (name) {
//   console.log("Merhaba " + name);
// };

// merhaba("Varol");

// const selam = name => console.log("Selam " + name);

// selam("Varol")

// const cube = function(x){
//   return x*x*x;
// }
// console.log(cube(4)+1)

const cube = (x) => (x % 2 == 0 ? x * x * x : null);

console.log(cube(4));
