let postlar = document.querySelector("#postlar");

document.addEventListener("DOMContentLoaded", cardOlustur);

function getTextFile() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
function cardOlustur() {
  console.log(typeof getTextFile());
  getTextFile();

  const posts = getTextFile.data;
  //   for (const property in posts) {
  //     console.log(`${property}: ${posts[property]}`);
  //     //       postlar.innerHTML += `<div class="card" style="width: 18rem;">
  //     //   <div class="card-body">
  //     //     <h5 class="card-title">${posts[index].title}</h5>
  //     //     <p class="card-text">${posts[index].body}</p>
  //     //     <a href="#" class="btn btn-primary">Go somewhere</a>
  //     //   </div>
  //     // </div>`;
  //   }
  console.log(typeof data);
  posts.forEach(function (object) {
    if (object.id <= menemen) {
      deneme.innerHTML += `<div class="card col-lg-4 col-sm-12 " style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title" id="title">${object.title}</h5>
        </div>
    </div>`;
    }
  });
}
