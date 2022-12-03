function Ui() {
    

}

Ui.prototype.addMovie = function(){
    const name = inputName.value.trim();
    console.log(name)
    const director = inputDirector.value.trim();
    const img = inputİmg.value.trim();
    const date = inputDate.value.trim();
    const film = new Film(name, director, date, img);

    ui.addMovieUi(film)
    //films.push(film)
    storage.movies.push(film)
    console.log(storage.movies)
    storage.setFromStorage();
    ui.alert("Film Eklendi", "success")
    ui.resetForm();
    
    // localStorage.setItem("film",JSON.stringify(films))
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
    // console.log("e", e)
    if (e.target.id==="delete"){

        e.target.parentElement.parentElement.remove();
        console.log("SİLİNDİ")
        ui.alert("Film Başarı ile Silindi","primary")

    }
    else {
        //console.log("Butona Tıklamadınız!!")
        ui.alert("Silme Butonu Tıklanmadı","danger")
    }
    let title = ui.movieTitle(e);
    storage.updateStorage(title);
    
}

Ui.prototype.alert = function(message, type){
    const div = document.createElement("div");
    div.className = `mt-3 alert alert-${type}`;
    div.textContent = message;
    alerts.insertBefore(div,alerts.children[1])
    setTimeout(function(){
        div.remove()

    }, 2500);
}

Ui.prototype.resetForm = function(){
    inputİmg.value = "";
    inputDate.value = "";
    inputDirector.value = "";
    inputName.value = "";
}
Ui.prototype.deleteAll = function(){
    if (confirm("Emin Misiniz?")){
        while(tbody.firstChild!==null){
            tbody.removeChild(tbody.firstChild)
        }
        ui.alert("Hepsi Silindi","danger")
        localStorage.clear();
    }
    console.log("Hepsini sil")

}

Ui.prototype.movieTitle = function(e){
    let title = e.target.parentElement.parentElement.children[1].textContent.trim();
    return title;
    // console.log(title)
    // console.log(typeof title)
}