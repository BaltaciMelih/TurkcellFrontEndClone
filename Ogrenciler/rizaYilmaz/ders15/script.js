let value;

// value = document.all;

// value = document.body;
// value = document.head;
// value = document.location.port;
/* LOCATION
Javascript window.location nesnesi ile güncel sayfanın URL(Konum) konum hakkında bilgileri içerir ayrıca bu URL adresini değiştirmek için metodları bulunmaktadır.
Örneğin bir adres satırında http://uzmanim.net:8080/Ara?q=javascript#ornek şeklinde bir URL yer alsın.
Javascript window.location ile erişebileceğimiz bilgiler şu şekildedir;
- window.location.hash : href özelliğinin alt bölümü olan '#' işaretinden sonraki kısmını verir.
- window.location.host : hostname ve port bilgilerini birlikte verir.
- window.location.hostname : port bilgisi olmadan sunucu ismini verir.
- window.location.href : URL adresinin tamamını verir.
- window.location.pathname : Yol ve dosya adı bilgisini verir.
- window.location.port : URL adresinin port numarasını verir.
- window.location.protocol : Adres protokülünü verir. (http:, file:, https:, ftp:)
- window.location.search : href özelliğinin soru işaretinden sonraki kısmını verir.
*/
// value = document.URL;
// value = document.scripts[0]; 
/* 
ilk script dosyasının hangisi olduğunu gösterir 
*/
// value = document.links;
// value = document.links[0].getAttribute("class");
// value = document.links[document.links.length - 1].classList;
// value = document.links[0].className;
console.log(value);
// ID ile html element seçme
// value = document.getElementById("link3");
// Class ile html element seçme
// value = document.getElementsByClassName("link");
// Tag ile html element seçme
// value = document.getElementsByTagName("a");
// querySelector ile html element seçme
// value = document.querySelector("#link3");

// value = document.querySelector("#link3");

// value.style.border = "5px solid red";
// value.className += " btn btn-success";
// value.textContent = "Sıkça Sorulan Sorular";

// value = document.querySelector("a:nth-child(2)");
// value = document.querySelector(".link:last-child");
// value = document.querySelectorAll("a:nth-child(odd)");
// value = document.querySelectorAll("a:first-child");

// value = document.querySelectorAll("a:nth-child(even)");

// value.forEach(function (e) {
//   e.style.background = "#ce0";
//   e.style.color = "#fff";
// });

// console.log(value);
