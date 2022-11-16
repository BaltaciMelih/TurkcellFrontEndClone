const person = {
    name: "Mert Paşaoğlu",
    year: 1996,
    salary: 10000,
};

const langs = ["Phython", "C++", "Go", "Ruby", "Javascript"];

// for in

for(let prop in person) {
    console.log(prop, person[prop]);
}

for(let i in langs) {
    console.log(langs[i]);
}

// for of

/* for (let value of person) {  // Objeler için kullanamayız.
    console.log(value);
} */

for(let value of langs) {
    console.log(value);
}

