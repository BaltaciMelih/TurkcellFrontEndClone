const container = document.querySelector(".container");
const seatsSuitable = document.querySelectorAll(".row .seat:not(.occupied)");
const seats = document.querySelectorAll('.row .seat');
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movies");
const rezerve = document.getElementById("rezerveEt");
const secimSil = document.getElementById("secimSil");
const colorSeats = document.querySelectorAll("#koltuk");
let ticketPrice = movieSelect.value;


function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  return selectedSeatsCount;
}

function updateTotalPrice() {
  const totalPrice = document.querySelectorAll(".row .seat.selected");
  totalPriceCount = totalPrice.length;
  total.innerText = updateSelectedCount() * ticketPrice;
  return totalPriceCount;
}


container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle('selected');
  }
  savelocalStorage();
  updateTotalPrice();
  // updateSelectedCount();
});

let selectedSeats1;
function savelocalStorage() {
  let reservedSeats;
  let secilenKoltuklar = [];
  rezerve.addEventListener('click', function (e) {
    if (e.target.id == 'rezerveEt') {
      selectedSeats1 = document.querySelectorAll('.row .seat.selected');
      reservedSeats = document.querySelectorAll('.row .seat.occupied');
      const sumofSeats = [...selectedSeats1, ...reservedSeats];
      const sumofArray = [...seats];
     sumofSeats.map(function (item) {
        secilenKoltuklar.push(sumofArray.indexOf(item));
      });
      console.log(secilenKoltuklar);
      localStorage.setItem('selectedSeats1', JSON.stringify(secilenKoltuklar));
    }
  });
  count.innerText = 0;
  total.innerText = 0;
}

function getSeatsFromStorage() {
  selectedSeats1 = JSON.parse(localStorage.getItem("selectedSeats1"));
  console.log(selectedSeats1.indexOf(155));
  if (localStorage.getItem("selectedSeats1") === null) {
    selectedSeats1 = [];
  } else {
    seats.forEach(function (seat, index) {
      if(selectedSeats1.indexOf(index) == true){
        seat.classList.add('occupied');
      }
      
    });
  }
}

getSeatsFromStorage();

// function loadAllSeatsToUI() {
//   let savedSeats = getSeatsFromStorage();
//   savedSeats.forEach(function (savedSeat) {
//     addTodoToUI(savedSeat);
//   });
// }

secimSil.addEventListener("click", (e) => {
  localStorage.removeItem("selectedSeats1");
});

