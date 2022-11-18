const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.hidden)')
const button = document.querySelector('#button')
let reservedSeats = [];
let selectedMovieIndex ;
const movieData = [
    {
      name: 'Terminator',
      'price': 10
    },
    {
      name: 'Titanic',
      'price': 20
    },
    {
      name: 'Rambo',
      'price': 40
    }
  ]

// const selectedSeats = container.querySelectorAll('.seat.selected');
// console.log(selectedSeats);
getFromLocalStorage();
fillSeats()
calculateTotal();

// console.log(seats);

// buton ile reserved yapma
//butona click yaptığımda önceki reservli olanlar gidiyor bunu düzeltelim

button.addEventListener("click", function(e){
    const chair = container.querySelectorAll(".seat.selected");
    
 
    const reservedSeatsArr = [];
    const seatsArr = [];
    
    chair.forEach(function(seat){
        reservedSeatsArr.push(seat);
    });
    // console.log(selectedSeatsArr);
    seats.forEach(function(seat){
        seatsArr.push(seat);
    });
    // console.log(seats);

    let reservedSeatIndexs = reservedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });
    reservedSeatIndexs = [...reservedSeatIndexs, ...reservedSeats]
    // console.log(reservedSeatIndexs);
    chair.forEach((e) => {
        e.classList.add("reserved");
        e.classList.remove("selected");
       
    })
    saveToLocalStorage(reservedSeatIndexs);
    // console.log(reservedSeatIndexs);
    calculateTotal();


    
});

// const clearSeats = () => {
//     document.querySelectorAll('.container .selected').forEach(function (seat) {
//       seat.classList.remove('selected');
//     });
//     document.querySelectorAll('.container .reserved').forEach(function (seat) {
//       seat.classList.remove('reserved');
//     });
//   };

function fillSeats(){
    getFromLocalStorage();
    reservedSeats.forEach(function(index){
    // console.log(reservedSeats);
    seats.item(index).classList.add("reserved");  
    });
}   


container.addEventListener('click', function(e) {
    if(e.target.parentElement.classList.contains('seat') && !e.target.parentElement.classList.contains('reserved')){
        e.target.parentElement.classList.toggle('selected');
        calculateTotal()
        
    }
    // console.log(e.target.parentElement);
});



seats.forEach((item)=>item.innerHTML='<img src="./img/seat.png" alt="" style="width: 100%;" >')

select.addEventListener('change', function(e){
    selectedMovieIndex = e;
    
    // getFromLocalStorage();
    reset();
    // fillSeats();
    calculateTotal();
    
});

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected');
    
    
    
    
    const selectedSeatsArr = [];
    const seatsArr = [];
    
    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });
    // console.log(selectedSeatsArr);
    seats.forEach(function(seat){
        seatsArr.push(seat);
    });
    // console.log(seats);

    let selectedSeatIndexs = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    });
    
    
//fiyatlara arr oluştur

    let selectedSeatCount = container.querySelectorAll('.seat.selected').length;
    count.innerText = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    // saveToLocalStorage(selectedSeatIndexs);  !! select indexleri kaydetme
    
    // console.log(seats);
}

// if (selectedSeats !=null && selectedSeats.length > 0) {
//     seats.forEach(function(seat, index) {
//         if (selectedSeats.indexOf(index) > -1) {
//             seat.classList.add('reserved');
//         }
//     });
// }

function reset() {
    
    seats.forEach((e) => {
        e.classList.remove("selected");
        e.classList.remove("reserved");
    })
   
  }

  


function getFromLocalStorage() {
     reservedSeats = JSON.parse(localStorage.getItem(select.selectedIndex)) || [];

    if(reservedSeats !=null && reservedSeats.length > 0) {
        seats.forEach(function(seat, index) {
            if (reservedSeats.indexOf(index) > -1) {
                seat.classList.add('reserved');  // artık reserved olanları çekiyoruz debeg ile bak !!!!
            }
        });
    }
     selectedMovieIndex = localStorage.getItem("movie-index");

    if(selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex;
    }
}


function saveToLocalStorage(indexs) {
    localStorage.setItem(select.selectedIndex, JSON.stringify(indexs));
    localStorage.setItem("movie-index", select.selectedIndex);
}