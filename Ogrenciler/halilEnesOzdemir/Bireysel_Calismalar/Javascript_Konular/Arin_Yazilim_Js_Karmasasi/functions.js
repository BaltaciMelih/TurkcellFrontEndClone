// FONKSİYONLAR

/* // Function Declaration

console.log(square(3)); // ÇALIŞIR...

function square(num) {
  //PARAMETRE ->  Fonksiyonu oluştururken kullanılan.
  return num ** 2;
}

square(5); // ARGÜMAN -> Fonksiyonu çalıştırırken kullanılan.

// console.log(square(21));
// console.log(square(4));
// FUNCTION DECLARATION ---> HOISTED OLARAK ÇALIŞIR...
 */
//--------------- FUNCTION EXPRESSION-------------

const square = function (num) {
  return num * num;
};

console.log(square(5));

// FIRST-CLASS FUNCTIONS ->
