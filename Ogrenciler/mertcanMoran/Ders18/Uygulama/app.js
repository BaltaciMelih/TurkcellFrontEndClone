const container = document.querySelector(".container");
const count = document.getElementById("counter");
const payment = document.getElementById("payment");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.sold)");
const payButton = document.getElementById("payButton");

getFromLocalStorage();
calculateTotal();

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});

select.addEventListener("change", function (e) {
  calculateTotal();
});

payButton.addEventListener("click", function (e) {
  // const selectedNotSold = JSON.parse(localStorage.getItem("selectedSeats"));
  //if (selectedNotSold.classList.contains("selected")) {
  // selectedNotSold.classList.toggle("sold");
  //}
  console.log(e.target.id);
});

function calculateTotal() {
  const selectedSeats = container.querySelectorAll(".seat.selected");

  const selectedSeatsArr = [];
  const seatsArr = [];

  selectedSeats.forEach(function (seat) {
    selectedSeatsArr.push(seat);
  });

  seats.forEach(function (seat) {
    seatsArr.push(seat);
  });

  // [1,3,5]
  let selectedSeatIndexes = selectedSeatsArr.map(function (seat) {
    return seatsArr.indexOf(seat);
  });

  let selectedSeatCount = selectedSeats.length;
  count.innerText = selectedSeatCount;
  payment.innerText = selectedSeatCount * select.value;

  saveToLocalStorage(selectedSeatIndexes);
}

function getFromLocalStorage() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats != null && selectedSeats.length > 0) {
    seats.forEach(function (seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex != null) {
    select.selectedIndex = selectedMovieIndex;
  }
}

function saveToLocalStorage(indexes) {
  localStorage.setItem("selectedSeats", JSON.stringify(indexes));
  localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}
