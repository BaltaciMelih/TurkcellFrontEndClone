let langs = ["Python", "C++", "Go", "Ruby", "Javascript"];
let langs2 = ["Per1", "Per2"];
let langs3 = ["Java", "Php"];


langs = ["C#", ...langs];


console.log(...langs);

const allLangs = [...langs, ...langs2, ...langs3];

console.log(...allLangs);