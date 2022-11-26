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