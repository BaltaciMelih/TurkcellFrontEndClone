let langs = ["python", "c++", "go", "ruby", "javascript"];
let langs1 = ["perl", "rust"];
let langs2 = ["java", "go"]

// langs = [...langs,"c#"];
// console.log(...langs)

const allLangs = [...langs, ...langs1, ...langs2];
console.log(...allLangs)