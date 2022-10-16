const container = document.querySelector(".container");
const count = document.getElementById("count"); // Seçilen koltuklar
const amount = document.getElementById("amount"); // ücretler
const select = document.getElementById("movie");

container.addEventListener("click", function(e){
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {  /* seat clasına sahip olup olmadığını soruyoruz */
          /* ve reserved clasına sahip olmayanları seçiyoruz */
        e.target.classList.toggle('selected');  /* seat classlarına click event selected classı ekleriz */
    
        let selectedSeatCount = container.querySelectorAll('.seat.selected').length; /* seat ve selected clasları birlikte olanların sayılarını alıyoruz */
         /* buda bize kaç koltuk seçildiğini göstermektedir */
        // console.log(selectedSeatCount);

        let price = select.value;
        console.log(price);
        count.innerText = selectedSeatCount;
        amount.innerText = selectedSeatCount * price; /* ücret hesaplanması */
    }



})