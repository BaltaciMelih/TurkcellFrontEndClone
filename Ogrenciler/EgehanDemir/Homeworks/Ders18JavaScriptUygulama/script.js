const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movies");
const rezerve = document.getElementById("rezerveEt");
const secimSil = document.getElementById("secimSil");

let ticketPrice = movieSelect.value;


function updateSelectedCount() {
const selectedSeats= document.querySelectorAll(".row .seat.selected");
selectedSeatsCount = selectedSeats.length;
count.innerText=selectedSeatsCount;
return selectedSeatsCount;
}

function updateTotalPrice(){
    const totalPrice = document.querySelectorAll(".row .seat.selected");
    totalPriceCount = totalPrice.length;
    total.innerText= updateSelectedCount() * ticketPrice;
    return totalPriceCount;
}


container.addEventListener("click", e => {
if (e.target.classList.contains("seat") &&
!e.target.classList.contains("occupied")) {
e.target.classList.toggle("selected");
}
updateTotalPrice();
updateSelectedCount();
});

// function eventListeners(){
//     container.addEventListener("click", selectedBackGround);
// }

// selectedBackGround(e){
//     e.target.style.backgroundColor = "#fff";
// }
 function savelocalStorage(e){
  localStorage.setItem("koltuklar", JSON.stringify(updateSelectedCount())); 
  const sampleSeats = JSON.parse(localStorage.getItem("koltuklar"));
  console.log(sampleSeats);
 }
 
 function getSeatsCountFromStorage(){
 let savedSeats;
 if (localStorage.getItem("savedSeats") === null) {
    savedSeats = [];
  } else {
    savedSeats = JSON.parse(localStorage.getItem("savedSeats"));
  }
  return savedSeats;
 }

 function addSeatsToStorage(newSeats){
    let savedSeats = getSeatsCountFromStorage();
    savedSeats.push(newSeats);
    localStorage.setItem("savedSeats", JSON.stringify(savedSeats));
 }

 function loadAllSeatsToUI(){
  let savedSeats = getSeatsCountFromStorage();
    savedSeats.forEach(function (savedSeat) {
    addTodoToUI(savedSeat);
  });

 }

 rezerve.addEventListener("click", function(event) {
    const newSeats = updateSelectedCount();
    addSeatsToStorage(newSeats);
    // selectedBackGround(event);
 });

secimSil.addEventListener("click",(e) => {
    localStorage.removeItem("savedSeats");
});
 