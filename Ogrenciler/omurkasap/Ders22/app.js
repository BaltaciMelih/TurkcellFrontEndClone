document.getElementById("btn").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.onreadystatechange = function () {
        console.log(this.responseText);
    }
    
};
xhr.onload = function () {
    if (this.status == 200 && this.readyState == 4) {
        console.log(this.responseText)
    } 
}