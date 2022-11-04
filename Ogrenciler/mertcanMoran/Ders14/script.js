/* a=20;
b="20";
console.log(a!==b); */

// 
/* let sayı = prompt("Bir sayı giriniz: ");

if(sayı%2 == 0){
   console.log("Sayı çift");
}
else{
    console.log("Sayı tek");
} */

/* function helloworld() {
    console.log("Hello world");
}

helloworld();

function user(name,age){
    console.log(`İsim: ${name} \n Yaş: ${age}`);
}

user("Mertcan",25); */


let sayı = prompt("Lütfen sayı giriniz: ");
let factor=1;
let fact=(sayı) => {
    if(sayı===0){
        console.log(1);
    }
    
    else {
    for(i=1; i<= sayı; i++){
        
        factor= i*factor;
        
    }
    console.log(factor);
}
} 
fact(sayı); 

/*
let perf = Number(prompt("Sayı: "));
let sum=0;

for(i=1; i< perf;i++){

if(perf%i === 0){
    sum=sum+i;
}
}

if(sum===perf){
    console.log(perf +" bir mükemmel sayıdır");
}
else{
    console.log(perf +" bir mükemmel sayı değildir!");
} */

/* console.log(Math.pow(2,32) % 5);
console.log(Math.pow(2,32) >>> 5); */


