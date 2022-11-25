**REST API**

Representational State Transfer..

- Bir yazılım parçasının herhangi bir diğer yazılım parçasıyla konuşabilmesine amiyane tabirle
  API denilir.

- Protokol is bizim uygulamamız başka bir uygulama ile konuşurken "Selamün aleyküm kardeşim nasılsın" tarzı bir konuşma değil belirli "Protokollere uygun" bir şekilde olmalıdır. (HTTP)

- HTTP Request -> HTTP Response

- Postman -> API testlerinde kullanılan bir HTTP istemcisi.

- Bir uygulama geliştirirken önce uygulamayı yapalım ardından verileri test edelim tarzı bir mantık olmadığına göre verileri bizim test etmemiz gerekiyor. İşte burada "Postman" devreye giriyor.

- Uzaktaki bir sunucuya isteği gönderim ve bir "Response" elde ettim. Bu cevabın doğru bir şekilde alınıp alınmadığını görmek için "HTTP STATUS"'lara ihtiyacımız var.

![REST API MODEL](https://www.rlogical.com/wp-content/uploads/2021/08/rest-api-model.png)

**API**
**_Application Programming Interface_**

- API kullanımı bizi ilgili işlemin gerektireceği iş yükünden kurtarır. "API hayatı kolaylaştırır".
- Platform bağımsız çalışırlar.
- Güncelleme sonucunda bizim yapmamız gereken işlemler sınırlıdır.

` API mantığını anlatan güzel bir video. Tıklaman yeterli 😉`

<a href="https://www.youtube.com/watch?v=s7wmiS2mSXY" rel="some text">

![](https://img.youtube.com/vi/s7wmiS2mSXY/maxresdefault.jpg)</a>

**_REST API_**

- {JSON} Placeholder -> Test amaçlı bize bir REST API hizmeti sağlayan bir site.

- Representational state transfer; İlgili isteğe karşılık gelen verinin JSON / XML gibi dosya formatlarında gönderilmesidir. REST API, REST mimarisinin prensiplerine taşıyan API’lardır. Tüm prensiplerin karşılanması durumunda RESTful API olarak da adlandırılır.

![REST API Logic](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/rest-api-nedir/figures/RestApi.png)

REST Prensipleri

- İstemci – Sunucu: (Client – Server)
- Tek Tip Arayüz: (Uniform Interface)
- Durumsuzluk: (Statelessness)
- Önbelleklenebilir: (Cacheable)
- Katmanlı Sistem: (Layered System)
- İsteğe Bağlı Kod: (Code On Demand - Optional)

**_HTTP_**

**_Hyper Text Transfer Protocol_**

- İstemci ile sunucu arasındaki veri akışının kurallarını belirleyen protokoldür.
- Request-Response modeline göre çalışır.
- REST API'lerin neredeyse tamamında HTTP protokolü kullanılır.
- FTP, SMTP(e-posta gönderiminde) tarzı başka protokoller de vardır.

- HyperText ---> www.google.com(Normal Text.) ---> https://www.google.com/ (Google sunucularına erişebilen text...)

**_HTTP Request_**
İstek (Request) yapısını belirtir. 4 bölümden oluşur.

![HTTP Request](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/http-nedir/figures/Request.png)

**_HTTP Response_**
Cevap (Response) yapısını belirtir. 4 bölümden oluşur.
![HTTP Respons](https://raw.githubusercontent.com/Kodluyoruz/taskforce/main/rest-api/http-nedir/figures/Response.png)

[Daha fazlası için -> Bknz. MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)

**_HTTP STATUS_**

Sunucu tarafından ilgili isteğin sonucunu belirten, 3 rakamdan oluşan sayısal ifadelerdir.

Informational responses (Bidirimsel cevaplar) (100–199)

- 100 Continue
- 102 Processing
- Successful responses (Başarılı cevaplar) (200–299)

200 OK

- 201 Created
- 204 No Content

Redirections (Yönlendirme cevapları) (300–399)

- 300 Multiple Choice
- 301 Moved Permanently
- 304 Not Modified

Client errors (İstemci Hataları) (400–499)

- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 405 Method Not Allowed

Server errors (Sunucu Hataları) (500–599)

- 500 Internal Server Error
- 503 Service Unavailable

**_HTTP METHODS_**

GET

Verileri almak - listelemek için kullanılan istek metodudur.

http://api.example.com/users
http://api.example.com/users/1

POST

Belirli bir kaynağa veri göndermek için kullanılır.
http://api.example.com/users

PUT

Belirli bir kaynaktaki verinin tamamının değiştirilmesi için kullanılan metodtur.

http://api.example.com/users/1
{ “name": "Gurcan", "age": 40}

PATCH

Belirli bir kaynaktaki verilerin bir kısmının değiştirilmesi için kullanılan metodtur.

http://api.example.com/users/1
{ "name": "Gurcan"}

DELETE

Belirli bir kaynaktaki verilerin silinmesi için kullanılan metodtur.
http://api.example.com/users/1

SAFE Metotlar

- GET – HEAD – OPTIONS : Sunucu “state” tarafında değişiklik oluşturmazlar. “Read-only” yapısındadırlar.

IDEMPOTENT Metotlar( İlk isteği değil sadece tekrar durumunda olarak düşündüğümüzde daha mantıklı...)

- GET – HEAD - OPTIONS – DELETE – PUT – TRACE : Tekrar durumunda sunucu state yapısında herhangi bir yan etki bırakmazlar. Safe metodlar, idempotent'tır.

**_JSON_**
Javascript Object Notation...

- Veri depolamak veya veri iletmek için kullanılan metin tabanlı bir söz dizimi yapısıdır. Genellikle bir sunucu ve istemci arasında veri alışverişi için veya yazılımların genel ayarları için kullanılan bir formattır.
  <br>

- "Halil" ---> VALID
- 'Halil' ---> UNVALID (Tek tırnak desteklemiyor.)

```
{
"id":1,
"title": "Matrix",
"actors": ["Keanu Reeves", "Carrie Anne Moss"],
"published_year": 1999,
"genre": {
"id": 6,
"name": "Action"
},
"rating": 7.9
}
```

Check işlemini ----> [JSONLINT](https://jsonlint.com/) sitesinden yapabilirsiniz.
