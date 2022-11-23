const nameinput = document.getElementById("moviename");
const directorinput = document.getElementById("moviedirector");
const yearinput = document.getElementById("movieyear");
const posterinput = document.getElementById("movieposter");
const list = document.querySelector(".rowsecond");
const button = document.getElementById("add");
const alldeletebutton = document.getElementById("delete");
const partdeletebutton = document.getElementById("deletepart");
const firstpart = document.querySelector(".rowfirst");
const editbutton = document.getElementById("editpart");
const editname = document.getElementById("movienameedit");
const editdirector = document.getElementById("moviedirectoredit");
const edityear = document.getElementById("movieyearedit");
const editposter = document.getElementById("movieposteredit");

function Movie(){
    this.id = '';
    this.name ='';
    this.director = '';
    this.year = '';
    this.poster = '';
    this.movies = this.GetMovies() ? this.GetMovies(): [] ;
    this.renderUI();
}

Movie.prototype.addMovie = function(){
    if(this.name === "" || this.director === "" || this.year === "" || this.poster === ""){
        this.ShowAlert("dark","Lütfen Tüm Bilgileri Eksiksiz Doldurun");
    }else{
        this.movies.push( {
            director: this.director,
            name: this.name,
            year: this.year,
            poster: this.poster,
            id : Math.floor(Math.random() * 1000000),
          });
        this.addToStorage();
        this.renderUI();
        this.ShowAlert("dark","Ekleme İşlemi Başarıyla Gerçekleşti.");
    }
}

Movie.prototype.renderUI = function(){
    list.innerHTML = "";
    nameinput.value = "";
    directorinput.value = "";
    yearinput.value = "";
    posterinput.value = "";
    editname.value = "";
    editdirector.value = "";
    edityear.value = "";
    editposter.value = "";
    this.movies.forEach(function(movie){
        const ulItem = document.createElement("ul");
        ulItem.className ="list-group d-flex align-items-center justify-content-center mt-5";
        ulItem.id = movie.id;
        const imgItem = document.createElement("img");
        imgItem.className = "img-fluid postersize";
        imgItem.src = movie.poster;
        const liItem1 = document.createElement("li");
        liItem1.className = "list-group-item text-center text-white bg-dark w-25 mt-2 rounded mb-1";
        const liItem2 = document.createElement("li");
        liItem2.className = "list-group-item text-center text-white bg-dark w-25 rounded mb-1";
        const liItem3 = document.createElement("li");
        liItem3.className = "list-group-item text-center text-white bg-dark w-25 rounded mb-1";
        const liItem5 = document.createElement("li");
        liItem5.className = "list-group-item text-center text-dark bg-dark list-group-item-light w-25 rounded";
        const linkItem = document.createElement("button");
        linkItem.type = "button";
        const deletetext = document.createTextNode("Filmi Listeden Kaldır");
        linkItem.href = "#";
        linkItem.className = "bi bi-trash3-fill btn btn-dark text-white border-0 rounded w-25 mb-1 py-2";
        linkItem.id = "deletepart";
        linkItem.appendChild(deletetext);
        const linkItem2 = document.createElement("button");
        linkItem2.type = "button";
        const edittext = document.createTextNode("Filmi Bilgilerini Değiştir");
        linkItem2.appendChild(edittext);
        linkItem2.href = "#";
        linkItem2.className = "bi bi-trash3-fill btn btn-dark text-white border-0 rounded w-25 py-2";
        linkItem2.id  = "editpart";
        linkItem.setAttribute("data-id",movie.id);
        linkItem2.setAttribute("data-id",movie.id);
        liItem1.appendChild(document.createTextNode("Film Adı: " + movie.name));
        liItem2.appendChild(document.createTextNode("Yönetmen: " + movie.director));
        liItem3.appendChild(document.createTextNode("Vizyon Tarihi: " + movie.year));
        ulItem.appendChild(imgItem);
        ulItem.appendChild(liItem1);
        ulItem.appendChild(liItem2);
        ulItem.appendChild(liItem3);
        ulItem.appendChild(linkItem);
        ulItem.appendChild(linkItem2);
        list.appendChild(ulItem);
    });
}

Movie.prototype.GetMovies = function(){
    return JSON.parse(localStorage.getItem("movies"));
}

Movie.prototype.addToStorage = function(){
    localStorage.setItem("movies", JSON.stringify(this.movies));   
}

