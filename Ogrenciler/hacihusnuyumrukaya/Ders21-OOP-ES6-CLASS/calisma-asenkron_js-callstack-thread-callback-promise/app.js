//JS senkron-asenkron callstack thread callback calışma

//  const fonksiyon1 = () => {
//     console.log("Fonksiyon 1 Mesaj 1");
//     console.log("Fonksiyon 1 Mesaj 2");
//     alert('Alert Mesaj');
// }
// const fonksiyon2 = () => {
//     console.log("Fonksiyon 2 Mesaj 1");
//     console.log("Fonksiyon 2 Mesaj 2");
// }
// //aynı anda tek işlem ve sıralı işlem senkron ve single thread
// fonksiyon1();
// fonksiyon2(); 

//Senkron çalışmada tehlike program bloklanma ve yavaş calışma
//alınan veride eksiklik
//  let x = 10;
// console.log("1. Gelen Veri", x);
// setTimeout(() => {
//     x = x + 5;
// }, 200)
// console.log("2. Gelen Veri", x);
// x = x + 5;
// console.log("3. Gelen Veri", x); 


// Call Stack - fonksiyonların-programların çalışma sırası verir.

// function fonksiyon1() {
//     console.log("Ben birinciyim");
//     fonksiyon2(); //single thread olarak sırasıyla
//     console.log("Ben tekrar birinciyim");
// }
// function fonksiyon2() {
//     console.log("Ben ikinciyim");
//     fonksiyon3();
//     console.log("Ben tekrar ikinciyim");  
// }
// function fonksiyon3() {
//     console.log("Ben üçüncüyüm");
// }
// fonksiyon1(); 

//  function add(x, y) {
//     return x + y;
// }
// function average(x,y) {
//     return add(x, y) / 2
// }
// let x = average(5,3); 

// function task(message) {
//     let n = 1000000;
//     while(n > 0) {
//         n--
//     }
//     console.log(message);
// }
// console.log('1');
// setTimeout(()=> {
//     console.log('2');
// }, 1000)
// console.log('3');
// console.log('4');
// task('İşlem Tamamlandı');
// setTimeout(()=> {
//     console.log('5');
// }, 2000)
// task('İşlem Tamamlandı 2');
 
//Call-Back bir bildirim fonksiyonudur.
//Bir fonksiyon çalışmasını tamamladıktan sonra başka bir fonksiyonun çalışmasını 
//sağlayan fonksiyonlara callback fonksiyon denir
//  const myName = () => {
//     console.log("Benim adım  Hacı");
// }
// setTimeout(myName, 3000); 

//Call Backlerin en iyi kullanıldığı yer EventListener
// setTimeout(() => {
//     console.log("Benim adım Arin");
// }, 3000); 

// const books = [
//     {name: "Pinball 1973", author: "Haruki Murakami"},
//     {name: "Özgürlük", author: "Zygmunt Bauman"},
//     {name: "Turkiye'de Çağdaşlaşma", author:"Niyazi Berkes"}
// ]

// const listBooks = () => {
//     books.map((book, index) => {
//         console.log(book, index)
//     })
// }



// const addNewBook = (newBook, callback) => {
//     books.push(newBook)
//     callback();
// }

// addNewBook({name: "Berlin Hatıralım", author: "Hüsrev Gerede"}, listBooks);


// PROMISE asenkron işlemin  sonucunu temsil eden js nesnesi

//  const promise1 = new Promise(function(resolve, reject) {
//     // reject('ERROR2');
//      resolve('DATA');
//      resolve('DATA2');
//      reject('ERROR');
//      reject('ERROR2');
// })
// console.log(promise1); 

// pending (undefined) 1 - fullfilled 2 - rejected 3 > promise durumları

//  const promise1 = new Promise(function(resolve, reject) {
//     //resolve('DATA');
//     reject('ERROR');
// })

//console.log(promise1.value);

//  promise1.then(function (value) {
//     console.log(value)
// }) 

//  promise1.then((value) => {
//     console.log(value)
// }) 

//promise1.then(value =>  console.log(value));
//promise1.catch(reason =>  console.log(reason));  //reject verisi error alındı.

//  const promise1 = new Promise((resolve, reject) => {
    
//     resolve();
//     //reject();
// }) 

//  promise1.then(()=> {
//     console.log('VERILER ALINDI');  //resolve başarılı durumda 
// }); 

//  promise1.catch(()=> {
//     console.log('VERILER ALINMADI');  //başarısız reject durumda
// }); 

//  promise1
//         .then(()=> {
//             console.log('VERİLER ALINDI');
//         })
//         .catch(()=> {
//             console.log('VERİLER ALINMADI');
//         })
//         .finally(()=> {
//             console.log('ÇALIŞ')
//         }) 

//  const promise1 = new Promise((resolve, reject) => {
    
//     //resolve();
    
//     reject();
    
// })
// promise1.then(()=> {//başarılı Resolve
//         console.log('VERILER ALINDI');
// },()=> { //REJECT olan kısmı aldı catch yazmış gib -- başarısız kısımı aldık.
//     console.log('VERILER ALINMADIIIIII');
// }
// ) 

// const books = [
//     {name: "Pinball 1973", author: "Haruki Murakami"},
//     {name: "Özgürlük", author: "Zygmunt Bauman"},
//     {name: "Turkiye'de Çağdaşlaşma", author:"Niyazi Berkes"}
// ]

// const listBooks = () => {
//     books.map((book, index) => {
//         console.log(book, index)
//     })
// } 


//  const addNewBook = (newBook, callback) => {
//     books.push(newBook)
//     callback();
// } 

//  const addNewBook = (newBook) => {
//     const promise1 = new Promise((resolve, reject) => {
//         books.push(newBook)
//         //resolve(books)
//         reject()
//     })
//     return promise1
// } 

//addNewBook({name: "Berlin Hatıralım", author: "Hüsrev Gerede"}, listBooks);

//  addNewBook({name: "Berlin Hatıralım", author: "Hüsrev Gerede"})
// .then(()=> {
//     console.log('Yeni List');
//     listBooks();
// }).catch(()=> {
//     console.log('HATA ALDIK 2')
// }) 

// const add = (num1, num2) => {
//     const promise2 = new Promise((resolve, reject) => {
//         const sum = num1 + num2;
//         (typeof num1 !== 'number' || typeof num2 !== 'number')
//         ? reject('2 sayı giriniz')
//         : resolve(sum)
//     })
//     return promise2
// }

// add(3,5)
// .then((value) => {
//     console.log('TOPLAM: ', value)
// })
// .catch((reason) => {
//     console.log('HATA: ', reason)
// })