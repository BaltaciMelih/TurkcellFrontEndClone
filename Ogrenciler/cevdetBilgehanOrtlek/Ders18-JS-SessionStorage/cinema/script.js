// Elemanları Seçme
const containers=document.querySelector(".saloon-container");
const count=document.getElementById("count");
const totalprice=document.getElementById("total-price");
const select=document.getElementById("seans");
const seats=document.querySelectorAll('.seat:not(.reserved)');
const paybutton=document.getElementById('pay-btn');
let SelectedCount=0;
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
    // let ikon=document.createElement("div");
    // ikon.innerHTML="<i class='fa-solid fa-user'></i>";
    // e.target.appendChild(ikon);
     Total();
   }
}
const refresh = () => {
    document.querySelectorAll('.container .selected').forEach(function (seat) {
      seat.classList.remove('selected');
    });
    document.querySelectorAll('.container .reserved').forEach(function (seat) {
      seat.classList.remove('reserved');
    });

  };

select.addEventListener('change', function(e){
    refresh();
    getFromLocalStorage();
    Total();
});

function Total(){
    const selectedSeats=containers.querySelectorAll(".seat.selected");
    const selectedSeats2=containers.querySelectorAll(".seat.reserved")
    const selectedSeatsArr=[];
    const seatsArr=[];
    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });
    seats.forEach(function(seat){
        seatsArr.push(seat);
    });
    selectedSeats2.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });
    let selectedSeatIndexs=selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    })
     console.log(selectedSeatIndexs);
     
     let price=select.value;
    SelectedCount=containers.querySelectorAll('.seat.selected').length;
    count.innerText="Seçilen Koltuk Sayısı: "+SelectedCount;
    totalprice.innerText=SelectedCount*price;
    saveLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage(){
    const selectedSeats2=JSON.parse(localStorage.getItem('reservedSeats'+ select.selectedIndex ));
    if(selectedSeats2!=null && selectedSeats2.length>0){
        seats.forEach(function(seat, index){
            if(selectedSeats2.indexOf(index)>-1)
            {
                seat.classList.add("reserved");
                sessionStorage.removeItem("selectedSeats");
                SelectedCount=0;
                count.innerText="Seçilen Koltuk Sayısı: 0";
                totalprice.innerText="0";
            }
        })
    }
}

function saveLocalStorage(indexs){
    sessionStorage.setItem('selectedSeats'+ select.selectedIndex,JSON.stringify(indexs));
    sessionStorage.setItem('selectedMovieIndex'+ select.selectedIndex,select.selectedIndex);
}

function payButtons(){
    let ıtems = JSON.parse(sessionStorage.getItem("selectedSeats"+ select.selectedIndex));
    localStorage.setItem('reservedSeats'+ select.selectedIndex,JSON.stringify(ıtems));
    localStorage.setItem('reservedMovieIndex'+ select.selectedIndex,select.selectedIndex);
    const selectedSeats=JSON.parse(sessionStorage.getItem('selectedSeats'+ select.selectedIndex));
    // const selectedMovieIndex=localStorage.getItem('selectedMovieIndex');
    if(selectedSeats!=null && selectedSeats.length>0){
        seats.forEach(function(seat, index){
            if(selectedSeats.indexOf(index)>-1)
            {
                seat.classList.add("reserved");
                // seat.innerHTML="";
                 sessionStorage.removeItem("selectedSeats");
                 seat.classList.remove("selected");
                 let price=0;
                 SelectedCount=0;
                 count.innerText="Seçilen Koltuk Sayısı: "+SelectedCount;
                 totalprice.innerText=SelectedCount*price;
            }
        })
    }
}