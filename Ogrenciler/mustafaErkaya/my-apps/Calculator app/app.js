const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

updateDisplay();

function updateDisplay() {
    display.value = displayValue;
}

keys.addEventListener('click', function(e) {
    const element = e.target;

    /* ulaştığımız elementin button olup olmama durumu -- matches metodu ile  */
    if (!element.matches("button")) { 
        return; 
    }

    /* sayı butonumu operator butonu mu öğrenme */
    if (element.classList.contains("operator")) {
        //console.log("operator", element.value);
        handleOperator ( element.value);
        return;  // buradan sonraki kodlar çalışmasın
    }

    if (element.classList.contains("decimal")) {
        //console.log("decimal", element.value);
        inputDecimal();
        updateDisplay();
        return;  // buradan sonraki kodlar çalışmasın
    }

    if (element.classList.contains("clear")) {
        // console.log("clear", element.value);
       
        inputClear();
        updateDisplay();
        return;  // buradan sonraki kodlar çalışmasın
    }

    inputNumber(element.value);
    //console.log("number", element.value);
   updateDisplay();
});

function inputNumber (num) { // numner girişleri
    if (waitingForSecondValue) {
        displayValue = num;
        waitingForSecondValue = false;
    } else {
        displayValue=displayValue === "0"? num: displayValue + num; // displayde sayılara click ile yanyana yazdırma
    }
    console.log(firstValue, displayValue, waitingForSecondValue, operator);
}

function inputDecimal(){
    if (!displayValue.includes(".")){  // "." içermiyorsa 
        displayValue += ".";
    }    // daha önceden nokta olup olmadığını kontrol ediyoruz.
   
}

function inputClear (){
    displayValue = "0";
}

function handleOperator(nextOperator) {
    const value = parseFloat(displayValue);
    if (firstValue === null){
        firstValue = value; // ilk değeri aktarma
    }

    waitingForSecondValue = true;
    operator = nextOperator;
    console.log(firstValue, displayValue, waitingForSecondValue, operator);
}