let İsim = prompt("İsim Giriniz");
let OgrNo = prompt("Numara Giriniz");
let Cinsiyet = prompt("Cinsiyet Giriniz");
let DersAdı = prompt("Ders Adı Giriniz");
let BirYazılı = prompt();
let İkiYazılı = prompt();
let Ortalama = (Number (BirYazılı) + Number (İkiYazılı))/2;

console.log(İsim + " "+ OgrNo +" "+ Cinsiyet +" "+ DersAdı + " "+ Ortalama);
