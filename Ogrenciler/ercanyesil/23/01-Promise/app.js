// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof data === "string") {
//         // Olumlu
//         resolve("Datayı aldık");
//       } else {
//         // Olumsuz
//         reject(new Error("String girebilirsiniz"));
//       }
//     }, 3000);
//   });
// }
// getData("500")
//   .then((response) => console.log("Gelen Değer: " + response))
//   .catch((error) => console.log(error));

function x2(number){
    return new Promise((resolve,reject) => {
        setTimeout(function (){
            if (typeof number === "number") {
                //Olumlu
                resolve(number * 2);
            }
            else {
                reject(new Error("Lütfen bir sayı girin"));
            }
        }, 2000);
    });
}

x2(4)
 .then((response) => {
    console.log(response);
    return response * 2;
 })
 .then((res2) => console.log(res2))
 .catch((err) => console.log(err));