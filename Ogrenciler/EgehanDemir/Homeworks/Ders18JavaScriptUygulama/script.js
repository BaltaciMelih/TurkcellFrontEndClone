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

// function updateColors () {
// const selectedColors = document.querySelectorAll(".row .seat.selected");
// selectedColors = colorSeats.style.background = "#fff";
// return selectedColors;
// }

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
  document.addEventListener('click', function (e){
    if (e.target.id === "rezerveEt"){
      let selectedSeats = document.querySelectorAll('container .seat.selected');
      let reservedSeats = document.querySelectorAll('container .seat.occupied');
      const sumofSeats = [...selectedSeats, ...reservedSeats];
      const sumofArray = [...seats];

      let secilenKoltuklar = sumofSeats.forEach(function(i){
        return sumofArray.indexOf(i);
      });
    }
    localStorage.setItem('selectedSeats' +  movieSelect.selectedIndex, JSON.stringify(secilenKoltuklar));
  });
  // localStorage.setItem("koltuklar", JSON.stringify(updateSelectedCount())); 
  // const sampleSeats = JSON.parse(localStorage.getItem("koltuklar"));

  // localStorage.setItem("renkler", JSON.stringify(updateColors()));
  // const sampleColors= JSON.parse(localStorage.getItem("renkler"));
  // console.log(sampleSeats);
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

 function getSeatsColorFromStorage(){
  let savedColor;
  const selectedSeats= document.querySelectorAll(".row .seat.selected");
  if (localStorage.getItem("savedColor") === null) {
    savedColor = [];
  } else {
    savedColor = JSON.parse(localStorage.getItem("savedColor"));
    seats.forEach(function(seat,index){
      if(selectedSeats.indexOf(index)>0){
        seat.classList.add('occupied');
      }
    });
  }
  
 }
 function addSeatsToStorage(newSeats){
    let savedSeats = getSeatsCountFromStorage();
    savedSeats.push(newSeats);
    localStorage.setItem("savedSeats", JSON.stringify(savedSeats));
 }

 function addSeatsColorToStorage(newColor){
  let savedColor = getSeatsColorFromStorage();
  savedColor.push(newColor);
  localStorage.setItem("savedColor", JSON.stringify(savedColor));
 }

 function loadAllSeatsToUI(){
  let savedSeats = getSeatsCountFromStorage();
    savedSeats.forEach(function (savedSeat) {
    addTodoToUI(savedSeat);
  });
  let savedColor =getSeatsColorFromStorage();
   savedColor.forEach(function (savedColor){
    addTodoToUI(savedColor);
   });
 }

 rezerve.addEventListener("click", function(event) {
    const newSeats = updateSelectedCount();
    addSeatsToStorage(newSeats);
    
    const newColor = updateColors();
    addSeatsColorToStorage(newColor);
 });


secimSil.addEventListener("click",(e) => {
    localStorage.removeItem("savedSeats");
    localStorage.removeItem("selectedSeats1");
});
 
