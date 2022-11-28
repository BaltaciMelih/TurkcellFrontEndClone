// function getData(data) {
//      return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if(typeof data === "string") {
//                 //olumlu
//                 resolve("Datayı aldık");
//             } else {
//                 reject(new Error("Bu sefer olmadı"));
//             }
//         }, 3000);
//      });
// }

// getData("mustaa")
// .then(response => console.log("gelen değer" + response))
// .catch(error => console.log(error));

//diğer uygulama

function x2(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function (){
            if(typeof number === "number"){
                resolve(number*2)
            } else {
                reject(new Error("lütfewn bir sayı girin."))
            }
        },2000)
    })
}

x2("a")
.then(response => {
    console.log(response);
    return response*2;
}).then(res2 => console.log(res2))// yukardaki returnu tekrar aldık
.catch(err => console.log(err));