const row = document.querySelector(".row");
galery();
// const Adet = Number(prompt("Albüme eklenecek fotoğraf sayısı?"));
function galery(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/photos");
    xhr.onload = function(){
        if(this.status == 200){
            const response = JSON.parse(this.responseText);
            response.forEach(function(object){
                if(object.id <= 16){
                    row.innerHTML += `<div class="col p-2">
                    <div class="card" style="height: 450px;">
                      <img src="${object.thumbnailUrl}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${object.title}"</h5>
                      </div>
                      <!-- Button trigger modal -->
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Resim Önizleme
                      </button>

                      <!-- Modal -->
                      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1 class="modal-title fs-5" id="staticBackdropLabel">Resim Galerisi</h1>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            <img src="${object.url}" class="card-img-top" alt="...">
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
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
//Post-Api
postData();
function postData(){
    const data={
      "albumId":1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }

    let json =JSON.stringify(data);
    let url="https://jsonplaceholder.typicode.com/photos";
    let xhr=new XMLHttpRequest();
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/json; charset=utf-8");

    xhr.onload=function(){
      if(xhr.status===201 && xhr.readyState===4)
      {
        var post=xhr.responseText;
        console.log(post);
      }
    }
    xhr.send(json);
}