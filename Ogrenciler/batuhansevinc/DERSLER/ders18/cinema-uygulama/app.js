const container = document.querySelector(".container");
addEventListener();
function seatFunction(e){
    if (e.target.classList.contains("seat") && !e.target.classList.contains("full")){
        e.target.classList.toggle("select")
        
    }
}
function addEventListener(){
    container.addEventListener("click",seatFunction);
}

container.addEventListener("click",seatFunction)