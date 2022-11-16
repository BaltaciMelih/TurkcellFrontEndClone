const langs = ["python", "C++", "Go", "ruby", "javascript"];
const numbers = [1, 4, 9, 16];

// const map1 = numbers.map(function(e){
//     return e*2
// });

//arrowfunc ile
const map1 = numbers.map((x) => x * 2);

console.log(map1);

//filter() fonsksiyonu
//her elemanı döner, şartı sağlayanlar result içine atılır
const result = langs.filter((lang) => lang.length >= 4);
console.log(result);

