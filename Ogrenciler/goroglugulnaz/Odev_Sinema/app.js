

const  filmArsivKey = "filmArsiv";//localStorage kullanılacak key tanımlandı.Bu keye gore ekleme -silme ve verileri getirme de kullanılacak 
const  firstItemKey = "firstItem";//localStorage kullanılacak key tanımlandı.Bu keye gore ekleme -silme ve verileri getirme de kullanılacak 
const  IndexKey = "indexValue";//localStorage kullanılacak key tanımlandı.Bu keye gore ekleme -silme ve verileri getirme de kullanılacak 
var tempId=0;

var filmList= [];///localStorage içerisinde bulunan filmlerin listesini tutmak için bir array tanımlandı.
const todoList = document.getElementById("todoList");/// todoList id ul objesi global bir değişkene atandı.Bu sayede ul içerisine film detayları img ve span olarak daha sonra javascript metod da eklencek
filmList =  JSON.parse(getItem(filmArsivKey)); ///filmList array içerisine localStorage veriler atandı.
var film = new Arsiv();///film nesnesi arsiv function üzerinden oluşturuldu.  

var index = getItem(IndexKey);
if(index == null || index == NaN || index == "NaN"){
	index = 1;
	addItem(IndexKey,1)
}
if(filmList == null){
	 filmList =[];///array temizlendi
}
console.log(getItem(IndexKey))
if((filmList == null || filmList.length == 0)&& getItem(firstItemKey) == null){ ///filmList eğer boş ise Default 2 film olması için kontrol eklendi.
    filmList =[];///array temizlendi
    film = new Arsiv("La Casa De Papel", "Álex Pina","2017","https://i.pinimg.com/originals/8a/84/98/8a84988450be803533089edcd2c028e0.jpg");///film nesnesi içerisine parametreler gonderıldı.
    film.filmKaydet();///film kaydet metodu çağrıldı.
	film = new Arsiv("SUITS", "Aaron Korsh", "2011","https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg");
	film.filmKaydet();	
	film.filmListele();///film listeleme metodu çağrıldı.
	addItem(firstItemKey,1)
}
else{
	
	film.filmListele();///filmList array içerisi dolu ise direk listeleme metodu çağrılır. 
}

 

 
function Arsiv(adi,yonetmen,tarih,afis){
	index = parseInt(index) + 1; 
	addItem(IndexKey,parseInt(index))
	this.id = index;
	this.adi = adi;///parametreler atandı.Property lere
    this.yonetmen = yonetmen;
    this.tarih = tarih;
    this.afis = afis;
	this.filmKaydet = function() { ///array ekleme ve localStorage kaydetme metodu
      filmList.push(this);
      addItem(filmArsivKey,JSON.stringify(filmList));
	}
	this.filmleriSil = function() {/// Tüm filmleri silme metodu array temizler  ve localStorage tamamen temizler
		 filmList = [];
		 todoList.innerHTML = '';
		 deleteItem(filmArsivKey);
	}
	this.filmSil = function(id) {/// Tek film silme metodu 
		filmList = filmList.filter(function(el) { return el.id != id; }) ///array içinde elemanı bulur onun haricinde olanları tekrar liste atar ; 
		addItem(filmArsivKey,JSON.stringify(filmList));//localStorage set eder
		film.filmListele();
	};
	this.filmDuzenle = function(id) {/// Tüm filmleri silme metodu array temizler  ve localStorage tamamen temizler
		const filmDetay = filmList.filter(function(el) { return el.id == id; })///array içinde elemanı bulur; 
		document.getElementById("filmAdi").value = filmDetay[0].adi;///array içinde bulunan elamanları html input set eder
		document.getElementById("filmYonetmeni").value = filmDetay[0].yonetmen;///array içinde bulunan elamanları html input set eder
		document.getElementById("filmCekildigiTarih").value = filmDetay[0].tarih;///array içinde bulunan elamanları html input set eder
		document.getElementById("filmAfis").value = filmDetay[0].afis;///array içinde bulunan elamanları html input set eder
		tempId = id; ///duzenleme için tempId içerisinde id saklanır ekle butonuna basarsa ilgili kayıt listeden silinir düzenleme yapılan kayıt yeni kayıt olarak eklenir
		 
		 
	}
	this.filmListele = function() {///Filmleri filmList array içerisinde bulunanları todoList içerine ekler
     todoList.innerHTML = '';
	 console.log(filmList)
		for (let i = 0; i < filmList.length; i++) {
			const listItem = document.createElement("li");///ul eklencek olan li create edildi
			
			const img = document.createElement("img");///img html element create edildi
			img.src = filmList[i].afis; /// resim path atandı
			img.className = "col-md-3";/// class özeliğine bootsrap 3 hücreleme mantığı için col-md-3 eklendi

			const spanAdi = document.createElement("span");
			spanAdi.innerHTML = filmList[i].adi;
			spanAdi.className = "col-md-2";

			const spanYonetmen = document.createElement("span");
			spanYonetmen.innerHTML = filmList[i].yonetmen;
			spanYonetmen.className = "col-md-2";

			const spanTarih = document.createElement("span");
			spanTarih.innerHTML = filmList[i].tarih;
			spanTarih.className = "col-md-1";

			const aSil = document.createElement("a");
			aSil.innerHTML = "Sil";
			aSil.className = "col-md-1";
			aSil.onclick = function() {film.filmSil(filmList[i].id)};
			
			const aDuzenle = document.createElement("a");
			aDuzenle.innerHTML = "Düzenle";
			aDuzenle.className = "col-md-2";
			aDuzenle.onclick = function() {film.filmDuzenle(filmList[i].id)};
			
			listItem.className = "list-group-item d-flex justify-content-between";


			listItem.appendChild(img);///create edilen html'ler tek tek li ekleniyor.
			listItem.appendChild(spanAdi);///create edilen html'ler tek tek li ekleniyor.
			listItem.appendChild(spanYonetmen);///create edilen html'ler tek tek li ekleniyor.
			listItem.appendChild(spanTarih);///create edilen html'ler tek tek li ekleniyor.
			listItem.appendChild(aSil);///create edilen html'ler tek tek li ekleniyor.
			listItem.appendChild(aDuzenle);///create edilen html'ler tek tek li ekleniyor.

			todoList.appendChild(listItem);//////create li  todoList ekleniyor.
		  
		}
		
	}
}
 
