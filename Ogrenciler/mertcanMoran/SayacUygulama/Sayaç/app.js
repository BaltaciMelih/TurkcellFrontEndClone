document.getElementById("art").addEventListener("click", Art);
let sayi = document.getElementById("sayi");
//let i = 0;
function Art() {
  sayi.textContent++;
  sayi.innerHTML = `${sayi.textContent}`;
}

//console.log(Number(sayi.textContent));
