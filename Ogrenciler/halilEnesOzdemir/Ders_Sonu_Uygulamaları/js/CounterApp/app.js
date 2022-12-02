let counterInput = document.getElementById('counter');
let increaseBtn = document.getElementById('increase');
let decreaseBtn = document.getElementById('decrease');

increaseBtn.addEventListener('click', increaseNum);
decreaseBtn.addEventListener('click', decreaseNum);

function increaseNum() {
  let number = parseInt(counterInput.value);
  counterInput.value = number + 1;
}

function decreaseNum() {
  let number = parseInt(counterInput.value);
  counterInput.value = number - 1;
}
