// Mapler-Key(Anahtar)-Value(Değer)
let denemeMap=new Map(); //Yeni bir map oluşturma

const key1="Hacı";
const key2={a:10, b:20};
const key3= () => 5;

//set değer ekleme
denemeMap.set(key1,"İlk değer"); //mapta değer ekleme
denemeMap.set(key2,"İkinci değer");
denemeMap.set(key3,"Üçüncü değer");


// denemeMap.clear();  //map elemanlarını tümünü kaldırdı.

// denemeMap.delete(key2); //istenilen elemanı silme

//MAP Entries
// console.log(denemeMap.entries());
//  console.log(...denemeMap.entries());

//  let metin = "";
//  let i=0;
//  for (const x of denemeMap.entries()) {   //anahtar ve değer nesnelerini birlikte döndürür
//      metin =x;
//      console.log(metin);
//      document.getElementById("deneme"+i).innerHTML = metin;
//      i++;
//  }

  denemeMap.forEach(function(value,key){     //anahtar ve değerleri döndürür bütün mapteki
     console.log(key,value);
   });

// console.log(denemeMap.has("Hacı"));  //değerin olup olmadığının kontrolü

// console.log(denemeMap.keys());

// let metin = "";
// for (const i of denemeMap.keys()) {  //mapteki anahtarları verir.
//     metin += i;
// }
// console.log(metin);

//Values
// console.log(denemeMap.values());

// let total=0 ;
// for (const x of denemeMap.values()) {  //mapteki değerleri verir.
//   total += x;
// }
// console.log(total);

// console.log(denemeMap.size);  //map in boyutunu verdi.


//  console.log(denemeMap);
// console.log(typeof denemeMap);

//get- değer okuma
// console.log(denemeMap.get("Hacı")); //değerleri okuma (ilk değer diye çıktı verir.)
// console.log(denemeMap.get(key2));
// console.log(denemeMap.get(key3));


// const students=new Map();
// students.set("Okan",44);// key - value
// students.set("Sinem",33);
// students.set("Halil",24);

//For-Each
//  students.forEach(function(value,key){
//      console.log(key,value);
// });

//For of
// for(const [key,value] of students) //for of ile değerleri dolaşıp aldık map in
// {//Destructing
//      console.log(key,value);
// }




//Set-Kümeler ----------------------------------
//  const mySet=new Set();
//  mySet.add(50);
//  mySet.add(2.23);
//  mySet.add("Deneme");
//  mySet.add(false);
//  mySet.add([1,2,3]);
//  mySet.add({a:1,b:2});

 const arr=[1,2,7,4,3,2,1];
const mySet=new Set(arr); //yeni set ekledik içine arr dizisini attık.
//   console.log([...mySet[2]]);   //set içindeki veriye tek tek ulaşım sağlayamadım******
mySet.add(6); //set e eleman ekledim.
// mySet.delete(3); // setten eleman silme
//console.log(mySet.has(4));  //değerin olup olmadığı kontrolü

//For-Each
//  mySet.forEach(function(value){  //her eleman için
//      console.log(value);
//  })

//For of
// for(const val of mySet){  //foreach gibi değerleri aldı
//      console.log(val);
//  }



// mySet.clear();  //set in içini sildi

//Entries
//  console.log(mySet.entries());  // value-value
// let metin = "";
//  for (const deger of mySet) {
//     metin += deger + " ";
//  }
//  console.log(metin);
//  document.getElementById("deneme0").innerHTML = metin;

//Values
// console.log(mySet.values()); //değerleri verir.
//Keys
// console.log(mySet.keys());   //tüm değerlerini verir yine


// console.log(mySet.size);  //set in boyutunu verdi

 console.log(mySet);
// console.log(typeof mySet);



// const a=[1,2,3,4,5]; //Dizilerde kesişim
// const b=[2,3,4,5,6];

// const B=new Set(b);
// const C=new Set(a.filter(num => B.has(num)));
// console.log(C);

