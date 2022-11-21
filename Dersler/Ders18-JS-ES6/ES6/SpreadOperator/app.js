let langs = ["Python", "C++", "Go", "Ruby", "Javascript"];
let langs2 = ["Perl", "Rust"];
let langs3 = ["Java", "Go"];

// console.log(langs[0], langs[1], langs[2], langs[3], langs[4]);

langs = ["C#", ...langs];

// console.log(...langs);

const allLangs = [...langs, ...langs2, ...langs3];

console.log(...allLangs);
