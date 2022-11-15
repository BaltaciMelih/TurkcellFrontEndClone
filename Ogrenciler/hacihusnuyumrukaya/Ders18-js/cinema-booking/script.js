// Elemanları Seçme
const containers=document.querySelector(".saloon-container");
const count=document.getElementById("count");
const totalprice=document.getElementById("total-price");
const select=document.getElementById("seans");
const seats=document.querySelectorAll('.seat:not(.reserved)');
const paybutton=document.getElementById('pay-btn');

getFromLocalStorage();
Total();
//Eventler
eventListeners();
function eventListeners() {
    containers.addEventListener("click", selected);
    paybutton.addEventListener("click",payButtons);
}

function selected(e){
   if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved'))
   {
    e.target.classList.toggle('selected');
     Total();
   }
}

select.addEventListener('change', function(e){
    Total();
});

function Total(){
    const selectedSeats=containers.querySelectorAll(".seat.selected");
    const selectedSeatsArr=[];
    const seatsArr=[];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });
    seats.forEach(function(seat){
        seatsArr.push(seat);
    });
    let selectedSeatIndexs=selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })
     console.log(selectedSeatIndexs);

    let price=select.value;
    let SelectedCount=containers.querySelectorAll('.seat.selected').length;
    count.innerText="Seçilen Koltuk Sayısı: "+SelectedCount;
    totalprice.innerText=SelectedCount*price;

    saveLocalStorage(selectedSeatIndexs);
}
function getFromLocalStorage(){
    const selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));
    // const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');
    if(selectedSeats!=null && selectedSeats.length>0){
        seats.forEach(function(seat, index){
            if(selectedSeats.indexOf(index)>-1)
            {
                seat.classList.add("selected");
            }
        })
    }
}

function saveLocalStorage(indexs){
    localStorage.setItem('selectedSeats',JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex',select.selectedIndex);
}

function payButtons(){
    const seatsArr=getFromLocalStorage();
}