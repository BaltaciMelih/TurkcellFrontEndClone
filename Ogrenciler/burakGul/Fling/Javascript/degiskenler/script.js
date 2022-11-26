var ad = prompt("adınızı giriniz :")
var ogrno = prompt("öğrenci no giriniz :");
var cinsiyet = true;
var ders = prompt("ders adı giriniz :")
var not1 = prompt("ilk notunuzu giriniz :")
var not2 = prompt("ikinci notunuzu giriniz :");
var ortalama = (Number(not1)+Number(not2))/2;
console.log(ogrno + "numaralı " + ad + " isimli öğrencinin "+ders + " dersinden aldığı ortalama "+ ortalama);