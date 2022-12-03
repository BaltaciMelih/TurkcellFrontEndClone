// let İsim = prompt("İsim Giriniz");
// let OgrNo = prompt("Numara Giriniz");
// let Cinsiyet = prompt("Cinsiyet Giriniz");
// let DersAdı = prompt("Ders Adı Giriniz");
// let BirYazılı = prompt();
// let İkiYazılı = prompt();
// let Ortalama = (Number (BirYazılı) + Number (İkiYazılı))/2;

// console.log(İsim + " "
// + OgrNo +" "
// + Cinsiyet +" "
// + DersAdı + " "
// + Ortalama);
//prompt("Doğum Yılınızı Giriniz")

// let DogumYılı = 2003
// const min = 2004


// if(DogumYılı>=2004){
//     console.log("Ehliyet Almak İçin Yaşınız Küçük")
// }
// else(DogumYılı<=min){
//     console.log("Ehliyet Alınabilir")
// }


// let dogum = prompt("Doğum Yılınızı Giriniz")
// let yıl = 2022
// let yas = yıl - dogum
// console.log(yas)
// if (yas < 18) {
//     console.log("Ehliyet Alamazsınız")
// }
// if (yas < 18) {
//     console.log("Ehliyet Almanıza", 18 - yas, "Yıl Var!!")
// }
// if (yas >= 18) {
//     console.log("Ehliyet Alabilirsiniz")
// }

// let ay = prompt("Sayısal Ay Giriniz")

// switch (ay) {
//     case "12":
//     case "1":
//     case "2":
//         console.log("Kış Mevsimi")
//         break;
//     case "3":
//     case "4":
//     case "5":
//         console.log("İlkBahar Mevsimi")
//         break;
//         case "6":
//         case "7":
//         case "8":
//             console.log("Yaz Mevsimi")
//             break;
//             case "9":
//             case "10":
//            case "11":
//             console.log("Sonbahar")
// }


// for (let e=0; e<= 100; e++){
//     console.log(e)
// }

// let sehir = ["Isparta", "Antalya", "İstanbul", "Ankara", "İzmit", "Muğla"]

// for (let e=0; e<sehir.length; e++){
//     console.log(sehir[e])
// }

// let mesaj;
// mesaj = "Hello";
// alert (mesaj);


// for (var i=0; i<=100; i++ ) {
//     console.log(i)
// }

// let i = 0
// while (i<=100) {
//     console.log(i);
//     i++;
// }

// let i = 10
// for (i=10; i<=100; i++){
//     console.log(i)
// }

// let i = 10
// while(i<=100){
//     console.log(i);
//     i=i+5
// }

let user = "omur"
let pass = "ksp"
var loggedin = "false";

while(loggedin == "false"){

let username = prompt("Kullanıcı Adı:")
let password = prompt("Parola:")

// console.log(username)
if((user==username) && (pass==password) ){
    console.log("Giriş Yapıldı")
    giris=="true";
}else{
    console.log("Kullanıcı Adı ya da Parola Hatalı")
}
}
