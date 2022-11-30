// function getTextFile() {
//   fetch("ornek.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getTextFile();

// function getJsonFile() {
//   fetch("users.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getJsonFile();

// function getApi() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getApi();

// class Request {
//   get(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }
//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: { "Content-Type": "application/json" },
//       })
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }
//   put(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "PUT",
//         body: JSON.stringify(data),
//         headers: { "Content-Type": "application/json" },
//       })
//         .then((response) => response.json())
//         .then((data) => resolve(data))
//         .catch((err) => reject(err));
//     });
//   }
//   delete(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: "DELETE",
//       })
//         .then((response) => resolve("Veri Silme Başarılı", response))
//         .catch((err) => reject(err));
//     });
//   }
// }

// const request = new Request();

// request
//   .get("https://jsonplaceholder.typicode.com/albums")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
//   .post("https://jsonplaceholder.typicode.com/albums", {
//     userId: "9999",
//     title: "Deneme Put",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
//   .put("https://jsonplaceholder.typicode.com/albums/1", {
//     userId: "9999",
//     title: "Deneme Put",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
//   .delete("https://jsonplaceholder.typicode.com/albums/1")
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

//   {
//   "users": [
//     {
//       "name": "Şafak",
//       "salary": 5000,
//       "deparment": "Blişim"
//     },
//     {
//       "name": "Varol",
//       "salary": 5000,
//       "deparment": "Blişim"
//     },
//     {
//       "name": "Mustafa",
//       "salary": 5000,
//       "deparment": "Blişim"
//     }
//   ]
// }

const container = document.getElementsByClassName("row");

class Request {
  async get(url) {
    const res = await fetch(url);
    console.log(res);
    const deneme = await res.json();
    if (!res.ok) {
      throw new Error(`Bir Hata Oluştu ${res.status}`);
    }
    deneme.forEach(function (info) {
      container.innerHTML += `  <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card mb-5 shadow-sm">
        <img
          src="https://www.7x24cicek.com/wp-content/uploads/2021/09/cicek-buketi-ankara.jpg"
          class="img-fluid"
          alt=""
        />
        <div class="card-body">
          <div class="card-title">
            <h2>${info.title}</h2>
          </div>
          <div class="card-text">
            <p class="blog-description">
              ${info.body}
            </p>
          </div>
          <a
            href="#"
            class="btn btn-outline-primary rounded-0 float-end"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            >Read More</a
          >
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  ${info.body}
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    });
    return deneme;
  }
}

const request = new Request();

request
  .get("http://localhost:3000/posts")
  .then((data) => console.log(data))
  .catch((err) => console.log(`Hata: ${err.message}`));

request
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
