const city = document.querySelector('.city');
const place = document.querySelector('.place');
const image = document.querySelector('.image');
const summary = document.querySelector('.summary');
const region = document.querySelector('.region');
const date = document.querySelector('.date');
const row = document.querySelector('#row')

getJson();
function getJson() {
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/travel')
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
            data.forEach((item) => {
                
             sendUi(item.city, item.place, item.image, item.summary, item.region,item.date )
            });
         })
    });
}

function sendUi(tcity, tplace, timage, tsummary, tregion,tdate){
    let col = document.createElement("div");
    col.className = "col-md-6";
    col.innerHTML = `<img src="${timage}" class="img-fluid image" alt="..." style="height:100% ;
    width: 100%;">
</div>
<div class="card-body col-5 d-flex flex-column px-2 bg-success">
    <h6 class="card-title my-2 city">"${tcity}"</h6>
    <h5 class="card-title my-2 location">"${tplace}"</h5>
  <p class="card-text">"${tsummary}"</p>
  <span class="card-text my-2 region">Bölge : <span>"${tregion}"</span></span>
  <small class="date">Tarih ve Saat : <small>"${tdate}"</small></small>
  <div class="row p-3">
    <button class="btn btn-primary col-5">Düzenle</button>
    <button class="btn btn-danger col-5 ms-auto">Sil</button>`;

    // row.appendChild(col)
}