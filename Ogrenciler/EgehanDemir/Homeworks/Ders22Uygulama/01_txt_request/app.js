document.getElementById("btn").addEventListener("click",function(){
    const request = new XMLHttpRequest();
    console.log(request);
    request.onreadystatechange = function(){
        console.log(this.readyState);
        if(this.status == 200 && this.readyState== 4 ){
            console.log(this.responseText);
        }
    };
    request.onload = function(){
        if(this.status == 200){
            document.getElementById("veri").textContent = this.responseText;
        }
    }
    request.open("GET","ornek.txt",true);
    request.send();
});