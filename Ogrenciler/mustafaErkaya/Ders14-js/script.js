// karşılaştırma operatorleri ,, koşullu ifadeler

// a = 30;
// b = 20 ;
// if( a < b) {
//     console.log("a b'den küçük");
// }
// else if (a == b ) {
//     console.log("a b'ye eşit");
// }

// let sayı = prompt("bir sayı giriniz");  // kulşlanıcı giriş
// if  (sayı%2 === 0 ){
//     console.log("sayı çifttir");
// }else {
//     console.log("tektir.");
// }


// Fonksiyonlar

// function merhaba() {
//     console.log("merhaba");
// }

// merhaba();
// merhaba();


// function user(name, age) {
//     console.log();
// }

// let i = prompt("bir sayı giriniz");
// let sonuc = 1;
// if(i > 0){
//     for( a = i; a>0; a--){
//         sonuc = a * sonuc;
//     }
   
// }
// console.log(sonuc);

let sayi = prompt("sayı giriniz")
let sonuc = 0
for ( i = sayi-1; i > 0 ; i--){
    if (sayi % i == 0){
        // console.log(i);
    sonuc = i +sonuc;
        
   
    }
   
   
}

// console.log(sonuc);
if ( sayi == sonuc) {
    console.log("mükemmel sayıdır");
}else  {
    console.log("mükemmel değldir.");
}


