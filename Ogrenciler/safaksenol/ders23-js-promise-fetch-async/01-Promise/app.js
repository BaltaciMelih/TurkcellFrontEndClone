// function getData(data) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if (typeof data === "string") {
//                 //olumlu
//                 resolve("Datamızı aldık");
//             } else
//                 //olumsuz
//                 reject(new Error("String girebilirsiniz"));
//         }, 3000);
//     });
// }
// getData(500).then(response => console.log("Gelen Değer:+response"))
//     .catch((error) => console.log(error));//hata aldık string değer istedi

// getData("500").then(response => console.log("Gelen Değer:+response"))
//     .catch((error) => console.log(error)); //string değer girdik 500 değerini aldık


function x2(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                //olumlu
                resolve(number * 2);
            } else {
                reject(new Error("Lütfen bir sayı giriniz"));
            }
        }, 2000);
    });
}

x2(4).then(response => {
    console.log(response);
    return response * 2;
})
    .then((res2) => console.log(res2))
    .catch((err) => console.log(err));