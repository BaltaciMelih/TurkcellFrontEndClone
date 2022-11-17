// function showMap(){
//     movie = document.getElementById("movie").ariaValueMax;

//     if (movie == "20") {
//         document.getElementById("map").style.display = 'block'
//     }
//     else if (movie == "22") {
//         document.getElementById("map").style.display = 'block'
//     }
//     else if (movie == "25") {
//         document.getElementById("map").style.display = 'block'
//     }
    
//     else{
//         document.getElementById("map").style.display = 'none'
//     }

// }

const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const rezervasyon = document.getElementById('rezerve');
const koltuklar = document.querySelectorAll('.koltuk:not(.reserved)');

getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function(e){
    if (e.target.classList.contains('koltuk') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal();       
    }
});

select.addEventListener('change', function(e){
    calculateTotal();
});

function calculateTotal(){
    const selectedKoltuklar = container.querySelectorAll('.koltuk.selected');
    const reservedKoltuklar = container.querySelectorAll('.koltuk.reserved');

    const selectedKoltukArray =[];
    const reservedKoltukArray =[];
    const koltuklarArray = [];

    selectedKoltuklar.forEach(function(koltuk){
        selectedKoltukArray.push(koltuk);
    });
    selectedKoltuklar.forEach(function(koltuk){
        reservedKoltukArray.push(koltuk);
    });

    koltuklar.forEach(function(koltuk){
        koltuklarArray.push(koltuk);
    });


    let selectedKoltukIndexs = selectedKoltukArray.map(function(koltuk){
        return koltuklarArray.indexOf(koltuk);
    });
    let reservedKoltukIndexs = reservedKoltukArray.map(function(koltuk){
        return koltuklarArray.indexOf(koltuk);
    });

    console.log(selectedKoltukIndexs);

    let selectedKoltukCount = selectedKoltuklar.length;
    count.innerText = selectedKoltukCount;
    amount.innerText = selectedKoltukCount * select.value;  
    
    saveToLocalStroage(selectedKoltukIndexs);
    saveToLocalStroage(reservedKoltukIndexs);
}

function getFromLocalStorage(){
    const selectedKoltuklar = JSON.parse(localStorage.getItem('selectedKoltuklar'));
    const reservedKoltuklar = JSON.parse(localStorage.getItem('reservedKoltuklar'));

    if (selectedKoltuklar !=null && selectedKoltuklar.length > 0) {
        koltuklar.forEach(function(koltuk, index){
            if (selectedKoltuklar.indexOf(index) > -1) {
                koltuk.classList.add('selected');
            }
        });
    }
    if (reservedKoltuklar !=null && reservedKoltuklar.length > 0) {
        koltuklar.forEach(function(koltuk, index){
            if (reservedKoltuklar.indexOf(index) > -1) {
                koltuk.classList.add('reserved');
            }
        });
    }


    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if (selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex;
    }

}

function saveToLocalStroage(indexs){
    localStorage.setItem('selectedKoltuklar', JSON.stringify(indexs));
    localStorage.setItem('reservedKoltuklar', JSON.stringify(indexs));
    localStorage.setItem('selectedMovieIndex', select.selectedIndex);
}

const rezerve = () => {
    koltuklar.forEach(koltuk => {
        if (koltuk.classList.contains('selected')) {
            koltuk.classList.add('reserved')
            
        }
    });
    
}

rezervasyon.addEventListener('click', rezerve)