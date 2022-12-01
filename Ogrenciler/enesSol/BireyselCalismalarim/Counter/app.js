let counterInput = document.getElementById("counter");
let increaseId = document.getElementById("increase");
let decreaseId = document.getElementById("decrease");

function increase() {
  let number = parseInt(counterInput.value);
  counterInput.value = number + 1;
}

function decrease(e) {
  let number = parseInt(counterInput.value);
  counterInput.value = number - 1;
}

increaseId.addEventListener("click", increase);
decreaseId.addEventListener("click", decrease);
