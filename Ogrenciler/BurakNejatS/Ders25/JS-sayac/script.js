let buttonArttır=document.getElementById("arttır");
let buttonAzalt=document.getElementById("azalt");
let buttonReset=document.getElementById("reset");
let counterShow=document.getElementById("counter");

let count=0;


buttonArttır.addEventListener("click",()=>{
    count+=1;
    counterShow.innerHTML=count;
});

buttonAzalt.addEventListener("click",()=>{
    count -=1;
    counterShow.innerHTML=count;
});

buttonReset.addEventListener("click",()=>{
    count=0;
    counterShow.innerHTML=count;
})