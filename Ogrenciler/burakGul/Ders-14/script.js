// let sayi = prompt("sayı giriniz");
// let faktoriyel = 1;
// if(sayi < 0) {
// console.log("tamsayı giriniz")
// } else{
// for(let i = 1; i <= sayi; i++){
// faktoriyel = faktoriyel * i;
// }
// console.log("Faktöriyel : " + faktoriyel);
// }


var sayi=1;
for (var sayi=1; sayi<=1000; sayi++)
{
    var toplam = 0;
    for (var i = 1 ; i < sayi ; i++) {
      if(sayi %i == 0)  
        toplam += i;
    }

    if (toplam == sayi) 
      console.log(sayi + " mükemmel bir sayidir");
	
}