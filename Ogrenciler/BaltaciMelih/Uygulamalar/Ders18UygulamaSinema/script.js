const container = document.querySelector(".container");
const counter = document.getElementById("counter");
const payment = document.getElementById("payment");
const select = document.getElementById("movie");
const submit = document.getElementById("payButton");
const solds = document.querySelectorAll(".sold");
getSeatsFromStorage();
priceAmount();
addSeatsToStorage();

function priceAmount() {
  let selectedSeats = container.querySelectorAll(".selected");
  let selectedSeatsCount = container.querySelectorAll(".selected").length;
  let price = select.value;
  counter.innerText = selectedSeatsCount;
  payment.innerText = selectedSeatsCount * price;
}

function seatSelector(e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("sold")
  ) {
    e.target.classList.toggle("selected");
  }
  priceAmount();
}

function getSeatsFromStorage() {
  let soldSeats;
  if (localStorage.getItem("soldSeats") === null) {
    soldSeats = [];
  } else {
    soldSeats = JSON.parse(localStorage.getItem("soldSeats"));
  }
  return soldSeats;
}

function addSeatsToStorage() {
  let soldSeats = getSeatsFromStorage();
  soldSeats.push(solds);
  localStorage.setItem("soldSeats", JSON.stringify(soldSeats));
}

container.addEventListener("click", seatSelector);
select.addEventListener("change", priceAmount);
submit.addEventListener("submit", addSeatsToStorage);
