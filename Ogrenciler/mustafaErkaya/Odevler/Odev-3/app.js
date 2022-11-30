const title = document.querySelector('.title');
const director = document.querySelector('.director');
const banner = document.querySelector('.banner');
const summary = document.querySelector('.summary');
const category = document.querySelector('.category');
const date = document.querySelector('.date');
const row = document.querySelector('#row')

console.log(title, director, banner, summary, category, date);


getJson();
function getJson() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/movie')
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
            data.forEach((item) => {
                
             sendUi(item.title, item.summurry, item.director, item.date, item.kategori, item.banner )
            });
         })
    });
}

function sendUi(mtitle, msummary, mdirector, mdate, mcategory, mbanner){
    let col = document.createElement("div");
    col.className = "card col-4";
    col.innerHTML = `<img class="card-img-top banner" src="${mbanner}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title title">${mtitle}</h5>
      <p class="card-text summary">${msummary}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item director"><span>Director:</span>${mdirector}</li>
      <li class="list-group-item category"><span>Kategori:</span>${mcategory}</li>
      <li class="list-group-item date"><span>date:</span>${mdate}</li>
    </ul>`;

    row.appendChild(col)
}