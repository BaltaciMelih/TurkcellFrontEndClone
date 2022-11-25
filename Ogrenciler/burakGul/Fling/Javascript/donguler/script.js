// For Döngüsü

// for (var i=0; i<=1000; i++){
//     console.log(i);
// }

// for (var i=0; i<=100; i++){
//     if(i==50){
//         continue;
//     }
//     console.log(i);
// }

// var sehirler = ["istanbul","ankara","izmir","denizli","bursa"];

// for(var i=0; i<sehirler.length; i++){
//     console.log(sehirler[i]);
// }

// While Döngüsü

// var sehirler = ["istanbul","ankara","izmir","denizli","bursa"];

// var i=0;

// while(i<=10){
//     console.log(i);
//     i++;
// }

// var i=0;

// while(i<sehirler.length){
//     console.log(sehirler[i]);
//     i++;
// }

// uygulama 1:

// for(var i=10; i<=100; i++){
//     console.log(i);
// }

// uygulama 2:

// var i=10;

// while(i<=100){
//     console.log(i);
//     i=i+5;
// }

// uygulama 3:

var m_username = "admin";
var m_password = "12345";
var loggedin = false;

while(!loggedin){

    var username =prompt("kullanıcı adı :");
    var password =prompt("parola :");

    if((m_username==username) && (m_password==password)){
        console.log("giriş yapıldı");
        loggedin=true;
    }else{
        console.log("hatalı giriş");
    }
}