//Fetch Api
const row = document.querySelector(".row");
FetchUygulama();
const Adet = Number(prompt("Albüme eklenecek fotoğraf sayısı?"));
function FetchUygulama(){
    fetch("https://jsonplaceholder.typicode.com/photos").then(
            response =>{
             return   response.json()
            }
    ).then(responseJson=>{
                responseJson.forEach(function(object){
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
                })
             }
        )
}