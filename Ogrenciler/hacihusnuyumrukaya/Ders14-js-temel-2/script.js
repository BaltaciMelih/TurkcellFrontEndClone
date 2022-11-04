//Karşılaştırma Operatörleri


//Eşittir a 20 b 10 ise a==b dersek false döner
// (a="20");
// (b=20);
// console.log(a==b);

// === hem türü hemde değeri bakar
// console.log(a===b)

// != Eşit Değildir.
//  (a="20");
//  (b=20);
// console.log(a!=b);

// !== hem tür hem değer eşit değildir.
//  (a="20");
//  (b=20);
// console.log(a!==b);

//küçük büyük >= <=
//  (a="20");
//   (b=20);
//  console.log(a<=b);

// and &&  or ||
// console.log((2==2)&&"hacı"=="hacı");
// console.log((2==3)||"hacı"=="xxx");


// Kosullar
// a=20;
// b=20;
// if(a==b)
// {
//     console.log("if calisti");
// }
// else
// {
//     console.log("if calismadi.");
// }

// let a=30;
// let b=20;
// if(a<b){
//     console.log("a b den kücük");
// }
// else if(a==b){
//     console.log("a b ye esit");
// }
// else{
//     console.log("a b den büyük");
// }

//switch case
// const proccess=5;

// switch(proccess){
//     case 1: console.log("secim 1"); break;
//     case 2: console.log("secim 2"); break;
//     case 3: console.log("secim 3"); break;
//     case 4: console.log("secim 4"); break;
//     default: console.log("gecersiz islem");
// }


//sayi tek cift bulma
// let sayi=prompt("Bir Sayi Giriniz.");

// if(sayi%2 ==0)
// {
//  console.log("girdiginiz sayi cifttir.");
// }
// else
// {
//  console.log("girdiginiz sayi tektir.");
// }

//FONKSİYONLAR

// function merhaba(){
//  console.log("merhaba");
// }
// merhaba();
// merhaba();
// merhaba();

// function user(name , age)
// {
//     console.log(`İsim : ${name} \nYas : ${age}`);
// }

// user("Hacı Hüsnü Yumrukaya",21);

//  function user(name ="Bilgi YOK" , age="Bilgi YOK" )
// {
//      console.log(`İsim : ${name} \nYas : ${age}`);
// }

// user("Hacı Hüsnü");


// function square(x)
// {
//     return x*x;
// }

// let a =square(2)+1;
// console.log(a);

// const database ={
//     host: "localhost",
//     add:function(){
//         console.log("eklendi");
//     },
//     get:function(){
//         console.log("veri alındı");
//     },
//     update:function(){
//         console.log("veri güncellendi.");
//     },
//     delete:function(){
//         console.log("veri silindi.");
//     }
// }

// console.log(database.host);
// database.add();
// database.get();
// database.delete();

// const kare=function(x){
//     return x*x;
// }
// console.log(kare(3));


//Arrow Function
// const kare= x => x*x;
//  console.log(kare(3));

//Döngüler - loops

//while 

// let i=0;
// while(i<10)
// {
//     console.log(`deneme: ${i}`);
//     i++; 
// }

// let i=0;
// while(i<10)
// {
//     if(i==3 || i==5){ 
//         i++; 
//         continue;
//     }
//     console.log(`deneme: ${i}`);
//     i++; 
// }

//do while

// let i=0;

// do{
//     console.log(i);
//     i++;
// }
// while(i<10){}

//for döngüsü

//  const langs =["JavaScript","html","css","python"];
// for(let i=0; i<langs.length;i++){
//     console.log(langs[i]);
// }


//Array map()
// langs.map(function(lang){
//  console.log(lang);
// });

//Faktoriyel
// let sayi=prompt("Bir Sayi Giriniz.");
// let sonuc=1;
// for(let i = 1; i <= sayi; i++){
//     sonuc = sonuc * i;
// }

// console.log(sonuc);

//Mükemmel Sayı
let sayi=prompt("Bir Sayi Giriniz.");
let toplam=0;

for(let i=1; i<sayi; i++)
{
    if(sayi%i==0)
    {
        toplam=toplam+i;
    }
}

if(toplam==sayi)
{
    console.log("bu sayi mükemmel bir sayidir.");
}
else
{
    console.log("bu sayi mükemmel bir sayi değildir.");
}