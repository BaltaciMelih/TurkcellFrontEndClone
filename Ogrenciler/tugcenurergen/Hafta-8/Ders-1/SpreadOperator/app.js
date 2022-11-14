let  langs = ["python","C++","Go","javascript","ruby"];
let  langs2 = ["python","C++","Go","javascript","ruby"];
let  langs3 = ["python","C++","Go","javascript","ruby"];

console.log(langs[0]);
console.log(langs[1]);
console.log(langs[2]);
console.log(langs[3]);

console.log(...langs);

langs = ["C#", ...langs];

console.log(...langs);

const allLangs = [...langs, ...langs2, ...langs3];

console.log(...allLangs);