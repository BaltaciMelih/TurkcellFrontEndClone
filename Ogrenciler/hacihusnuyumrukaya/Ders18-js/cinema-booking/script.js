// Elemanları Seçme
const containers = document.querySelector('.saloon-container');
const count = document.getElementById('count');
const totalprice = document.getElementById('total-price');
const select = document.getElementById('seans');
const seats = document.querySelectorAll('.seat:not(.reserved)');
const paybutton = document.getElementById('pay-btn');
let SelectedCount = 0;
getFromLocalStorage();
Total();
//Eventler
eventListeners();
function eventListeners() {
  containers.addEventListener('click', selected);
  paybutton.addEventListener('click', payButtons);
}

function selected(e) {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
    e.target.classList.toggle('selected');
    // let ikon=document.createElement("div");
    // ikon.innerHTML="<i class='fa-solid fa-user'></i>";
    // e.target.appendChild(ikon);
    Total();
  }
}

select.addEventListener('change', function (e) {
  Total();
});

function Total() {
  const selectedSeats = containers.querySelectorAll('.seat.selected');
  const selectedSeatsArr = [];
  const seatsArr = [];

  selectedSeats.forEach(function (seat) {
    selectedSeatsArr.push(seat);
  });
  seats.forEach(function (seat) {
    seatsArr.push(seat);
  });
  let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
    return seatsArr.indexOf(seat);
  });
  console.log(selectedSeatIndexs);

  let price = select.value;
  SelectedCount = containers.querySelectorAll('.seat.selected').length;
  count.innerText = 'Seçilen Koltuk Sayısı: ' + SelectedCount;
  totalprice.innerText = SelectedCount * price;

  saveLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage() {
  const selectedSeats = JSON.parse(sessionStorage.getItem('selectedSeats'));
  // const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');
  if (selectedSeats != null && selectedSeats.length > 0) {
    seats.forEach(function (seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
        // seat.innerHTML="<i class='fa-solid fa-user'></i>";
      }
    });
  }

  const selectedSeats2 = JSON.parse(localStorage.getItem('reservedSeats'));
  if (selectedSeats2 != null && selectedSeats2.length > 0) {
    seats.forEach(function (seat, index) {
      if (selectedSeats2.indexOf(index) > -1) {
        seat.classList.add('reserved');
        SelectedCount = 0;
        count.innerText = 'Seçilen Koltuk Sayısı: 0';
        totalprice.innerText = '0';
      }
    });
  }
}

function saveLocalStorage(indexs) {
  sessionStorage.setItem('selectedSeats', JSON.stringify(indexs));
  sessionStorage.setItem('selectedMovieIndex', select.selectedIndex);
}

function payButtons() {
  let ıtems = JSON.parse(sessionStorage.getItem('selectedSeats'));
  localStorage.setItem('reservedSeats', JSON.stringify(ıtems));
  localStorage.setItem('reservedMovieIndex', select.selectedIndex);
  const selectedSeats = JSON.parse(sessionStorage.getItem('selectedSeats'));
  // const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');
  if (selectedSeats != null && selectedSeats.length > 0) {
    seats.forEach(function (seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('reserved');
        // seat.innerHTML="";
        sessionStorage.removeItem('selectedSeats');
        SelectedCount = 0;
        count.innerText = 'Seçilen Koltuk Sayısı: 0';
        totalprice.innerText = '0';
      }
    });
  }
}
