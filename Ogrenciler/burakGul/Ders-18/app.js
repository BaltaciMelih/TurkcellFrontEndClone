// const cube = (x) => x* x * x;
// console.log(cube(3));

// const person = {
//     name: "Burak",
//     year: "1995",
//     salary: "10000",
//     showInfos: () => console.log("Bilgiler Gösteriliyor..."),
// };

// const{
//     name:isim,
//     year:yil,
//     salary:maas,
//     showInfos:bilgileriGoster,
// } = person;

// console.log(isim,yil,maas);
// bilgileriGoster();

let langs = ["Phyton", "C++", "Go", "Ruby", "Javascript"];
// let langs2 = ["Java", "Perl"];
// let langs3 = ["Rust", "Go"];

// const allLangs = [...langs, ...langs2, ...langs3];
// console.log(...allLangs);


// const numbers = [1,4,9,16];
// const map1 = numbers.map((x) => x * 2);
// console.log(map1);

const result = langs.filter((lang) => lang.length >= 4);
console.log(result);

