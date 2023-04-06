


# Sprint 10 Challenge: Minnet Günlüğü

Bu projede hafta boyunca öğrendiğiniz, `redux` özellikleri, `redux thunk` middleware'i ve `localStorage` ile bir "Minnet günlüğü" yapacaksınız.

**redux-thunk sayesinde bir API'ye request yapabilecek, localStorage sayesinde ise uygulamanıza eklediğiniz verileri kaybetmeden kullanabileceksiniz.**

## Giriş

`Minnet günlüğü`, kişinin hayatındaki olumlu şeylere odaklanması,
minnettarlık ve şükran duygusunu hissetmesi için sık sık
teşekkür ettiği şeyleri yazdığı bir tür günlüktür. Zihinsel iyi
oluş için basit fakat oldukça etkili bir yöntemdir ve kişinin
hayata pozitif bir bakış açısı geliştirmesine yardımcı olabilir.

Bu günlük içerisinde daha önce eklenmiş notlar listelenmeli, notlar silinebilmeli ve yeni notlar eklenebilmelidir.

**_Görevlerinizi tek tek tamamladığınızdan ve ilerlemeden önce her bir görevi test ettiğinizden emin olun._**

## Talimatlar

### Görev 1: Proje Kurulumu

- [ ] Forklayın.
- [ ] Klonlayın
- [ ] Ana dizine gidin
- [ ] `npm install`
- [ ] `npm start`

### Görev 2: Proje Gereksinimleri

Yeni not ekleme ve silme işlemi esnasında bir API'ye request atılmalı ve gelen cevaba göre `store` ve `localStorage` güncellenmelidir.

LocalStorage'ı minik bir veritabanı olarak kullanmak için uygulama eğer varsa daha önce localStorage'a kaydedilmiş verilerle başlatılmalı ve `redux store`'unda yapılan her değişiklik localStorage'a da yansıtılmalıdır.

- [ ] Projeyi inceleyin ve componentlar arasındaki ilişkiyi bulun.

- [ ] `actions.js` dosyasını inceleyin, kod eklemeniz gereken yerleri bulun.

- [ ] `reducers.js` dosyası içerisinde store oluştururken kullanacağınız `reducer` fonksiyonunuzu `actions.js` dosyasına göre oluşturun. State başlangıç değerleri için şimdilik `baslangicDegerleri` ni kullanabilirsiniz.

- [ ] `redux`, `react-redux` ve `redux-thunk` paketlerini projenize ekleyin ve `index.js` dosyası içerisinde redux store unuzu oluşturun. redux-thunk paketini middleware olarak eklemeyi unutmayın.

- [ ] `PostList.js` dosyasında listelemek üzere store içerisindeki notları `useSelector` kullanarak alın ve `notlar` arrayine eşitleyin.

- [ ] `PostForm.js` dosyasındaki form submit edildiğinde, actions içerisinden `notEkleAPI` actionunu, formun verisi ile dispatch edin. Bu kısmı ekledikten sonra `actions.js` dosyasında gerekli değişiklikleri, yönergeleri takip ederek yapın.

- [ ] `Post.js` içerisinde silme eylemini not id si ile dispatch edin ve yine `actions.js` dosyasında gerekli değişiklikleri, yönergeleri takip ederek yapın.

- [ ] Ekleme ve silme işlemlerinden sonra kullanıcıya geri bildirim vermek için `react-toastify` paketini kullanın.

### Görev 3: Redux store'u localStorage içerisindeki verilerle başlatmak

Tarayıcınızda daha önceden `localStorage` içerisinde Minnet Günlüğü uygulaması tarafından depolanmış veri varsa, uygulamanız bu verileri kullanarak açılmalıdır. (Bu sayede tarayıcınızı kapatmış ya da yenilemiş olsanız bile notlarınız kaybolmaz.)

- [ ] `reducer.js` dosyasındaki localStorage ile ilgili fonksiyonları inceleyin ve yapmak istediğiniz eylemi bu fonksiyonları kullanarak nasıl yapabileceğinizi kurgulayın. gerekli fonksiyonları bulacaksınız, bunları inceleyin ve kullanın. kontrol edin ve eğer varsa `redux store`'unuzu bu verilerle başlatacak değişiklikleri yapın.

- [ ] Reducer içerisinde yaptığnız değişiklikler sonrasında localStorage içerisinde de aynı değişiklikleri yansıtmak için reducer fonksiyonunuza gerekli kodları ekleyin.

### Esnek Görevler

- [ ] En son eklenen notun en yukarıda görünmesi için neler yapılabilir? Düşünün ve uygulayın.
- [ ] Bu uygulamada kullanılabilecek başka tasarımlar arayın ve buna uygun olarak layoutı ve renkleri değiştirin.
- [ ] Uygulamaya yeni fonksiyonellikler eklemeye çalışın.
