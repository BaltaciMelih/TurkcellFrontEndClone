// var opel ={
//     marka : 'Opel',
//     model : 'Corsa',
//     yil : '2015',
//     renk : 'mavi',
//     otomatik : true
// };
// console.log(opel.marka);
// console.log(opel['renk']);

// var toyota = new Object();
// toyota.marka='Toyota';
// toyota.model='Yaris';
// toyota.yil='2012';
// toyota.renk='kırmızı';
// toyota.otomatik=true;
// console.log(toyota.model);

// toyota.model='Auris'
// console.log(toyota);

// var arabalar= [
//     {
//         marka : 'Opel',
//         model : 'Corsa',
//         yil : '2015',
//         renk : 'mavi',
//         otomatik : true
//     },
//     {
//         marka : 'Mazda',
//         model : 'CX-3',
//         yil : '2017',
//         renk : 'beyaz',
//         otomatik : true
//     }
// ];
// console.log(arabalar[0].renk);

// for(var i=0; i<arabalar.length; i++){
//     console.log(arabalar[i].marka);
// }

// uygulama 1 :

var burak ={
    ad:'Burak',
    soyad:'Gül',
    cinsiyet: 'Erkek',
    telefon:'02582119876',
    adres:'çankaya Ankara',
    meslek:'bilgisayar mühendisi',
    diller:['ingilizce','almanca'],
    hobiler:['sinema','futbol','yemek yapmak']
};

console.log(burak.diller.length);

burak.hobiler.forEach(function(hobi){
    console.log(hobi);
});

var personel = [
    {
        ad:'Burak',
        soyad:'Gül',
        cinsiyet: 'Erkek',
        telefon:'02582349876',
        adres:'çankaya Ankara',
        meslek:'bilgisayar mühendisi',
        diller:['ingilizce','almanca'],
        hobiler:['sinema','futbol','yemek yapmak']
    },
    {
        ad:'Ayşe',
        soyad:'Gül',
        cinsiyet: 'Kadın',
        telefon:'02582569876',
        adres:'çankaya Ankara',
        meslek:'Biyolog',
        diller:['ingilizce','almanca'],
        hobiler:['sinema','futbol','yemek yapmak']
    },
    {
        ad:'Ali',
        soyad:'Gül',
        cinsiyet: 'Erkek',
        telefon:'02582119876',
        adres:'çankaya Ankara',
        meslek:'elektronik mühendisi',
        diller:['ingilizce','almanca','fransızca'],
        hobiler:['opera','voleybol','yemek yapmak']
    }
];

personel.forEach(function(personel){
    console.log('*****************');
    console.log(personel.ad+' '+personel.soyad);

    personel.diller.forEach(function(dil){
        console.log(dil);
    });
    console.log('*****************');
});

