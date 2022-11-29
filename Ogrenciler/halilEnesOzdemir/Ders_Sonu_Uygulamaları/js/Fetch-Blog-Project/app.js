// Ders - 23 Uygulaması Grup üyeleri

// Sinem Kestek
// Rıza Yılmaz
// Halil Enes Özdemir

class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}

/* 

{
    "userId": 8,
    "id": 72,
    "title": "sint hic doloribus consequatur eos non id",
    "body": "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit"
}


 */

const request = new Request();

request
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((album) =>
    album.forEach((item) => {
      const mainBlog = document.querySelector('#blogs');

      mainBlog.innerHTML += `
      <div class="col-lg-4 col-md-6 col-sm-10-auto mb-3 ">
      <div class="card border border-warning" style = "height: 300px">
        <div class="card-body">
          <h5 class="card-title text-dark mb-3 text-center">${item.title}</h5>
          <p class="card-text text-center text-secondary">${item.body}</p>
          <p class="text-center fs-6 ">${item.id}</p>
        </div>
      </div>
    </div>

`;
    })
  )
  .catch((err) => console.log(err));
