// Karşılaştırma operatörleri

// == eşittir => a=10,b=20 false döner
// === eşittir => hem tür hem değer karşılaştırır.

// != eşit değildir => a=10,b=20 true döner
// === eşit değildir => hem tür hem değer karşılaştırır. string num


// &&  and operatöru
//console.log(2 == 2 && "Erdem" == "Erdem")

// ||  or operatörü
//console.log(2 == 2 || "Erdem" == "Atilla")

//kosullar
//a = 20;
//b = 30;
//if(a != b) {
//    console.log("İf çalıştı")
//}

// a = 20;
// b = 30;
// if(a < b) {
//     console.log("A B'den küçük")
// } else if ( a == b){
//     console.log("A B'ye eşit")
// } else {
//     console.log("A B'den büyük")
// }


// Switch case

// const prosess = 3;
// switch (prosess){
//     case 1:
//         console.log("seçim 1");
//         break;
//     case 2:
//         console.log("seçim 2");
//         break;
//     case 3:
//         console.log("seçim 3");
//         break;
//     case 4:
//         console.log("seçim 4");
//         break;
//     default:
//     console.log("Geçersiz işlem")
// }

// let sayi = prompt("Bir sayı giriniz");

// if (sayi % 2 == 0)
// {
//     console.log("Çift");
// }
// else {
//    console.log("tek")
// }

// function merhaba() {
//     console.log("merhaba")
// }

// merhaba();

// function user(name, age) {
// console.log('isim: ${name} \nYaş: ${age}');
//}

// user("erdem altun" , 28);

// function square(x) {
//     return x * x;
// }
// let a = square(3) + 1;
// console.log(a)


// const database = {
//     host: "localhost",
//     add: function () {
//         console.log("eklendi")
//     },
//     get: function() {
//         console.log("alındı")
//     },
//     update: function(){
//         console.log("güncellendi") 
//     },
//     delete: function(){
//         console.log("silindi") 
//     }
// }

// console.log(database.host);
// database.add();

// const kare = (x) => x * x;
// console.log(kare(3))

// let i = 0;
// while(i < 10) {
//     console.log("deneme");
//     i++;
// }

let i = 0;
while(i < 10) {
    if(i == 3 || i == 5) {
        i++;
        continue;
    }
    console.log("deneme ${i}");
    i++;
}