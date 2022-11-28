const row = document.querySelector(".row");

class Request {
    async get(url){
        const data = await fetch(url)
        .then(res => res.json())
        .then(veri => {
            veri.forEach(function (e){
                row.innerHTML += `<div class="col-12">
                        <div class="card">
                            <h3>${e.title}</h3>
                            <p>${e.body}</p>
                        </div>
                        </div>`
            });
        })
        if(data){
            throw new Error(`Bir hata oluştu: ${data.status}`);
        }
        
    }

    
}
const req = new Request();
req.get("https://jsonplaceholder.typicode.com/posts")
.catch(err => console.log(err));

