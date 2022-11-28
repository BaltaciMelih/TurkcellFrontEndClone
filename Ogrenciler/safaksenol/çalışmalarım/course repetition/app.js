// distance between 2 points

// class Point{
    
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
    
//     static distance(a, b) {
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;
//         return Math.hypot(dx, dy);
//     }
// }

// const d1 = new Point(10, 10);
// const d2 = new Point(20, 20);

// console.log(Point.distance(d1, d2));  //14.142135623730951 mesafe hesaplandı.

//Kalıtım metodu uygulama

// class PersonES6{
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     sayHi() {
//         return `Hello I'am ${this.firstName}${this.lastName}`
//     }
// }
// class CustomerES6 extends PersonES6{
//     constructor(firstName, lastName, phone, username) {
//         super(firstName, lastName);
//         this.phone = phone;
//         this.username = username;
//     }

//     static getTotal() {
//         return 1000;
//     }
// }

// let customer1 = new CustomerES6(`şafak`, `şenol`, `14576`, `safaksenol`);

// console.log(customer1.sayHi());  //Hello I'am şafakşenol çıktısı alndı
// console.log(customer1);  //CustomerES6 {firstName: 'şafak', lastName: 'şenol', phone: '14576', username: 'safaksenol' çıktısı alındı
// console.log(customer1.getTotal);//undefined geldi
// console.log(CustomerES6.getTotal);//ƒ getTotal() {return 1000;} çıktısını aldık

// Asenkron Javascript

// const first = () => {
//     console.log('first');
//     second();
// }

// const second = () => {
//     console.log('second');
//     third();
// }

// const third = () => {
//     console.log('third');
// }

// first();  //konsol çıktısı first second third şeklinde olur.

// const first = () => {
//     console.log('first');
//     second();
// }

// const second = () => {
//     setTimeout(() => {
//         console.log('second');
//     }, 2000);
//     third();
// }

// const third = () => {
//     console.log('third');
// }

// first(); //konsol çıktısı şu şekilde olur firstü yazar sonra seconda gelir 2 sn bekleme işlemi olduğu için thirde geçer thirdü yazar 2 sn bekler ve secondı yazar.

// AJAX

// var xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText);
//     }
// }

// xhr.open('GET', 'msg.txt', true);
// xhr.send();   //konsola msg.txt dosyamızdaki "Hello there" yazısını gördük.

//

// ready State:
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// status:
// 200: "OK"
// 403: "Forbidden"
// 404: "Page not found"

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else if (xhr.status === 404) {
            console.log('kaynak bulunamadı')
        }
    }
}

xhr.onprogress = function () {
    console.log('on progressing');  // konsolda kaynak bulunamadı yazısından önce gelir işlem yapıldığı sırada olduğunu anlayabilirsin.Bunu nerede kullanırız örneğin bir dosya yüklenirken kullanıcıya yükleniyor.. yada loading... bilgisi gelmesini istedeğimiz zamanlarda kullanırız.
}

// xhr.open('GET', 'msg1.text', true);  // konsolda kaynak bulunamadı yazısını görürüz sebebi msg1.text adında bir dosyamız yoktur.
xhr.open('GET', 'msg.text', true); 
xhr.send();

console.log('hello'); //msg.text var ve son olarak bu kodu ekledik konsolda alt alta sırayla hello on progressing hello there çıktısını alırız görüldüğü gibi işlem yapılırken bizi bloklamadı ve konsolda hello çıktısını alabildik.

//xhr.open('GET', 'msg.text', true); burada true yerine false yazsakdık bizi sistem bloklardı ve işlem yapılana kadar bekletilir konsolda sırayla hello there ve hello çıktılarını alırdık.



