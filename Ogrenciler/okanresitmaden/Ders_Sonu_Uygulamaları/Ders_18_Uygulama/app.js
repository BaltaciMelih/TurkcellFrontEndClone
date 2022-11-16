const selection = document.querySelector(".container"); //en dış kapsayıcının seçilip click işleminin yönetilmesi.
const number = document.getElementById("number"); // bilet sayısı
const price = document.getElementById("price"); // bilet fiyatı
const movieselection = document.getElementById("movies"); // movie idleri
const seats = document.querySelectorAll(".chair:not(.booked)"); // rezerve olmayan koltuklar
const button = document.getElementById("buton"); // buton


getFromLocalStorage(); // localstoragedan en başta yükleme işlemi.

selection.addEventListener("click", function(e){ //tıklanma anı
    if(e.target.classList.contains("chair") && !e.target.classList.contains("booked")){
        e.target.classList.toggle('selected');
    }
    totalprice();
    saveToLocalStorage();
});// eğer chair classına sahip ve booked classına sahip değilse (yani rezerve değilse) tıklandığında selected classının eklenmesi.
//toggle özelliği ile bunun basılınca eklenmesi tekrar basılınca geri alınması sağlanıyor.

movieselection.addEventListener("change",function(e){
    refresh();
    getFromLocalStorage();
    totalprice();
});

function totalprice(){ // ücret için oluşturulan fonksyion
        let selectedSeats = selection.querySelectorAll(".chair.selected"); //chair ve selected classına sahip koltukların alınması.
        let selectedchairnumber =  selectedSeats.length; //seçilen koltukların array uzunluğu
        number.innerText = selectedchairnumber; // x adet koltuk sayısı için.
        price.innerText = selectedchairnumber * movieselection.value; // x fiyat
}

function saveToLocalStorage(){ //localstorage'a kayıt fonksiyonu
    button.addEventListener("click", function(){
        let selectedSeats = document.querySelectorAll(".chair.selected");
        let bookedSeats = document.querySelectorAll(".chair.booked");

        const total = [...selectedSeats, ...bookedSeats]; // secilenler ve rezerve olanlar
        const seatsArr = [...seats]; // rezerve olmayanlar

        let selectedIndex = total.map(function(i){
            return seatsArr.indexOf(i);
        });
        
        localStorage.setItem("selectedSeats"+ movieselection.selectedIndex, JSON.stringify(selectedIndex));

    });
}

function refresh() {
    document.querySelectorAll(".selected").forEach(function(seat){
        seat.classList.remove("selected");
    });

    document.querySelectorAll(".booked").forEach(function(seat){
        seat.classList.remove("booked");
    });
}



function getFromLocalStorage(){ //localstorage'dan yükleme işlemi
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats" + movieselection.selectedIndex));

    if (selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat, index){
            if (selectedSeats.indexOf(index) > -1 ){
                seat.classList.add("booked");
            }
        });
    }

}



