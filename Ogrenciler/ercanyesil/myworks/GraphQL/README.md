# GRAPHQL NEDİR

> - Graphql Client Server iletişiminde daha fazla esneklik ve verimlilik ihtiyaçları ile baş edebilmek için ortaya atılmış bir yaklaşımdır.
>
> - Özellikle clıent tarafında hızla değişen isteklerin Rest ile karşılanması proje geliştirme maliyetının artmasını sağladı.
>
> - Bu sıkıntıların önüne geçmek için Graphql geliştirilmiştir ve daha karmaşık işlemleri daha kolay yapabilmek hedeflenmiştir.
>
> - Graphql şema tabanlı çalışır ve tek bir endpoınt uzerinden işlemler gerçekleştirir.
>
> - Tüm data bu endpoint üzerinden iletilir ve ihtiyacımız olan field ler ile server ile iletişim kurulur.

# GRAPHQL ELEMANLARI

- Types
  - Veritabanında bulunan tabloların ve alanların tanımlarını olusturur.
- Queries
  - Query içerisine yazılabılecek sorgulama işlemlerini tanımlanır.Buraya yazdığımız tanımlamalar dışında herhangi birşey çalıştıramayız.
- Mutations
  - Veri oluşturma silme ve güncelleme işlemleri için kullanılır.
- Subscriptions
  - Subscriptionlar server tarafında belirli bir event gerçekleştiğinde WebSoket kullanarak belirtilen datayı gerçek zamanlı olarak client’a gönderir.
- Resolvers
  - Graphql çalıştığı zaman yapacak işlemlerin tanımlandığı alanlardır.
