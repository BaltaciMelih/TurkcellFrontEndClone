// let sayi = prompt("Bir sayı giriniz.");
// if (sayi % 2 ===0) {
//     console.log("Girdiğiniz sayı çifttir.")
// }
// else {
//     console.log("Girdiğiniz sayı tektir.")
// }

// function user(name="Belirtilmedi.",age="Belirtilmedi."){
//     console.log(`isim: ${name} \n yaş: ${age}`)
// }
// user("Batuhan",24);

// function square(x){
//     return x*x;
// }
// let a =square(13)+8;
// console.log(a);

// let i = 0;

// do{
//     console.log(i);
//     i++;
// }
// while (i<10);

// const langs= ["Python", "C++", "Javascript","C#"];

// Array map()
// langs.map(function (lang){
//     console.log(lang);
// });

// let sayi = prompt ("Bir sayı giriniz.");
// let sonuc = 1;
// for (let i = 1; i<= sayi; i++){
//     sonuc= sonuc*i;
// }
// console.log(sonuc);
let input = prompt("sayi gir");
let i;
topla=0
for(i = 1 ; i< input; i++){
    if (input%i == 0){
        topla= topla+i;
    }
}
if(topla==i){
    topla== input
    console.log("mükemmel sayı")
}
else{
    console.log("mükemmel sayı değil")
}