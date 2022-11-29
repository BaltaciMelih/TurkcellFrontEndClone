// function getTextFile() {
//     fetch("ornek.txt")
//     .then(response => console.log(response.text()))
//     // .then(data => console.log(data))
//     .catch(err => console.log("bir hata oluştu:" + err));
// }
// getTextFile();

// function getJsonFile() {
//     fetch("user.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log("bir hata oluştu:" + err));
// }
// getJsonFile();

// function getApi() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log("bir hata oluştu:" + err));
// }
// getApi();

class Request{
    get(url){
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    post(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers:{"Content-type":"application:json;"}
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }
    put(url,data){
        return new Promise((resolve,reject) => {
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers:{"Content-type":"application:json;"}
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    }
    delete(url){
        return new Promise((resolve,reject) =>{
            fetch(url,{
                method:'DELETE'
            })
            .then(response => resolve("veri silme başarılı",response))
            .catch((err) => reject(err));
        })
    }

}

const request = new Request();
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(data => console.log(data))
// .catch(err => console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:"999",title:"Deneme"})
// .then(data => console.log(data))
// .catch(err => console.log(err))

// request.post("users.json",{name:"okan",departmant:"yazılım",salary:"100000"})
// .then(data => console.log(data))
// .catch(err => console.log(err))

//npm init --yes
//npm install json-server
// --watch users.json
//npm i json-server to update

// request.put("https://jsonplaceholder.typicode.com/albums",{userId:"9999",title:"Deneme"})
// .then(data => console.log(data))
// .catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1",{userId:"9999",title:"Deneme"})
.then(data => console.log(data))
.catch(err => console.log(err));
