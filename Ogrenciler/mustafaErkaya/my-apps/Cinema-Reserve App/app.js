const container = document.querySelector(".container");
const count = document.getElementById("count"); // Seçilen koltuklar
const amount = document.getElementById("amount"); // ücretler
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");


container.addEventListener("click", function(e){
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {  /* seat clasına sahip olup olmadığını soruyoruz */
          /* ve reserved clasına sahip olmayanları seçiyoruz */
        e.target.classList.toggle('selected');  /* seat classlarına click event selected classı ekleriz */
    
       
        calculateTotal();
       
    }
});

select.addEventListener("change", function(e){
    calculateTotal();
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');
    

    const selectedSeatArr =[];
    const seatsArr = [];

    selectedSeats.forEach(function (seat) {
        selectedSeatArr.push(seat);
    });

    seats.forEach(function(seat){
        seatsArr.push(seat);
    });

    //
    let selectedSeatIndexs = selectedSeatArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });
    console.log(selectedSeatIndexs);

    let selectedSeatCount = selectedSeats.length; /* seat ve selected clasları birlikte olanların sayılarını alıyoruz */
    /* buda bize kaç koltuk seçildiğini göstermektedir */
   // console.log(selectedSeatCount);
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value; /* ücret hesaplanması */

    saveToLocalStorage(selectedSeatIndexs);
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}