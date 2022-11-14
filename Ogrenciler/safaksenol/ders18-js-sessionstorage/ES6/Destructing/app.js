// let number1, number2;
// let arr = [100, 200, 300, 400];

// // number1 = arr[0];
// // number2 = arr[1];


// [number1, number2,...kalanlar] = arr;
// console.log(number1, number2,kalanlar);

//objeler için kullanım örnek1

const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50,
    
};
const { a: n1, c: n2, e: n3 } = numbers;
console.log(n1, n2, n3);

//objeler için kullanım örnek2
const person = {
    name: "Şafak Şenol",
    year: 1994,
    salary: 12500,
    showInfos: () => console.log("Bilgiler Gösteriliyor..."),
};

const {
    name: isim,
    year: yil,
    salary: maas,
    showInfos: bilgileriGoster,
} = person;

console.log(isim, yil, maas);
bilgileriGoster();