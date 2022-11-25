// var marka =["Opel","Toyota","Mazda","Audi"];
// var model =new Array("Corsa","Yaris","CX-3","A4");
// console.log(marka[3]);
// console.log(model[3]);

// model[0]="Astra";
// console.log(model);

// var auris = ["Toyota","Auris",42,true];
// auris.push('blue');
// auris.unshift('HB');
// auris.pop()
// auris.shift();
// console.log(auris);

// for(var i=0; i<marka.length; i++){
//     console.log(marka[i]);
// }

// if(marka.indexOf('BMW')!==-1){
//     console.log("bulundu");
// }else{
//     console.log("bulunamadı");
// }

// uygulama 1:

// var now=2018;
// var models =["Toyota","Mazda","Mercedes","Opel"];
// var years =['2015','2012','2016','2014'];

// for(var i=0;i<models.length;i++){
//     console.log(models[i]);
// }

// models.forEach(function(element){
//     console.log(element);
// })

// uygulama 2 :

var now=2018;
var models =["Toyota","Mazda","Mercedes","Opel"];
var years =['2015','2012','2016','2014'];

// for(var i=0; i<models.length; i++){
//     console.log(models[i]+' '+years[i]+' model ve '+(now-years[i])+' yaşında bir araçtır');
// }

var model =prompt("model giriniz :");
var year =prompt("model yılını giriniz :");

models.push(model);
years.push(year);

for(var i=0; i<models.length; i++){
    console.log(models[i]+' '+years[i]+' model ve '+(now-years[i])+' yaşında bir araçtır');
}






