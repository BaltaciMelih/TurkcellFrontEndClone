const deneme = document.getElementById("genel");
galery();
const menemen = Number(prompt("Kaç Tane Fotoğraflık Bir Albüm İstersiniz?"));
function galery(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/photos");
    xhr.onload = function(){
        if(this.status == 200){
            const response = JSON.parse(this.responseText);
            response.forEach(function(object){
                if(object.id <= menemen){
                    deneme.innerHTML += `<div class="card col-lg-4 col-sm-12 " style="width: 18rem;">
                    <img src="${object.url}" class="card-img-top" id="img" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" id="title">${object.title}</h5>
                    </div>
                </div>`
                }
            });

        }
    }
    xhr.send();
}


