// Array ve array metodları

let cars = ["BMW", "Mercedes", "Audi", "Fiat"]
console.log(cars)

//Dizi Kaç Elemanlı için length
console.log(cars.length)


// ilk ve son eleman için index numaraları
console.log(cars[0])
console.log(cars[3])


// dizinin sonuna yeni elaman eklemek için
cars[4] = "Renault"
console.log(cars)
// alternatif yöntem
cars.push("Mazda");
console.log(cars)

//dizinin başına eleman ekleme (unshift)
cars.unshift("Toyota")
console.log(cars) 
// Dizinin en sonundan eleman silmek (pop)
cars.pop();
console.log(cars)

// Dizinin en başından eleman silmek (shift)
cars.shift();
console.log(cars)

//Dizi elemanlarını tersine çevirme (reverse)
cars.reverse();
console.log(cars)

// Dizi elemanlarını alfabetik sıraya getirmek için (sort)
cars.sort();
console.log(cars)

// numbers dizi elemanlarını sıralamak
let numbers = [2 , 4 , 12 , 22 , 28 , 82 , 17]

console.log(numbers.sort());

// numbers dizi düzgün sıralamak elemanlarını sıralamak

function sıralama(a,b){
    if(a>b) return 1
    if(a==b) return 0
    if(a<b) return -1
}
console.log(numbers.sort(sıralama));

//audi bu dizinin bir elemanı mıdır??

console.log(cars.indexOf("Renault"));
console.log(cars.includes("Audi"))

// iki dizi birleştirme concat

let mix = cars.concat(numbers)
console.log(mix)

// son iki eleman silme
mix.pop();
console.log(mix)
console.log(mix)
// mix.splice(2,)
console.log(mix)