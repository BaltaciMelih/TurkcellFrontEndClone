const secondHand = document.querySelector('.second');
const minHand = document.querySelector('.min');
const hourHand = document.querySelector('.hour');

console.log(secondHand);

function setDate() {
    const now = new Date();
    // second
    const second = now.getSeconds();
    const secondsDegrees = ((second / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    console.log(second);
    console.log("degree", secondsDegrees);

    // mins
    const min = now.getMinutes();
    const minDegrees = ((min / 60) * 360 + 90);
    minHand.style.transform =`rotate(${minDegrees}deg)`;
    console.log("minDegree" ,minDegrees);

    // hours
    const hour = now.getHours();
    const hourDegrees = ((hour / 60) * 360 + 90);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log("hourDegrees" ,hourDegrees);
}

setInterval(setDate, 1000) //setDate fonksiyonunu 1sn de tekrarlıyıor.