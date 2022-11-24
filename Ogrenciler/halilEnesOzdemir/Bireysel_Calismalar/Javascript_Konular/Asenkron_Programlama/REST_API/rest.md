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
