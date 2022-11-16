const container = document.querySelector('.container');
const numofmovieseat = document.getElementById('numofmovieseat');
const movieseatfee = document.getElementById('movieseatfee');
const moviesel = document.getElementById('moviesel');
const movieseats = document.querySelectorAll('.container .movieseat:not(.reserved)');
const button = document.querySelector('#rezervbutton');
const options = document.querySelectorAll('option');
const bgVideo = document.getElementById('bg-video');

moviesel.addEventListener('click', function (e) {
  const selectedMovie = options[e.target.selectedIndex].id;
  switch (selectedMovie) {
    case 'avengers':
      bgVideo.src = 'https://www.youtube.com/embed/6ZfuNTqbHE8';
      break;
    case 'bergen':
      bgVideo.src = 'https://www.youtube.com/embed/dMsSORIgsOg';
      break;

    case 'muslum':
      bgVideo.src = 'https://www.youtube.com/embed/bpWRHiBOhQc';
      break;
  }
});

getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function (e) {
  if (e.target.classList.contains('movieseat') && !e.target.classList.contains('reserved')) {
    e.target.classList.toggle('selected');
  }
  calculateTotal();
  saveToLocalStorage();
});

moviesel.addEventListener('change', function () {
  refreshCinema();
  getFromLocalStorage();
  calculateTotal();
});

function refreshCinema() {
  document.querySelectorAll('.container .selected').forEach(function (seat) {
    seat.classList.remove('selected');
  });
  document.querySelectorAll('.container .reserved').forEach(function (seat) {
    seat.classList.remove('reserved');
  });
}

function calculateTotal() {
  const selectedSeats = container.querySelectorAll('.container .movieseat.selected');
  let selectedSeatCount = selectedSeats.length;
  numofmovieseat.innerText = selectedSeatCount;
  movieseatfee.innerText = selectedSeatCount * moviesel.value;
}

function getFromLocalStorage() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats' + moviesel.selectedIndex));

  if (selectedSeats != null && selectedSeats.length > 0) {
    movieseats.forEach(function (seat, index) {
      if (selectedSeats.indexOf(index) > -1) seat.classList.add('reserved');
    });
  }
}

// Add Seats on Click
function saveToLocalStorage() {
  document.addEventListener('click', function (e) {
    if (e.target.id === 'rezervbutton') {
      let selectedSeats = document.querySelectorAll('.container .movieseat.selected'); //Nodelist
      let reservedSeats = document.querySelectorAll('.container .movieseat.reserved');
      const totalSelResSeats = [...selectedSeats, ...reservedSeats];
      const seatsArr = [...movieseats];

      let indexofSelected = totalSelResSeats.map(function (i) {
        return seatsArr.indexOf(i);
      });

      localStorage.setItem('selectedSeats' + moviesel.selectedIndex, JSON.stringify(indexofSelected));
    }
  });
}
