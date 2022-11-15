const person = {
  name: "Varol Maksutoğlu",
  year: 1985,
  salary: 10000,
  
};
const langs = ["pyton", "c#", "js"]

// For in

// for(let prop in person) {  //prop bize keyleri döndü name year salary - dor döngüsü ile kullanmamız lazım
//   console.log(prop, person[prop]); 
// }

// for (let i in langs) {
//   console.log(langs[i]);
// }


//  for of  

// for (let value of person) {  // objeler için kullanamayız 
//   console.log(value);
// }

for(let value of langs){
  console.log(value);  //! yanlarına indexi ile beraber yazdıralım !!!!!!!!!!!!!
}