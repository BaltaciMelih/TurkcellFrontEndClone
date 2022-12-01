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
        <div class="card">
                 
                 <img class="card-img-top" src=" ${json.url}">

               <div class="card-body">
        
                 <h5 class="card-title">${json.sehirAdı}</h5>
                 <p class="card-text">${json.geziYorum}</p>
               </div>
               <div class="container">
               <p id="yazar">Yazar:${json.yazarAdı}</p>
               <p id="tarih" class="d-flex justify-content-end">Tarih:${json.dateItem}</p>


               <div class="container">
                 <p id="bolge" >Bölge:${json.bolge}</p>
                 <a class="d-flex justify-content-end" href="#">Devamını Oku</a
                 <div>
        
              
               <div class="container d-flex justify-content-center">

               <div class="row">
               <a href="#" class="text-decoration-none  ">
                   <button class="btn btn-outline-danger  " onclick="deletePost(${json.id})">Kaldır</button>
                 </a>
                 </div>


                 </div>
                


                 

             </div> 
             <br>
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
    bolge:document.getElementById("bolge").value,
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
  fetch("http://localhost:3000/blogs" + "/" + id, {
    method: "DELETE",
  })
    .then((response) => console.log(response))
    .then((json) => {
      console.log("post silindi", json);
    })
    .catch((error) => console.log(error));
}

const filter = document.getElementById("filter");


function filterPost() {
  // const filterValue = e.targer.value.toLowerCase();
  const listPost = document.querySelector("input");
  
  listPost.addEventListener("keyup",function(){
    let filterValue=this.value;
    
    let li =document.querySelectorAll(".card");

    for(let i= 0; i< li.length; i++){
      // console.log(li[i].innerHTML);
      if(li[i].innerHTML.indexOf(filterValue)>-1){
        li[i].style.display="";
      }else{
        li[i].style.display="none";
      }
    }

  });
}
filterPost();