//Yönetici Giriş Ekranı


// let giris = prompt("Kim o??")

// if(giris=="Çıkış"){
//     console.log("Çıkış Yapıldı")
// }else if(giris!=="Yönetici"){
//     console.log("Seni Tanımıyorum")
// }else if(giris=="Yönetici"){
//     let password = prompt("Şifre Giriniz");
//     if(password == 123){
//         console.log("Hoşgeldin Yönetici")
//     }else{
//         console.log("Yanlış Şifre")
//     }

// }else if(giris=="Çıkış"){
//     console.log("Çıkış yapıldı")
// }


// Object Literals Kullanımı

let aracBilgileri = {
    id: "Bmw 116d_1",
    model: "116d",
    yıl: 2020,
    renk: "Beyaz",
    servisKayıtları: [
        {
            id: "Bmw_116d_1_1",
            tarih: ("01.30.2016"),
            km: 130000,
            toplamÜcret: 900,
            detay: [
                {
                    id: "Bmw_116d_1_1_1",
                    acıklama: "Yağ değişimi",
                    ücret: 300
                },
                {
                    id: "Bmw_116d_1_1_2",
                    acıklama: "filtre  değişimi",
                    ücret: 300
                },
                {
                    id: "Bmw_116d_1_1_3",
                    acıklama: "Fren hidroliği değişimi",
                    ücret: 300
                },
            ]
        },
        {
            id: "Bmw_116d_1_2",
            tarih: ("01.30.2017"),
            km: 280000,
            toplamÜcret: 1800,
            detay: [
                {
                    id: "Bmw_116d_1_2_1",
                    acıklama: "Yağ değişimi",
                    ücret: 350
                }, 
                {
                    id: "Bmw_116d_1_2_2",
                    acıklama: "Filtre değişimi",
                    ücret: 350
                }, 
                {
                    id: "Bmw_116d_1_2_3",
                    acıklama: "Fren Hidroliği değişimi",
                    ücret: 300
                },
                {
                    id : "Bmw_116d_1_2_4",
                    acıklama : "Balata değişimi",
                    ücret : 800
                },    
            ]

        }
    ]
}

console.log(aracBilgileri)