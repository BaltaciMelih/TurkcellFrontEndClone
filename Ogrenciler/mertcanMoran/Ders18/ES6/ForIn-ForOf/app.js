const person = {
  name: "Mertcan Moran",
  year: 1997,
  salary: 10000,
};

const langs = ["python", "ruby", "c++"];

// for in
for (let prop in person) {
  console.log(prop, person[prop]);
}

for (let i in langs) {
  console.log(langs[i]);
}
// for of

//for(let value of person){ // onjeler için kullanılamaz!
// console.log(value);
// }

for (let value of langs) {
  console.log(value);
}
