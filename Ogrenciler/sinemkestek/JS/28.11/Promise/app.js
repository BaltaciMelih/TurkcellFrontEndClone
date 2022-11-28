// function getData() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof data === "string") {
//         //olumlu
//         resolve("Data alındı.");
//       } else {
//         //olumsuz
//         reject(new Error("Veri alınamadı."));
//       }
//     }, 3000);
//   });
// }
// getData(500) //get isteği atılmış gibi//bu satırdan noktalar ile devam edeilirsin.
//   .then((response) => console.log("Alınan değer: +response"))
//   //response alırsın
//   .catch((error) => console.log(error));
// //rejecti catch ile yakalarsın.

function x2(number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (typeof number === "number") {
        resolve(number * 2);
      } else {
        reject(new Error("Lütfen bir sayı giriniz"));
      }
    }, 2000);
  });
}
x2(4)
  .then((response) => {
    console.log(response);
    return response * 2; // x2 den dönen response başka bir then ile yakalayıp başka bir işlem gerçekleştirebilirsin.
  })
  .then((res2) => console.log(res2))
  .catch((err) => console.log(err));
