// let sayi = prompt("lütfen sayi giriniz");

// if(sayi %2 == 0){
//     console.log("çift");
// }else{
//     console.log("tek");
// }

// // let sayi = Number(prompt("lütfen sayi giriniz"));
// // let sonuc = 1;
// // for(let i = 1; i <= sayi;i++){
// //     sonuc = sonuc * i;
// // }

// console.log(sonuc);


let sayi = prompt("lütfen sayi giriniz");
let toplam = 0;

for(let i=1;i < sayi;i++){
    if(sayi %i == 0){
        toplam = toplam + i;
    }
}

if(toplam == sayi){
    console.log("bu sayi mükemmel sayi");
}else{
    console.log("bu sayi mükemmel sayi değil");
}
