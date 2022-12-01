const album = document.querySelector(".album");
galery();
const mass = Number(prompt("Photo amount?"));
function galery(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/photos");
    xhr.onload = function(){
        if(this.status == 200){
            const response = JSON.parse(this.responseText);
            console.log(response[1]);
            response.forEach(function(object){
                if(object.id <= mass){
                    album.innerHTML += `<div class="card-group">
                    <div class="card" >
                      <img src="${object.thumbnailUrl}" onclick="enlargeImg(this)" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${object.title}"</h5>
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
function enlargeImg(img) {
    img.style.transform = "scale(1.5)";
    img.style.transition =
      "transform 0.25s ease";
}