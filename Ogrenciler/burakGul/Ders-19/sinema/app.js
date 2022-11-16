const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.hidden)')
const button = document.querySelector('#button')
console.log(button);
getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function(e) {
    if(e.target.parentElement.classList.contains('seat') && !e.target.parentElement.classList.contains('reserved')){
        e.target.parentElement.classList.toggle('selected');
        calculateTotal()
        
    }
    console.log(e.target.parentElement);
});

seats.forEach((item)=>item.innerHTML='<img src="./img/seat.png" alt="" style="width: 100%;" >')

select.addEventListener('change', function(e){
    calculateTotal()
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });

    seats.forEach(function(seat){
        seatsArr.push(seat);
    });

    let selectedSeatIndexs = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });

    let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndexs);
    
    console.log(seats);
}

if (selectedSeats !=null && selectedSeats.length > 0) {
    seats.forEach(function(seat, index) {
        if (selectedSeats.indexOf(index) > -1) {
            seat.classList.add('reserved');
        }
    });
}






function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !=null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }




    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}