function selam(message){
console.log(message);
};

selam("Selam");
selam("nasılsın");
selam("merhaba");
selam();

// function yasHesapla(dogumYili){
//     console.log(new Date().getFullYear() - dogumYili);
// }

function yasHesapla(dogumYili){
    return new Date().getFullYear() - dogumYili;
}

yasHesapla(1992);

function emeklilik(dogumYili){
        let yas = yasHesapla(dogumYili);
        let kalanSene = 65 - yas;
        
        
        if (kalanSene > 0){
            console.log("emekli olamazsınız!!")
        }
        else {
            console.log("emekli oldun")
        }
}
emeklilik(1999)