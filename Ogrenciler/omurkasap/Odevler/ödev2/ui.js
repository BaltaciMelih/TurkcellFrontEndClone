
function Ui() {


}
let films = []
Ui.prototype.addMovie = function(){
    const name = inputName.value.trim();
    console.log(name)
    const director = inputDirector.value.trim();
    const img = inputİmg.value.trim();
    const date = inputDate.value.trim();
    const film = new Film(name, director, date, img);
    ui.addMovieUi(film)
    films.push(film)
    console.log(films)
    localStorage.setItem("film",JSON.stringify(films))
}
Ui.prototype.addMovieUi = function({name,director,date,img}){
    const tr = document.createElement("tr");
    tr.className = "text-center row d-flex align-item-center";
    tr.innerHTML = ` <td class="text-start col-3 p-3">
    <img class="img-fluid h-100 banner" src="${img}" alt="" />
  </td>
  <td class="col-3 name">${name}</td>
  <td class="col-2 director">${director}</td>
  <td class="col-2 date">${date}</td>
  <td class="col-2">
    <button class="btn btn-danger" id="delete">SİL</button>
  </td>`
  tbody.prepend(tr);
}
Ui.prototype.dltMovie = function(e){
    console.log("e", e)
    if (e.target.id==="delete"){

        e.target.parentElement.parentElement.remove();
        console.log("SİLİNDİ")
    }
    else {
        console.log("Butona Tıklamadınız!!")
    }
}
