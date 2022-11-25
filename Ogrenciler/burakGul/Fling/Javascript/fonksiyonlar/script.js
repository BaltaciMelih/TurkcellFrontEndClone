// function topla(a,b){
//    return a+b;
// }

// var sonuc = topla(10,20);
// var sonuc = topla(40,50);
// console.log(sonuc);

// var now=2022;

// function yashesapla(yas){
//     return now-yas;
// }

// var burak= yashesapla(1995);
// var ali=yashesapla(1991);

// console.log(burak);
// console.log(ali);

// function emeklilikhesapla(ad,yas){
//     var k_yas=yashesapla(yas);
//     var emeklilik= 65-k_yas;

//     if(emeklilik>0){
//         console.log(ad+' '+emeklilik+' yıl sonra emekli olabilir');
//     }else{
//         console.log(ad+' zaten '+(emeklilik*-1)+ ' yıl önce emekli olmuş');
//     }
  

    
// }
// emeklilikhesapla('burak','1995');
// emeklilikhesapla('ali','1945');

// uygulama:

// function tekcift(sayi){
//     if(sayi%2==0){
//         return true;
//     }else{
//         return false;
//     }
// }

// if(tekcift(18)){
//     console.log('sayı çift');
// }else{
//     console.log('sayı tek');
// }

// function faktoriyel(sayi){
//     var sonuc = 1;

//     for(var i=2;i<=sayi;i++){
//         sonuc*=i;
//     }
//     return sonuc;
// }
// console.log(faktoriyel(4));

// var modeller=['opel','mazda','toyota'];
// function yazdir(dizi){

//     dizi.forEach(function(item){
//         console.log(item);
//     });
// }

// yazdir(modeller);

// uygulama 2:

var product= {
    name : 'Samsung S8',
    price : 3000,
    description :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nobis?',
    summary : function(){
        var ozetcumle=[];
        var maxKarakter=20;
        var cumle=this.description;

        if(maxKarakter>cumle.length){
            this.shortDescription= cumle;
            return cumle;
        }else{
            var kelimeler=cumle.split(' ');
            var toplamKarakter = 0;
            for(var i=0;i<kelimeler.length;i++){
                ozetcumle.unshift(kelimeler[i]);
                toplamKarakter+=kelimeler[i].length;

                if(toplamKarakter>maxKarakter){
                    break;
                }}}
                this.shortDescription= ozetcumle.join(' ')+'...';}
        };
product.summary();
console.log(product);