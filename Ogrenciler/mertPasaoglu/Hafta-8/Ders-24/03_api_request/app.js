document.addEventListener('DOMContentLoaded', add);
function add(){
    const xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/photos" 
    );
    xhr.onload = function(){
        if(this.status){
            const response = JSON.parse(this.response);
            console.log(response);
            let rate = response[0] 
            console.log(rate);
            document.getElementById("img").textContent = this.response;
        }
    }
    xhr.send();
}