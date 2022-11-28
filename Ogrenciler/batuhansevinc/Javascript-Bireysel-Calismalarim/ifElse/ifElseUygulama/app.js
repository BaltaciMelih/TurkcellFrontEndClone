// 1- Bir sayının 10-50 arasında olup olmadığını kontrol et.
// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol et.
// 3- x,y,z sayılarının büyüklük karşılaştırmasını yap.
// 4- 2 vize ve 1 final notuna göre hesaplanan ortalama için;
        // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
        // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
        // c- Finalden 70 aldığında ortalama 50' nin altında olsa bile dersten geçilsin.

        
        
        // 1.)

    // let sayi = 30; 
    // if (sayi >10 && sayi < 50){
    //     console.log("Sayı İstenilen Aralıktadır.");
    // }
    // else{
    //     console.log("Sayi İstenilen Aralıkta Değildir.")
    // };


        // 2.)

    // let sayi = 27;
    // if (sayi >0 && sayi % 2 !== 0) {
    //     console.log("Sayı pozitif tek sayıdır.")
    // } 
    // else{
    //     console.log("Sayı pozitif tek sayı değildir.")
    // }


        // 3.)

    // let x; let y; let z;
    //     x=3; y=3; z= -3;
    // if ( x>y && y>z){
    //     console.log(x,">",y,">",z)        
    // }
    // else if(x>z && z>y) {
    //     console.log(x,">",z,">",y)        
    // }
    // else if (y>x && x>z){
    //     console.log(y,">",x,">",z)
    // }
    // else if (y>z && z>x){
    //     console.log(y,">",z,">",x)
    // }
    // else if (z>x && x>y){
    //     console.log(z,">",x,">",y)
    // }
    // else if (z>y && y>x){
    //     console.log(z,'>',y,'>',x)
    // }
    // else if (x==y && x>z){
    //     console.log(x,"=",y,">",z)
    // }
    // else if (x==y && x<z){
    //     console.log(z,">",x,"=",y)
    // }
    // else if (x==z && x>y){
    //     console.log(x,"=",z,">",y)
    // }
    // else if (x==y && x<y){
    //     console.log(y,">",x,"=",z)
    // }
    // else if (z==y && z>x){
    //     console.log(z,"=",y,">",x)
    // }
    // else if (z==y && x>z){
    //     console.log(x,">",z,"=",y)
    // }
    // else {
    //     console.log(x,"=",y,"=",z)
    // }


        // 4.)

        let vize1 = 100; let vize2 = 100; let final = 49;
        let ortalama = (vize1+vize2)*0.25 + final*0.5;
        // if ((ortalama >= 50 && final >= 50) || final >= 70){
        //     console.log("Tebrikler.. Dersi Geçtiniz.")
        // }
        // else{
        //     console.log("Üzgünüz. Dersten Başarısız Oldunuz.")
        // }
        
        let sonuc = ortalama >= 50 && final >= 50 || final >= 70 ? console.log("Tebrikler.. Dersi Geçtiniz.") : console.log("Üzgünüz. Dersten Başarısız Oldunuz.");
        