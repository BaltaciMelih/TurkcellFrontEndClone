class Request{
    async get(url){
       const res = await fetch(url);
       if(!res.ok){
        throw new Error(`Bir Hata Oluştu ${res.status}`);
       }
       const data = await res.json()
       return data;
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/album")
.then(data => console.log(data))
.catch(err => console.log(`Hata: ${err.message}`));






//Javascript senkron mu asenkron mu çalışır araştır?
//Javascript senkron çalışır

// bundle şişmemesi gerek performans için
// gereksiz kütüphaneler import edilmemeli
//svg -> boyutu küçük ve kalitesi de çok daha fazladır.

//mini blog sayfası JSON POSTS'ları kullanarak mini bir blog sayfası. içinde yazılar olsun 100 de olur 10da olur tasarım bootstrap
// asycn await de olur promise da olur.

