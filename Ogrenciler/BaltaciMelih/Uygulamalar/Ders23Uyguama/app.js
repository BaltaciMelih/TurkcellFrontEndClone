function getApi() {
  const container = document.getElementById("container");
  fetch("https://jsonplaceholder.typicode.com/posts/")
    //get isteği //fetch aslında bize promise döner
    .then((response) => response.json()) //response text i retrun etmiş olduk
    .then((data) =>
      data.forEach(function (elements) {
        if (elements.userId == 1) {
          container.innerHTML += `<div class="card col-lg-4 col-sm-12">
            <div class = "card-body">
            <div class="card-title">
            <h1>${elements.title}</h1>
            </div>
            <div class="card-title">
            <p>${elements.body}</p>
            </div>
            </div>
            
            </div>`;
        }
      })
    )
    .catch((err) => console.log(err));
}
getApi();
