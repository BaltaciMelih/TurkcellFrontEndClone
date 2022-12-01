function getBlog() {
  const posts = document.getElementById("rows");
  fetch("db.json")
    .then((response) => response.json())
    .then((blogs) => {
      //   console.log(data);
      for (json of blogs.blogs) {
        // console.log(json);

        posts.innerHTML += `
        <div class="container col-md-4 col-sm-6 d-flex justify-content-center">
        <div class="card" >
                 
                 <img class="card-img-top" src=" ${json.url}">

               <div class="card-body">
        
                 <h5 class="card-title">${json.sehirAdı}</h5>
                 <p class="card-text">${json.geziYorum}</p>
               </div>
               <div class="container">
               <p id="yazar">Yazar:${json.yazarAdı}</p>
               <p id="tarih" class="d-flex justify-content-end">Tarih:${json.dateItem}</p>
        
               <a href="#" class="delete-item">
                   <i class="fa fa-remove d-flex justify-content-end " onclick="deletePost(${json.id})">kaldır</i>
                 </a>
             </div> </div>
        `;
      }
    });
}

getBlog();

function createPost() {
  let veri = {
    yazarAdı: document.getElementById("yazarAdı").value,
    sehirAdı: document.getElementById("sehirAdı").value,
    geziYorum: document.getElementById("geziYorum").value,
    dateItem: document.getElementById("dateItem").value,
    url: document.getElementById("url").value,
  };
  fetch("http://localhost:3000/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=UTF-8" },
    body: JSON.stringify(veri),
  })
    .then((response) => response.json())
    .then((veri) => {
      console.log(veri);
    });
}

function deletePost(id) {
  fetch("http://localhost:3000/blogs" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json;charset=UTF-8" ,}
  })
    .then((response) => console.log(response))
    .then((json) => {
      console.log("post silindi", json);
    })
    .catch((error) => console.log(error));
}

deletePost(id);