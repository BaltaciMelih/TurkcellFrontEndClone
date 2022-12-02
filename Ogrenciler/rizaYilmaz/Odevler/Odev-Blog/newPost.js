let postForm = document.querySelector("#post-form");
let inputTitle = document.querySelector("#exampleInputTitle");
let inputAuthor = document.querySelector("#exampleInputAuthor");
let inputDate = document.querySelector("#exampleInputDate");
let inputCategory = document.querySelector("#categorySelect");
let inputUrl = document.querySelector("#exampleInputUrl");
let inputDescription = document.querySelector("#exampleInputDescription");
postForm.addEventListener("submit",submitForm);

class Request {
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
}
const request = new Request();
function submitForm(e){
    request
  .post("http://localhost:3000/posts", {
     title: inputTitle.value.trim(),
     description: inputDescription.value.trim(),
     author:inputAuthor.value.trim(),
     date:inputDate.value.trim(),
     category:inputCategory.value.trim(),
     imgurl: inputUrl.value.trim()
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
    e.preventDefault();
}
