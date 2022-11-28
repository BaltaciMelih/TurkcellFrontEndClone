// function getData(data) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof data === "string") {
//         //olumlu
//         resolve("data alındı");
//       } else {
//         //olumsuz
//         reject(new Error("String giriniz"));
//       }
//     }, 3000);
//   });
// }

// //getData(500).then(response => console.log("gelen değer" + response)).catch(error => console.log(error));

// getData(500)
//   .then((response) => console.log("gelen değer" + response))
//   .catch((error) => console.log(error));
// //string girmediğimiz için reject çalışır

// getData("500")
//   .then((response) => console.log("gelen değer" + response))
//   .catch((error) => console.log(error));
// //resolve çalışır

function x2(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
        //olumlu
        resolve(number * 2);
      } else {
        reject(new Error("lğtfen sayı giriniz"));
      }
    }, 2000);
  });
}

x2(4)
  .then((response) => console.log(res2))
  .catch((err) => console.log(err));
