document.getElementById("btn").addEventListener("click", function(){
const xhr = new XMLHttpRequest();

console.log(xhr);

xhr.onreadystatechange = function() {
    console.log(this.readyState);
    if(this.status == 200 && this.readyState == 4){

    }
};


});