function filmEkle(){/// film eklenmesş için html de çağrılan metod
    if(document.getElementById("filmAdi").value == 0){///filmAdi içerisinde yazılan karakter sayısı 0 dan büyük değilse alert vermesi sağlandı
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
		
		if(tempId >0){
			film.filmSil(tempId);
			tempId = 0;
		}
	   film = new Arsiv(document.getElementById("filmAdi").value,document.getElementById("filmYonetmeni").value,
	   document.getElementById("filmCekildigiTarih").value,document.getElementById("filmAfis").value);///film nesnesi içerisine parametreler gonderıldı.
	   film.filmKaydet(); ///film kaydet metodu çağrıldı.         
	   film.filmListele();///film listeleme metodu çağrıldı.
    }       
}
function filmleriSil(){/// tüm filmleri silmesi için hmtl tarafından çağrılan metod
	film.filmleriSil();
}
// Fonksiyonlar
function getItem(key) {///localStorage key karşılık verileri getirir
    return localStorage.getItem(key);
  }
function addItem(key,value) {///localStorage key karşılık veri set eder
    localStorage.setItem(key,value);
}

function deleteItem(key) {//////localStorage key karşılık veriyi siler
    localStorage.removeItem(key);   
}

function clearItems() {///localStorage tüm  verileri siler
    localStorage.clear(); 
}