const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movies");
const rezerve = document.getElementById("rezerveEt");
const secimSil = document.getElementById("secimSil");
const colorSeats = document.querySelectorAll("#koltuk");
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
savelocalStorage();
updateTotalPrice();
updateSelectedCount();
});


 function savelocalStorage(){
  let selectedSeats1;
  let reservedSeats;
  let secilenKoltuklar
  rezerve.addEventListener('click', function(e){ 
  if(e.target.id == 'rezerveEt'){
  selectedSeats1 = document.querySelectorAll('container .seat.selected');
  reservedSeats = document.querySelectorAll('container .seat.occupied');
  const sumofSeats = [...selectedSeats1, ...reservedSeats];
  const sumofArray = [...seats];

  secilenKoltuklar = sumofSeats.forEach(function(i){
    return sumofArray.indexOf(i);
  });

    localStorage.setItem('selectedSeats1' + movieSelect.selectedIndex, JSON.stringify(secilenKoltuklar));
  }
  });
  // localStorage.setItem("koltuklar", JSON.stringify(selectedSeats1)); 
  // const sampleSeats = JSON.parse(localStorage.getItem("koltuklar"));
  // console.log(sampleSeats);
 }
 
 function getSeatsCountFromStorage(){
 if (localStorage.getItem("selectedSeats1") === null) {
    selectedSeats1 = [];
  } else {
    seats.forEach(function(seat, index){
      seat.classList.add('occupied');
    });
    // selectedSeats1 = JSON.parse(localStorage.getItem("selectedSeats1"));
  }
 return seats;
 }

 
//  function addSeatsToStorage(newSeats){
//     let selectedSeats1 = getSeatsCountFromStorage();
//     selectedSeats1.push(newSeats);
//     console.log(selectedSeats1);
//     localStorage.setItem("selectedSeats1", JSON.stringify(selectedSeats1));
//  }

 function loadAllSeatsToUI(){
  let savedSeats = getSeatsCountFromStorage();
    savedSeats.forEach(function (savedSeat) {
    addTodoToUI(savedSeat);
  });
 }

secimSil.addEventListener("click",(e) => {
    localStorage.removeItem("savedSeats");
    
});
 
