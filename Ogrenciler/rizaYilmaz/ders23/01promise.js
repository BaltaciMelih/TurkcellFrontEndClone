function x2(number) {
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            if (typeof number === "number"){
                //Olumlu
                resolve(number*2);
            } else {
                reject(new Error("Lütfen bir sayı girin"));
            }
        },2000);
    });
}

x2(4)
.then((response) => {
    console.log(response);
    return response*2;
})
.then((res2) => console.log(res2))
.catch((err) => console.log(err));