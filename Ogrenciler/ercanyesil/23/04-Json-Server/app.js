class Request {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => resolve("Veri Silme Başarılı", response))
        .catch((err) => reject(err));
    });
  }
}

const request = new Request();

// request
//   .get("http://localhost:3000/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

request
  .post("http://localhost:3000/users", {
    id: 4,
    name: "postDeneme",
    nick: "Merhaba",
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

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