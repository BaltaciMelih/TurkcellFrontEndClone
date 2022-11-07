// let sayi=24;
// for(i=sayi-1;i>0;i--){
//     if(sayi)
// }

let sayi =prompt("Sayıyı girin :");
function mukemmelSayi(x){
    let a=0;
    for(i=sayi-1;i>0;i--){
        if(sayi%i ==0){
            a += i;
        }
    }
    if(a == sayi) {
        console.log(sayi +" Sayısı mükemmel bir sayıdır");
    }else {
        console.log(sayi +" Sayısı mükkemel bir sayı değildir");
    }
}
mukemmelSayi(sayi);
