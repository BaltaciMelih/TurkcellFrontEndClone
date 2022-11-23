
const  localKey = "filmArsiv";
var filmList= [];
const todoList = document.getElementById("todoList");
filmList =  JSON.parse(getItem(localKey));
var film = new Arsiv();
if(filmList == null || filmList.length == 0){
    filmList =[];
    film = new Arsiv("La Casa De Papel", "Álex Pina","2017","https://i.pinimg.com/originals/8a/84/98/8a84988450be803533089edcd2c028e0.jpg");
    film.filmKaydet();
	film = new Arsiv("SUITS", "Aaron Korsh", "2011","https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg");
	film.filmKaydet();	
	film.filmListele();

}
else{
	film.filmListele();
}

 function Arsiv(adi,yonetmen,tarih,afis){
	this.adi = adi;
    this.yonetmen = yonetmen;
    this.tarih = tarih;
    this.afis = afis;
	this.filmKaydet = function() {
      filmList.push(this);
      addItem(localKey,JSON.stringify(filmList));
	}
	this.filmleriSil = function() {
		 filmList = [];
		 todoList.innerHTML = '';
		 deleteItem(localKey);
	}
	this.filmListele = function() {
     todoList.innerHTML = '';
		for (let i = 0; i < filmList.length; i++) {
			const listItem = document.createElement("li");
			
			const img = document.createElement("img");
			img.src = filmList[i].afis;
			img.className = "col-md-3";

			const spanAdi = document.createElement("span");
			spanAdi.innerHTML = filmList[i].adi;
			spanAdi.className = "col-md-3";

			const spanYonetmen = document.createElement("span");
			spanYonetmen.innerHTML = filmList[i].yonetmen;
			spanYonetmen.className = "col-md-3";

			const spanTarih = document.createElement("span");
			spanTarih.innerHTML = filmList[i].tarih;
			spanTarih.className = "col-md-3";

			listItem.className = "list-group-item d-flex justify-content-between";


			listItem.appendChild(img);
			listItem.appendChild(spanAdi);
			listItem.appendChild(spanYonetmen);
			listItem.appendChild(spanTarih);

			todoList.appendChild(listItem);
		  
		}
		
	}
}
function filmEkle(){
    if(document.getElementById("filmAdi").value == 0){
        alert("Lütfen Film Adı Girin");
		return false;
    }
    if(document.getElementById("filmYonetmeni").value == 0){
        alert("Lütfen Film Yönetmeni Girin");
		return false;
    }
    if(document.getElementById("filmCekildigiTarih").value == 0){
        alert("Lütfen Film Tarihini Girin");
		return false;
    }
    if(document.getElementById("filmAfis").value == 0){
        alert("Lütfen Film Afiş Url Girin");
		return false;
    }
    else{
	   film = new Arsiv(document.getElementById("filmAdi").value,document.getElementById("filmYonetmeni").value,
	   document.getElementById("filmCekildigiTarih").value,document.getElementById("filmAfis").value);
	   film.filmKaydet();          
	   film.filmListele();
    }       
}
function filmleriSil(){
	film.filmleriSil();
}
// Fonksiyonlar
function getItem(key) {
    return localStorage.getItem(key);
  }
function addItem(key,value) {
    localStorage.setItem(key,value);
}

function deleteItem(key) {
    localStorage.removeItem(key);   
}

function clearItems() {
    localStorage.clear(); 
}