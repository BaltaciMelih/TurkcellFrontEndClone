
//Batuhan SEVİNÇ, Burak GÜL, Mustafa ERKAYA

const row = document.querySelector('#row')

document.addEventListener('DOMContentLoaded', getApi);

let vari;
function getApi(){
    return new Promise((resolve, reject) =>{

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
       vari = data;
       console.log(vari);
       vari.forEach((item) => {
        blog(item.userId, item.id, item.title, item.body)
       })
    })

    .catch((err) => reject(err));
    
    
})
}




function blog(userid, id, title, body){
    const col = document.createElement('div');
    col.className = "card col-3 text-center ";
    col.innerHTML = `
    
        <div class="card-body">
            <h5 class="card-title">${userid}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${id}</h6>
            <p class="card-text">${title}</p>
            <p>${body}</p>
        </div>
        
    `;

    row.appendChild(col);
}


