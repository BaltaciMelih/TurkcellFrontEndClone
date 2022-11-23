// let name = "Omur"
// let surname = "Kasap"
// let domain = "turkcell.com"
// //console.log ( name + surname + "@" + domain) // böyle uzun uzun yazmadan ters tırnak ile yazabiliriz
// let info = `Merhaba, ${name}, Hoşgeldiniz, 
// Kullanıcı Adınız: ${name + surname},
// Mail Adresiniz ${name + surname + "@" + domain}
// Keyifli alışverişler Dileriz.`

// console.log(info)

//string veri türü ile yazma
let email = "omurkkasap@gmail.com"
let name = "Ömür"
let surname = "Kasap"
console.log(email.length)
// ilk harfi bulmak için console.log içine ([0]) yazıyoruz.
console.log(name[0])
surname= surname.toLocaleUpperCase(2,3)
console.log(surname)
name= name.toLowerCase()
console.log(name)
// String ifade içinde bir şey bulmak için search kullanılır.
console.log(email.search("k"))
console.log(email[6])
// Biryere kadar almak için slice kullanılır.
console.log(email.slice(0,10))
console.log(email.slice(10))
// ifadeyi değiştirmek için replace kullanırız.
email=email.replace("gmail.com","turkcell.com")
console.log(email)


let deneme = document.querySelector("ul#deneme>li>a")
deneme.innerHTML+= " Değişti"
deneme.style.color="green"
deneme.classList.add("btn")
console.log(deneme)