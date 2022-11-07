// number = sayısal ifadeler

// var firstNumber = 20;
// var secondNumber = 30;
// console.log(firstNumber + secondNumber);
// console.log(typeof firstNumber);

//String = Karakter Dizisi

// var userName = "Mert";
// console.log(userName);
// console.log(typeof userName);

// Boolean = Karşılaştırma değerleri (True-False)
// var a = true;
// console.log(a);
// console.log(typeof a);

// null = boş
// var b = null;
// console.log(b);
// console.log(typeof b);

// Object - Nesne



// Array = Diziler
/* var users = ["mert", "varol", "şafak", 10];
console.log(users);
console.log(typeof users);
console.log(users[1]); */

/* var date = new Date();
console.log(date);
console.log(typeof date); */

/* var merhaba = function(){
    console.log("Merhaba");
}
console.log(merhaba);
console.log(typeof merhaba); */

/* console.log(this); */
/* 
var a = 10;
var b = a;
console.log("1- ", a, b);
a = 20;
console.log(a, b); */

// SCOPE
var a = 10;
var b = 20;
const c = 30;
// Global Scope
deneme();
{ //block scope
    var d = "merhaba";
    /* console.log("1- ", d); */
    var b = 40;
    console.log("1- ", c + b);
}

function deneme(){  //functional scope
/*     var b = 40;
    console.log("1- ", c + b); */
}

console.log("2- ", b);
/* console.log("2- ", d); */

