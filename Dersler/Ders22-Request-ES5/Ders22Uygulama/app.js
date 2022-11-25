const row = document.querySelector(".row");
galery();
const Adet = Number(prompt("Albüme eklenecek fotoğraf sayısı?"));
function galery(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/photos");
    xhr.onload = function(){
        if(this.status == 200){
            const response = JSON.parse(this.responseText);
            response.forEach(function(object){
                if(object.id <= Adet){
                    row.innerHTML += `<div class="col">
                    <div class="card">
                      <img src="${object.thumbnailUrl}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${object.title}"</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                    </div>
                  </div>
              
                  `;
                }
            });

        }
    }
    xhr.send();
}
