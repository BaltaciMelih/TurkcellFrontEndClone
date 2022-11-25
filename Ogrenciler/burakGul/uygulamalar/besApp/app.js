const bes = document.getElementById('bes-gallery');
photogallery();
const testModal = Number(prompt('kaç tane resim istersiniz ?'))
function photogallery(){
    const xhr = new XMLHttpRequest();
    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/photos");
        xhr.onload = function(){
            if(this.status == 200){
                const response =JSON.parse(this.responseText);
                response.forEach(function(object){
                    if(object.id<=testModal){
                        bes.innerHTML+=`<div class="card col-lg-4 col-sm-6 " style="width: 18rem;">
                    <img src="${object.url}" class="card-img-top" id="img" alt="..."></div>
                    <div class="card-body"></div>`
                    }
                    
                });
            }  
            
        }
        xhr.send();
};