const row = document.querySelector(".row");
FetchUygulama();
// const Adet = Number(prompt("Albüme eklenecek fotoğraf sayısı?"));
function FetchUygulama(){
    return new Promise((resolve,reject)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then(responseJson=>{
               resolve( responseJson.forEach(function(object){
                    if(object.id <= 12){
                        row.innerHTML += `<div class="col">
                        <div class="card">
                          <div class="card-body" style="height:250px;">
                            <h5 class="card-title">${object.title}</h5>
                            <hr>
                            <p class="card-text">${object.body}</p>
                          </div>
                        </div>
                      </div>
                      `;
                    }
                }))
             }
        )
    .catch((err)=>reject(err));
    });
}