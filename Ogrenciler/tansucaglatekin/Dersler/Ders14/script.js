// let sayi = prompt ("Bir sayı giriniz.");

// if (sayi % 2 == 0) {
//     console.log ("Sayı çift bir sayıdır")
// } else {
//     console.log ("Sayı tektir")
// }

// let sayi2 = prompt ("Bir sayı giriniz");

// let faktoryel = 1

// for (i = 1 ; i<= sayi2; i++) {
//     faktoryel = faktoryel * i;
// }
// console.log(faktoryel);

let sayi = prompt ("Bir sayı giriniz");
toplam = 0;
for (i = 1; i < sayi; i++) {
    if (sayi % i == 0) {
        toplam = toplam + i;
    }
}
if ( sayi == toplam ) {
    console.log("mükemmel sayıdır");
}else {
    console.log ("mükemmel değildir.")
}