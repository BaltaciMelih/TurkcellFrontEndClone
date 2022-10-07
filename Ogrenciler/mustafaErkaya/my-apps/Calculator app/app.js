const display = document.querySelector(".calculator-input");
const keys = document.querySelector(".calculator-keys");

let displayValue = "0";

function updateDisplay() {
    display.value = displayValue;
}

keys.addEventListener('click', function(e) {
    const element = e.target;

    /* ulaştığımız elementin button olup olmama durumu -- matches metodu ile  */
    if (!element.matches("button")) { 
        return; 
    }

    /* sayı butonumu operator butanu mu öğrenme */
    if (element.classList.contains("operator")) {
        console.log("operator", element.value);
        return;  // buradan sonraki kodlar çalışmasın
    }

    if (element.classList.contains("decimal")) {
        console.log("decimal", element.value);
        return;  // buradan sonraki kodlar çalışmasın
    }

    if (element.classList.contains("clear")) {
        console.log("clear", element.value);
        return;  // buradan sonraki kodlar çalışmasın
    }

    inputNumber(element.value);
    //console.log("number", element.value);
});

function inputNumber (num) {
    displayValue=num;
}