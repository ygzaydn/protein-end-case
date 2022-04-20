Üye Ol Sayfa Detayları
- Tasarıma göre design edilmeli
- Kullanıcılar bu sayfadan üye olabilmeliler
- Email ve Password alanları zorunlu alanlar olmalı
- Email ve Password alanlarının validasyonu UI tarafında da yapılmalı
- Email valid olmalı ve en az 8 ve en fazla 20 karakter uzunluğunda bir password girilmeli
- İşlem başarılı ise kullanıcı index sayfasına signed-in olarak yönlendirilmeli
- İşlem başarısız ise kullanıcıya tasarıma göre hata mesajı gösterilmeli
- İşlem başarılı ise API'den gelen ve cookie olarak set edilen Auth_Token değeri tüm
authentication gerektiren requestlerde header'a Bearer token olarak eklenmeli
- Zaten login olan kullanıcılar bu sayfaya gelmeye çalıştığında bu sayfayı göremeden index
sayfasına yönlendirilmeli

Üye Girişi Sayfa Detayları
- Tasarıma göre design edilmeli
- Kullanıcılar bu sayfadan üye girişi yapabilmeli
- Email ve Password alanları zorunlu alanlar olmalı
- Email ve Password alanlarının validasyonu UI tarafında da yapılmalı
- Email valid olmalı ve en az 8 ve en fazla 20 karakter uzunluğunda bir password girilmeli
- İşlem başarılı ise kullanıcı index sayfasına signed-in olarak yönlendirilmeli
- İşlem başarısız ise kullanıcıya tasarıma göre hata mesajı gösterilmeli
- İşlem başarılı ise API'den gelen ve cookie olarak set edilen Auth_Token değeri tüm
authantication gerektiren requestlerde header'a Bearer token olarak eklenmeli
- Zaten login olan kullanıcılar bu sayfaya gelmeye çalıştığında bu sayfayı göremeden index
sayfasına yönlendirilmeli

Index Sayfa Detayları

- Tasarıma göre design edilmeli
- Hesabım ve Ürün Ekle butonları kullanıcı authanticated ise gösterilmeli aksi halde Üye
Girişi butonu gözükmeli
- Hesabım butonuna tıklanınca Hesabım sayfasına gitmeli
- Ürün Ekle butonuna tıklanınca ürün ekleme sayfasına gitmeli
- Tasarıma göre tüm kategoriler listelenmeli ve kullanıcı tıkladığında listelenen ürünler
tıklanılan kategoriye göre filtrelenmeli, default olarak tüm ürünler çekilmeli
- Herhangi bir kategori tıklandığı zaman, seçili kategori queryde tutulmalı. Kullanıcı URL
üzerinden siteye geldiğinde queryde bir kategori değeri varsa, o kategori seçili gelmeli

Ürün Detay Sayfa Detayları

- Tasarıma göre design edilmeli
- Teklif Ver butonu üründen gelen data içerisindeki isOfferable alanına göre gösterilmeli ya
da gösterilmemeli
- Teklif Ver butonuna tıklanınca tasarımdaki gibi bir pop-up çıkmalı ve oradan hazır teklifler
yapılmalı ya da kullanıcı kendisi teklif girebilmeli. Teklif girme alanı number olmalı ve
buraya validasyon eklenmeli
- Hazır yüzdelik tekliflerden birisi seçildiğinde, fiyat üzerinden ilgili değer hesaplanıp API
tarafına yollanmalı (offeredPrice), mesela, 100₺ olan ürün için %40 değeri seçilirse, 40₺
teklif yapılmalı
- Eğer bir kullanıcı bir ürüne teklif verdiyse, o ürünün detayına gelince Teklif Ver butonu
yerine Teklifi Geri Çek butonu gözükmeli. Tıklanınca teklif geri çekilmeli
- Kullanıcı teklif yapmadan bir ürünü direk satın alabilir. Satın Al butonuna tıklanınca ilgili
pop-up gözükmeli ve kullanıcı aksiyonuna göre hareket edilmeli
- Kullanıcı ürünü satın alınca, ilgili ürün içerisindeki Satın Al ve Teklif Ver butonları
gizlenmeli. Bu Ürün Satışta Değil şeklinde tasarımdaki gibi bir yazı gösterilmeli. Bu yazı
ürün datası içerisindeki isSold alanının değerine göre gösterilmeli
Hesabım Sayfa Detayları

- Tasarıma göre design edilmeli
- Kullanıcı signed-in değilse bu sayfayı görüntüleyememeli
- Tasarıma göre aktif olan tab için ilgili offer'lar listelenmeli
- Alınan tekliflere Onayla ve Reddet butonları ile cevap verilebilmeli
- Verilen teklif onaylandığında yanında satın al butonu gözükmeli
- Ürün detay sayfasındaki gibi Satın Al butonuna tıklanınca ilgili pop-up gözükmeli. Satın
Al'a tıklayınca Teklif Verdiklerim listesindeki ürünün durumu güncellenmeli
- Ürün Ekleme Sayfa Detayları
- Tasarıma göre design edilmeli
- Kullanıcı signed-in değilse bu sayfayı görüntüleyememeli
- İlgili validasyonlar eklenmeli:
- Ürün Adı alanı maksimum 100 karakter uzunluğunda olmalı ve zorunlu bir alan olmalı
- Açıklama alanı maksimum 500 karakter uzunluğunda olmalı ve zorunlu bir alan olmalı
- Kategori alanı ilgili endpointten çekilen kategorileri listelemeli ve en fazla bir kategori
seçilebilmeli. Bu alan zorunlu bir alan olmalı
- Renk alanı ilgili endpointten çekilen renkleri listelemeli ve en fazla bir renk seçilebilmeli.
Bu alan zorunlu bir alan olmamalı
- Marka alanı ilgili endpointten çekilen markaları listelemeli ve en fazla bir marka
seçilebilmeli. Bu alan zorunlu bir alan olmamalı
- Kullanım Durumu alanı ilgili endpointten çekilen kullanım durumlarını listelemeli ve en
fazla bir kullanım durumu seçilebilmeli. Bu alan zorunlu bir alan olmalı

- Ürün Görseli alanından en fazla bir ürün görseli eklenmeli. Eklenen ürün görseli
istenildiği zaman silinebilmeli. Bu alan zorunlu bir alan olmalı. Sadece png/jpg/jpeg
formatında görseller eklenmeli. Maksimum 400kb değerinde görseller eklenilebilmeli
- Fiyat alanı number olmalı ve zorunlu bir alan olmalı
- Teklif Opsiyonu alanı boolean bir değer olmalı ve default olarak false olmalı
Ek Proje Gereksinimleri:
- Tüm UI responsive olmalı
- Desktop ve Responsive iletilen tasarıma göre yapılmalı.
- İlgili yerlere kendi insiyatifinizde loading indicator ekleyebilirsiniz. Mesela productlar
yüklenirken ya da Satın Al gibi async operasyonlar başlatıldığında loading indicator
gösterilebilir
- Performanslı bir uygulama olmalı ve CLS gibi web-vitals parametrelerine dikkat edilmeli
- Accessibility'e önem verilmeli
- Typescript, SSR, Unit-testing ve Code-splitting gibi geliştirmelerin olması öne çıkaran bir
özellik olabilir
- Yazılan projenin nasıl ayağa kalktığı ve benzeri detayların paylaşıldığı bir README.md file'ı
projlere eklenmeli