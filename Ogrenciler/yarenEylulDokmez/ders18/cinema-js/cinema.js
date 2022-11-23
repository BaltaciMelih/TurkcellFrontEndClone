const container = document.querySelector('.container');
const count = document.getElementById('count');
const price = document.getElementById('price');
const select = document.getElementById('film');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function(e) {
   if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
       e.target.classList.toggle('selected');
       calculateTotal()      
    }
});

select.addEventListener('change', function(e) {
    calculateTotal();  
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat) {
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat) {
        seatsArr.push(seat);
    });

    // [1,3,5]
    let selectedSeatIndexs = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });

    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    price.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if (selectedSeats !=null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('reserved');
            }
        });
    }
    const selectedFilmIndex = localStorage.getItem('selectedFilmIndex');

    if (selectedFilmIndex != null) {
        select.selectedIndex = selectedFilmIndex;
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedFilmIndex', select.selectedIndex);
}