Movie.prototype.deleteAll = function(){
    list.innerHTML = "";
    this.movies = [];
    this.addToStorage();
    this.ShowAlert("dark","Silme İşlemi Başarıyla Gerçekleşti.");
}

Movie.prototype.delete = function(){
    this.movies = this.movies.filter((movie) =>  {
        return movie.id != this.id;  

    });
    this.renderUI();
    this.addToStorage();
    this.ShowAlert("dark","Silme İşlemi Başarıyla Gerçekleşti.");
}

Movie.prototype.Edit = function(){
    this.movies = this.movies.map((movie) => {
        if(movie.id === this.id){
            if(editname.value === "" && edityear.value === "" && editdirector.value === "" && editposter.value === ""){
            }
            else if(editname.value === "" && edityear.value === "" && editdirector.value === ""){
                movie.poster = editposter.value.trim();
            }
            else if(editposter.value === "" && edityear.value === "" && editdirector.value === ""){
                movie.name = editname.value.trim();
            }
            else if(editposter.value === "" && editname.value === "" && editdirector.value === ""){
                movie.year = edityear.value.trim();
            }
            else if(editposter.value === "" && editname.value === "" && edityear.value === ""){
                movie.director = editdirector.value.trim();
            }
            else if(editposter.value === "" && editname.value === ""){
                movie.director = editdirector.value.trim();
                movie.year = edityear.value.trim();
            }
            else if(edityear.value === "" && editname.value === ""){
                movie.poster = editposter.value.trim();
                movie.director = editdirector.value.trim();
            }
            else if(edityear.value === "" && editposter.value === ""){
                movie.director = editdirector.value.trim();
                movie.name = editname.value.trim();
            }
            else if(editdirector.value === "" && editposter.value === ""){
                movie.year = edityear.value.trim();
                movie.name = editname.value.trim();
            }
            else if(editdirector.value === "" && editname.value === ""){
                movie.year = edityear.value.trim();
                movie.poster = editposter.value.trim();
            }
            else if (editname.value === ""){
                movie.year = edityear.value.trim();
                movie.director = editdirector.value.trim();
                movie.poster = editposter.value.trim();
            }
            else if (edityear.value === ""){
                movie.name = editname.value.trim();
                movie.director = editdirector.value.trim();
                movie.poster = editposter.value.trim();
            }
            else if (editdirector.value === ""){
                movie.name = editname.value.trim();
                movie.year = edityear.value.trim();
                movie.poster = editposter.value.trim();
            }
            else if (editposter.value === ""){
                movie.name = editname.value.trim();
                movie.year = edityear.value.trim();
                movie.director = editdirector.value.trim();
            }
            else{
                movie.name = editname.value.trim();
                movie.year = edityear.value.trim();
                movie.director = editdirector.value.trim();
                movie.poster = editposter.value.trim();
            } 
        }
    return movie;
    });
}

Movie.prototype.ShowAlert = function(alert_type, alertmessage){
    const flexdiv = document.createElement("div");
    flexdiv.className = "d-flex justify-content-center";
    const alertItem = document.createElement("div");
    alertItem.className = `mt-2 text-center text-dark w-25 alert alert-${alert_type}`;
    alertItem.textContent = alertmessage;
    flexdiv.appendChild(alertItem);
    firstpart.appendChild(flexdiv);
    setTimeout(function(){
        alertItem.remove();
    }, 1500);
}

const movie = new Movie();

alldeletebutton.addEventListener("click", function(){
    movie.deleteAll();
});

button.addEventListener("click",function(){
    movie.name= nameinput.value.trim();
    movie.director = directorinput.value.trim();
    movie.year = yearinput.value.trim();
    movie.poster = posterinput.value.trim();
    movie.addMovie();

});

list.addEventListener("click", function(e){
    if(e.target.className === "bi bi-trash3-fill btn btn-dark text-white border-0 rounded w-25 mb-1 py-2"){
        const movieiddelete = Number(e.target.getAttribute("data-id"));
        movie.id = movieiddelete;
        movie.delete();
    }
});

list.addEventListener("click",function(e){
    if(e.target.className === "bi bi-trash3-fill btn btn-dark text-white border-0 rounded w-25 py-2"){
        const movieidedit = Number(e.target.getAttribute("data-id"));
        movie.id = movieidedit;
        movie.Edit();
        movie.renderUI();
        movie.addToStorage();
    }
})

