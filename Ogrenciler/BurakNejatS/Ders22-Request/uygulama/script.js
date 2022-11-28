document.addEventListener("DOMContentLoaded", getAllPhotos);
// const askquantity =Number(prompt("kaç post görmek istiyorsunuz?"));



function getAllPhotos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
  xhr.onload = function () {
    // let list = document.getElementById("list");
    if (this.status == 200) {
      var posts = JSON.parse(this.responseText);

      

      var html = "";

      posts.forEach((post) => {
        html += `
<div class="card" style="width: 18rem;">
<img class="card-img-top" src=" ${post.url}"alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${post.title}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="${post.thumbnailUrl}" class="btn btn-primary">Fotoğrafı Büyült</a>
</div>
</div>  `;
      });

      document.querySelector("#results").innerHTML = html;
    }
  };
  xhr.send();
}

