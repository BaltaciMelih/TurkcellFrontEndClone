// function x2(number) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             if (typeof number === "number") {
//                 //olumlu
//                 resolve(number*2);
//             } else {
//                //olumsuz
//                 reject(new Error("String girebilirsiniz"));
//             }
//         }, 2000);
//     });
// }

// x2("4")
//     .then((response) => {
//         console.log(response);
//         return response * 2;
//     })
//     .then((res2) => console.log(res2))
//     .catch((err) => console.log(err));
//--------------------------------------------------------
// function getJsınFile() {
//     fetch("users.json")
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err));
// }
// getJsonFile();
//------------------------------------------------------------
