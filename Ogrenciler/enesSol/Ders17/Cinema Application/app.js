const container = document.querySelector(".container");
const numofmovieseat = document.getElementById("numofmovieseat");
const movieseatfee = document.getElementById("movieseatfee");
const moviesel = document.getElementById("moviesel");
const movieseats = document.querySelectorAll(".movieseat:not(.reserved)");
const button = document.querySelector("#rezervbutton");
const options = document.querySelectorAll("option");
const bgVideo = document.getElementById("bg-video");

moviesel.addEventListener("click", function (e) {
  const selectedMovie = options[e.target.selectedIndex].id;

  switch (selectedMovie) {
    case "avengers":
      bgVideo.src = "https://www.youtube.com/embed/6ZfuNTqbHE8";
      break;
    case "bergen":
      bgVideo.src = "https://www.youtube.com/embed/dMsSORIgsOg";
      break;

    case "muslum":
      bgVideo.src = "https://www.youtube.com/embed/bpWRHiBOhQc";
      break;

    default:
      break;
  }
});

getFromLocalStorage();
calculateTotal();

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("movieseat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});

moviesel.addEventListener("change", function (e) {
  calculateTotal();
});

function calculateTotal() {
  const selectedSeats = container.querySelectorAll(".movieseat.selected");

  const selectedSeatsArr = [];
  const seatsArr = [];

  selectedSeats.forEach(function (seat) {
    selectedSeatsArr.push(seat);
  });

  movieseats.forEach(function (seat) {
    seatsArr.push(seat);
  });

  let selectedSeatIndexs = selectedSeatsArr.map(function (seat) {
    return seatsArr.indexOf(seat);
  });

  // console.log(selectedSeatIndexs);

  let selectedSeatCount = selectedSeats.length;
  numofmovieseat.innerText = selectedSeatCount;
  movieseatfee.innerText = selectedSeatCount * moviesel.value;

  saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats != null && selectedSeats.length > 0) {
    movieseats.forEach(function (seat, index) {
      if (selectedSeats.indexOf(index) > -1) seat.classList.add("selected");
    });
  }

  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex != null) {
    moviesel.selectedIndex = selectedMovieIndex;
  }
}

// Add Seats on Click
function saveToLocalStorage(indexs) {
  document.addEventListener("click", function (e) {
    if (e.target.id === "rezervbutton") {
      localStorage.setItem("selectedSeats", JSON.stringify(indexs));
      localStorage.setItem("selectedMovieIndex", moviesel.selectedIndex);
    }
  });
}
