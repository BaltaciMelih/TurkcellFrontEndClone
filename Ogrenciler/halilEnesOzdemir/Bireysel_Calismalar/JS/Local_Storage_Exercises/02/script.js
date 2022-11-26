// Local Sto

let counter = localStorage.getItem('counterValue') ? Number(localStorage.getItem('counterValue')) : 0;
let counterDOM = document.querySelector('#counter');
let increaseDOM = document.querySelector('#increase');
let decreaseDOM = document.querySelector('#decrease');

counterDOM.innerHTML = counter;

increaseDOM.addEventListener('click', clickEvent);
decreaseDOM.addEventListener('click', clickEvent);

function clickEvent() {
  // console.log(this.id);

  this.id == 'increase' ? (counter += 1) : (counter -= 1);
  localStorage.setItem('counterValue', counter);
  counterDOM.innerHTML = counter;
}

// const data = localStorage.getItem(JSON.parse('counterValue'));
// console.log(data);
