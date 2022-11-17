let number = Array.from(document.getElementsByClassName("tus"));
let display = document.getElementById("screen");

console.log(number);

number.map(tus => {
    tus.addEventListener("click",(e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = "";
                break;
            case "Sil":
                if(display.innerText != "null"){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
                 
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                } 
                catch {
                    display.innerText = "error";
                }
                break;























            default:
                display.innerText += e.target.innerText;
        }
    });
    
})
;