class Request {
  constructor(url) {
    this.url = url;
  }
  get() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  async post(data) {
    const response = await fetch(this.url, {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const resData = await response.json();
    return resData;
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "DELETE",
      })
        .then((response) => resolve("Veri Silme Başarılı", response))
        .catch((err) => reject(err));
    });
  }
}
const mainSection = document.querySelector("#mainSection");

document.addEventListener("DOMContentLoaded", getUIFromJson);
const request = new Request("http://localhost:3000/blogs");

function getUIFromJson() {
  request
    .get("http://localhost:3000/users")
    .then((data) => {
      data.forEach((blog) => {
        mainSection.innerHTML += `<div class="card" style="width: 18rem;">
        <img src="${blog.gorsel_url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${blog.baslik}</h5>
          <p class="card-text">${blog.yazi}</p>
        </div>
      </div>`;
      });
    })
    .catch((err) => console.log(err));
}

document.querySelector("#ekleButton").addEventListener("click", function () {
  const newPost = {
    baslik: `${document.getElementById("baslik").value}`,
    yazi: `${document.getElementById("yazi").value}`,
    yazarin_adi: `${document.getElementById("yazarin_adi").value}`,
    tarih_ve_saat: `${document.getElementById("tarih_ve_saat").value}`,
    kategori: `${document.getElementById("kategori").value}`,
    gorsel_url: `${document.getElementById("gorsel_url").value}`,
  };

  console.log(newPost);
  request
    .post(newPost)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

document.querySelector("#sil").addEventListener("click", function () {
  request
    .delete(3)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
});
