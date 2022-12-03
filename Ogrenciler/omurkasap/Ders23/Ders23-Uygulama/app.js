class Request {
    get(url){
        return new Promise((resolve,reject)=>{
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then((response) => response.json())
                .then((data) =>resolve(data))
                .catch((err)=>reject(err));
        });
    }
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch("https://jsonplaceholder.typicode.com/posts",{
                method: 'POST',
                body: JSON.stringify(data),
                headers:{"Content-type":"application/json;"},
            })
            .then((response) => response.json())
            .then((data) =>resolve(data))
            .catch((err)=>reject(err));
        });
    }
    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch("https://jsonplaceholder.typicode.com/posts",{
                method: 'PUT',
                body: JSON.stringify(data),
                headers:{"Content-type":"application/json;"},
            })
            .then((response) => response.json())
            .then((data) =>resolve(data))
   


}

const request=new Request();
request
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((data) => console.log(data))
    .catch ((err) => console.log(err));

request
    .post("https://jsonplaceholder.typicode.com/posts",
        { userId: 999, title: "Deneme Title" })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

request
    .put("https://jsonplaceholder.typicode.com/posts",
        { userId: "9999", title: "Deneme Put" })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

request
    .delete("https://jsonplaceholder.typicode.com/posts")
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));

row.innerHTML += `
            <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${e.title}</h5>
              <p class="card-text">${e.body}</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
            `;