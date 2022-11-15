// let number1, number2;
// let arr = [100, 200, 300,400];

// [number1, number2] = arr;
// console.log(number1,number2);

// const numbers = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e: 50,
    
// };

// const {a:n1, c:n2, e:n3}=numbers;
// console.log(n1,n2,n3) ;


const person = {
    name: "Erdem Altun",
    year: 1994,
    salary: 11000,
    showInfos: () => console.log ("bilgiler Gösteriliyor...")
};

const {
    name: isim,
    year: yıl,
    salary: maaş,
    showInfos: bilgileriGoster,
} = person;

console.log(isim, yıl, maaş);
bilgileriGoster();
