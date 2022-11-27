const input = document.querySelector('#name');
const btn = document.querySelector('#btn');
const nameout = document.querySelector('#name-out');
const numberout = document.querySelector('#number-out');

btn.addEventListener('click', calculate);

// const inputValue = [];

function calculate(){
    let inputValue;
    inputValue = input.value.trim();
    nameout.value = inputValue;
    let inputChar = inputValue.split('');
    console.log("input value:", inputValue);
    console.log("input char: ",inputChar);
    
    inputChar.forEach((item) => {
        char(item);
        
    })
}

function char(val){
    let number ;
    switch(val) {
        case "a":
        case "j":
        case "s":
        case "A":
        case "J":
        case "S":
           
          number = 1;
          console.log("number", number);
          break;
        case "b":
        case "k":
        case "t":
        case "B":
        case "K":
        case "T":
            number = 2;
            console.log("number", number);
          break;
        case "c":
        case "l":
        case "u":
        case "C":
        case "L":
        case "U":
            number = 3;
            console.log("number", number);
          break;
        case "d":
        case "m":
        case "v":
        case "D":
        case "M":
        case "V":
            number = 4;
            console.log("number", number);
            console.log(typeof number);
          break;c
        case "e":
        case "n":
        case "w":
        case "E":
        case "N":
        case "W":
            number = 5;
            console.log("number", number);
          break;
        case "f":
        case "o":
        case "x":
        case "F":
        case "O":
        case "X":
            number = 6;
            console.log("number", number);
          break;
        case "g":
        case "p":
        case "y":
        case "G":
        case "P":
        case "Y":
            number = 7;
            console.log("number", number);
          break;
        case "h":
        case "q":
        case "z":
        case "H":
        case "Q":
        case "Z":
            number = 8;
            console.log("number", number);
          break;
        case "i":
        case "r":
        case "I":
        case "R":
            number = 9;
            console.log("number", number);
          break;
        default:
            number = 0;
            console.log("number", number);
        }
      
        
        return number;
    }

let sentence = "there is no tomorrow";
let words = sentence.split(" ");
let chars = sentence.split()
console.log(words);