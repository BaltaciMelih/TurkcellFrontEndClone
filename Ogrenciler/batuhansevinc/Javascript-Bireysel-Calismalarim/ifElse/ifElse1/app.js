let userName = "BatuhanSevinç";
let password = "12345";
let isLoggedIn = (userName ==='BatuhanSevinç');

if (isLoggedIn){
    if (password == "12345"){
    console.log("Uygulamaya Giriş Yapıldı.");
}
else{
    console.log("Parola Yanlış")
}
}
else {
    console.log("Kullanıcı adı Yanlış.");
}