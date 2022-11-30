const container = document.getElementById("container");


class Request{
    async get(url){
       const res = await fetch(url);
       console.log(res);
       const deneme = await res.json();
       if(!res.ok){
        throw new Error(`Bir Hata Oluştu ${res.status}`);
       }
       deneme.forEach(function(info){
            container.innerHTML+=`<p>${info.title}</p>`
       })
       return deneme;
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/posts")
.then(data => console.log(data))
.catch(err => console.log(`Hata: ${err.message}`));


//ODEV3

// class yapısının düzgün kullanılması
// 4 istek, promise,async farketmez
// blog sayfası ama kullanıcı düzenle yapabilecek
// blogları get ile serverdan alıp listeleyecek (başlık,yazı,yazarın adı, tarih ve saat, kategori, görsel)
// herhangi bir yazıya tıklandığında o yazının sayfası açılacak (modal olarak) o yazının idsi ile istek at
// yeni blog yazısı oluşturabilecek zamanı da tutturulacak
// server: json-server
// var olan bir yazıyı güncelleyebilecek
// seçtiği yazıyı silebilecek
// kategoriye göre filtreleme yapılabilecek
// arama inputu olacak
