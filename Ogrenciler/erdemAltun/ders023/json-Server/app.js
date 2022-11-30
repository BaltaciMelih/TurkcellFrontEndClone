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
    // return new Promise((resolve, reject) => {
    //   fetch(this.url, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //        "Content-type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => resolve(data))
    //     .catch((err) => reject(err));
    // });
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
  put(id, data) {
    return new Promise((resolve, reject) => {
      fetch(`${this.url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
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

const request = new Request("http://localhost:3000/users/");

request
  .get("http://localhost:3000/users")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const newPost = {
  name: `${document.getElementById("name").value}`,
  nick: `${document.getElementById("nick").value}`,
};
console.log(newPost);

document.querySelector(".form").addEventListener("submit", function (e) {
  request
    .post(newPost)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  // request
  //   .delete(1)
  //   .then((msg) => console.log(msg))
  //   .catch((err) => console.log(err));
  e.preventDefault();
});

// request
//   .put(1,{
//     userId: "9999",
//     title: "Deneme Put",
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// request
//   .delete(1)
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));
