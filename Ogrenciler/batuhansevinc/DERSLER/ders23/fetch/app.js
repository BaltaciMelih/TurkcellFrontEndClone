// function getTextFile(){
//     fetch("text.txt")
//     .then(Response => Response.text())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }
// getTextFile();

// function getJsonFile(){
//     fetch("users.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// }

class Request{
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch((err) => reject(err));
        })
    }
    post(url,data){
        
    }
}