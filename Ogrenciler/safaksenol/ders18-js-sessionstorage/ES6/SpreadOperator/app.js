let langs = ["Pyhton", "C++", "Go", "Ruby", "JavaScript"];

let langs2 = ["Parl", "Rust"];
let langs3 = ["Java", "Go"];

// console.log(langs[0], langs[1], langs[2], langs[3], langs[4]);

langs = ["C#", ...langs];
// console.log(...langs);

const allLangs = [...langs, ...langs2, ...langs3];
console.log(...allLangs);