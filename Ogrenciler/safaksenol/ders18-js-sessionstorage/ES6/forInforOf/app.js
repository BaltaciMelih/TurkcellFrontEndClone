const person = {
    name: "Şafak Şenol",
    year: 1994,
    salary: 12500,
};

// for in

const langs = ["Pyhton", "C++", "Go", "Ruby", "JavaScript"];

// for (let prop in person) {
//     console.log(prop, person[prop]);
// };

// for (let i in langs) {
//     console.log(langs[i]);
// }

//for of

// for (let value of person) { // objeler için kullanamayız
//     console.log(value);
// }

for (let value of langs) {
    console.log(value);
}
