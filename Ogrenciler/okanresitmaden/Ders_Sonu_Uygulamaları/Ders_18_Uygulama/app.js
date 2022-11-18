<<<<<<< HEAD
const selection = document.querySelector(".container2"); //en dış kapsayıcının seçilip click işleminin yönetilmesi.
=======
const selection = document.querySelector(".container"); //en dış kapsayıcının seçilip click işleminin yönetilmesi.
>>>>>>> parent of d7ab2fa... Revert "Merge branch 'main' of https://github.com/waroi/TurkcellFrontEnd"
const number = document.getElementById("number"); // bilet sayısı
const price = document.getElementById("price"); // bilet fiyatı
const movieselection = document.getElementById("movies");
const seats = document.querySelectorAll(".chair:not(.booked)");
const button = document.getElementById("buton");

<<<<<<< HEAD

=======
>>>>>>> parent of d7ab2fa... Revert "Merge branch 'main' of https://github.com/waroi/TurkcellFrontEnd"
getFromLocalStorage(); // localstoragedan en başta yükleme işlemi.
totalprice(); // fiyat toplamının da en başta yüklenme işlemi.

selection.addEventListener("click", function(e){
    if(e.target.classList.contains("chair") && !e.target.classList.contains("booked")){
        e.target.classList.toggle('selected');

        totalprice();
    }
});// eğer chair classına sahip ve booked classına sahip değilse (yani rezerve değilse) tıklandığında selected classının eklenmesi.
//toggle özelliği ile bunun basılınca eklenmesi tekrar basılınca geri alınması sağlanıyor.

movieselection.addEventListener("change",function(e){
    totalprice();
});

function totalprice(){ // ücret için oluşturulan fonksyion
        let selectedSeats = selection.querySelectorAll(".chair.selected"); //chair ve selected classına sahip koltukların alınması.
        
        const selectedSeatsArr = []; // seçilen koltuklar için array
        const seatsArr = []; // koltuklar için array

<<<<<<< HEAD
        selectedSeatsArr.push(...selectedSeats);
        seatsArr.push(...seats);
=======
        selectedSeats.forEach(function(seat){
            selectedSeatsArr.push(seat); //seçilen koltukların seçilen koltuklar için oluşturulan arraya gönderilmesi.
        });

        seats.forEach(function(seat){
            seatsArr.push(seat); // tüm koltukların koltuklar için oluşturulan arraya aktarılması.
        });
>>>>>>> parent of d7ab2fa... Revert "Merge branch 'main' of https://github.com/waroi/TurkcellFrontEnd"

        let selectedindex = selectedSeatsArr.map(function(seat){ //seçilen koltukların indexinin alınması.
            return seatsArr.indexOf(seat);
        });
<<<<<<< HEAD
        
        localStorage.setItem("selectedSeats"+ movieselection.selectedIndex, JSON.stringify(selectedIndex)); // objeler ile çekilebilir.
=======

        console.log(selectedindex);
        
        let selectedchairnumber =  selectedSeats.length; //seçilen koltukların array uzunluğu
        number.innerText = selectedchairnumber; // x adet koltuk sayısı için.
        price.innerText = selectedchairnumber * movieselection.value; // x fiyat
>>>>>>> parent of d7ab2fa... Revert "Merge branch 'main' of https://github.com/waroi/TurkcellFrontEnd"

        saveToLocalStorage(selectedindex); //seçilen koltukların localstorage'a kaydedilmesi.
}

function saveToLocalStorage(index){ //localstorage'a kayıt fonksiyonu
    button.addEventListener("click", function(){
        localStorage.setItem("selectedSeats", JSON.stringify(index));
<<<<<<< HEAD
        localStorage.setItem("selectedMovieindex",movieselection.selectedIndex); 

    });
}



=======
        localStorage.setItem("selectedMovieindex",movieselection.selectedIndex);
    });
}

>>>>>>> parent of d7ab2fa... Revert "Merge branch 'main' of https://github.com/waroi/TurkcellFrontEnd"
function getFromLocalStorage(){ //localstorage'dan yükleme işlemi
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    const selectedMovieindex = localStorage.getItem("selectedMovieindex");

    if (selectedSeats != null && selectedSeats.length > 0){
        seats.forEach(function(seat, index){
            if (selectedSeats.indexOf(index) > -1 ){
<<<<<<< HEAD
                seat.classList.add("booked"); 
                            }
        });
    }
}


// javascript ile dropdown




=======
                seat.classList.add("selected");
            }
        });
    }

    if (selectedMovieindex != null){

        movieselection.selectedIndex = selectedMovieindex;
    }

}
>>>>>>> parent of d7ab2fa... Revert "Merge branch 'main' of https://github.com/waroi/TurkcellFrontEnd"
