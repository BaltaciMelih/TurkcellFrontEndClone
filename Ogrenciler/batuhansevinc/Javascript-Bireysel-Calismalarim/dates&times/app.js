// let d = new Date();
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getSeconds());
// console.log(typeof d);

// let date = {
//     tarih: new Date().getDate(),
//     ay: new Date().getMonth(),
//     yıl: new Date().getFullYear(),
// }
// console.log(date);

let dt = new Date("1/1/1990");
let dayOfMonth = dt.getDate();
dt.setDate(dayOfMonth-1)
console.log(dt)

