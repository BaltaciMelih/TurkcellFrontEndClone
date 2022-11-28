// function getTextFile () {
//     fetch("deneme.txt") //js'ten gelenm metot -- içine url yaz gety isteğidir
//     .then(response => response.text())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
     
// }

// getTextFile();

// function getJsonFile () {
//     fetch("users.Json") //js'ten gelenm metot -- içine url yaz gety isteğidir
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
     
// }

// getJsonFile();


// function getApi () {
//     fetch("https://jsonplaceholder.typicode.com/posts") //js'ten gelenm metot -- içine url yaz gety isteğidir
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
     
// }

// getApi();

class Request {
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))/// dışarıya return ediyıor arrow functiondan gelen
            .catch((err) => reject(err));
        })
    }

    post(url, data) {// dışardan data gelecek
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type":"application:json;"
                },
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    } 

    put(url, data) {// dışardan data gelecek
        return new Promise((resolve, reject) => {
            fetch(url,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    "Content-type":"application:json;"
                },
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
    } 

    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE'
            })
            .then(response => resolve("Veri silme başarılı", response))
            .catch(err => reject(err))
        })
    }
}

const request = new Request();

request.get()



// post data alırken {userId:999, title:"deneme title"} obje kullanıyoruz. !! önemli