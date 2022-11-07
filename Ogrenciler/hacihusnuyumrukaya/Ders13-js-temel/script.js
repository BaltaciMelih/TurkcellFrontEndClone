//Javasript Giris
//console.log("deneme mesajı");

// Variables- Degiskenler

//number = sayısal ifadeler

//  var firstNumber=20;
//  var secondNumber=30;
//  console.log(firstNumber+secondNumber);
//  console.log(typeof firstNumber );


//string = karakter dizisi

// var  userName ="Hacı Hüsnü";
// console.log(userName);
// console.log(typeof userName);

//boolean = karşılaştırma değerleri  true-false
// var a=true;
// console.log(a);
// console.log(typeof a);

//null = boş
//  var b=null;
//  console.log(b);
//  console.log(typeof b);

//Object = nesne
// var user={
//     name:"Hacı Hüsnü",
//     age :36,
// };

// console.log(user);
// console.log(typeof user);
// console.log(user.name,user.age);

//Array = Diziler
// var users=["Hacı","Hüsnü","Yumrukaya",22];
//  console.log(users);
//  console.log(typeof users);
//  console.log(users[1]);


//Date Metodu
// var date =new Date();
// console.log(date);
// console.log(typeof date);

//Function
// var merhaba=function(){
//     console.log("Merhaba");
// };
// console.log(merhaba);
// console.log(typeof merhaba);

//console.log(this);  //winndowu getirir.

// var a=10;
// var b=a;
// console.log("1. ",a,b);
// a=20;
// console.log("2. ",a,b);

// //Scope = Kapsam
// var a=10;//function scope
// let b=20;   //block scope  degisir
// const c=30; //block scope  sabit
// //global scope
// //deneme();
// { //block scope
//     //var d="merhaba";
//     // console.log("1. ",d);
//     // var b=40;
//     console.log("1. ",c+b);
//  }

// // function deneme()  // function scope
// // {
// //     var b=40;
// //     console.log("1. ",c+b);
// // }
// console.log("2. ",b);
// // console.log("2. ",d);

// // function abc()
// {
//     let a=5;   //block scope onu blockta tanımlayınca dışarıdan erişemeyiz.
//     var b=10;  //function scope ama blokları görmez
// }
// // abc();
// console.log(b);

//tip dönüşümü


// var a="string";
// console.log(a);
// a=5;
// console.log(a);

// var a=5;
// console.log(a);
// console.log(typeof a);
// a=String(a);
// console.log(a);
// console.log(typeof a);

// var a="5";
// console.log(a);
// console.log(typeof a);
// a=Number(a);
// console.log(a);
// console.log(typeof a);

// var a="deneme";
// console.log(a);
// console.log(typeof a);
// a=Number(a);
// console.log(a);
// console.log(typeof a);

// var a=5+"2";
// console.log(a);
// console.log(typeof a);
// var a=5-"2";
// console.log(a);
// console.log(typeof a);

// var a="deneme"+" yazısı";
// console.log(a);
// console.log(typeof a);

// var a=5*"2";
// console.log(a);
// console.log(typeof a);


//Operatörler
// const a=10;
// const b=4;
// let s;

// s=a+b;
// s=a-b;
// s=a*b;
// s=a/b;
// s= a%b;

//  s=Number(Math.PI.toFixed(2));
// s=Math.round(a/b);
// s=Math.ceil(a/b); //yukarı yuvarla
// s=Math.floor(a/b);  //asagı yuvarla
// s=Math.sqrt(16);
// s=Math.pow(4,3);
// s=Math.floor(100*Math.random());
// s=Math.floor(Math.random()*80+20); //20-100 arası
// console.log(s);

//String Methodları

// let value;
// const firstName ="Hacı";
// const lastName ="Yumrukaya";
// const departmant="Yazılım";
// const salary="5000";

// value=firstName+" "+lastName;
// value=firstName;
// value +=" "+lastName;

// value=firstName.length;
// value=firstName.toLowerCase();
// value=firstName.toUpperCase();
// value=firstName[2];
// value=firstName[firstName.length-1];
// value=firstName.indexOf("a");
// value=firstName.includes("ı");
// value=firstName.concat(" ",lastName," deneme");

// value="isim: "+firstName+"\nSoyisim : "+lastName+"\nMaas: "+salary +"\nDepartman: "+departmant;

//Template Literal

//  value=`İsim: ${firstName}
//  Soyisim: ${lastName}
//  `;
// value=`İsim: ${firstName}
// //  Soyisim: ${lastName}
// //  `;
// document.body.innerHTML=value;

// console.log(value);


//Array Özellikleri
// let value;
// const numbers=[45,78,34,79,5];
// const lang=["Python","Css","JavaScript"];

// value=numbers.length;
// value=numbers[2];
// value=numbers[numbers.length-1];
// numbers.push(200);
// value=numbers;
// value=numbers.indexOf(78);
// value=numbers.includes(78);
// numbers.pop();
// numbers.shift();
// numbers[1]=3;
// value=numbers.sort(function(x,y)
// {
//     return x - y;
// });
// console.log(value);



//OBJE ÖZELLİKLERİ
// let value;
// const user={
//     name: "Hacı Yumrukaya",
//     age: 22,
//     email: "haciyumrukaya26@gmail.com",
//     langs:["Python","Css","JavaScript"],
//     adress:{
//         city: "Eskisehir",
//         street: "Turgut R."
//     },
//     work: function()
//     {
//         console.log("Calisiyor.");
//     }
// }

// value=user.adress.city;
// value=user.work();
// value=user["name"];

// console.log(value);
// console.log(typeof value);


//Zaman Objesi

let value;
let now=new Date();

// value=now.getFullYear();
// value=now.getMonth();
value= `
    ${now.getDate()}/${now.getMonth()}/${now.getFullYear()}
`;


console.log(value);