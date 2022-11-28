// function getTextFile(){

//   fetch("ornek.txt") //get isteği //fetch aslında bize promise döner
//     .then((response) => response.text()) //response text i retrun etmiş olduk
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }
// getTextFile();

// function getJsonFile(){

//   fetch("users.json") //get isteği //fetch aslında bize promise döner
//     .then((response) => response.json()) //response text i retrun etmiş olduk
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }
// getJsonFile();

// function getApi(){
//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// }

// getApi();

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
        urlbody: JSON.stringify(data),
        headers: { "Content-type": "application:json" },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });

  }
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "PUT",
        urlbody: JSON.stringify(data),
        headers: { "Content-type": "application:json" },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });

  }
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method:"DELETE"
      })
      .then(response => resolve("Veri silme başarılı", response))
      .catch(err => reject(err))
    })
  }

}


const request = new Request //static yazmadığımız için yeni obje oluşturup kullanmalıyız
request.get("https://jsonplaceholder.typicode.com/albums")
.then((data) => console.log(data))
.catch((err) => console.log(err));