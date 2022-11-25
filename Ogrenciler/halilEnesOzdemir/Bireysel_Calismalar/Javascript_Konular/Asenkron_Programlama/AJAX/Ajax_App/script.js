'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////////////////////

// OLD SCHOOL WAY...

/* const request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3.1/name/turkey');

request.send();
request.addEventListener('load', function () {
  // console.log(this.responseText);

  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = `
          <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.tur}</p>
            <p class="country__row"><span>💰</span>${data.currencies.TRY.name}</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
});
 */

// IMPROVED WAY

/* const renderCountry = function (data, className = '') {
  data.forEach((data) => {
    const lang = Object.keys(data.languages);
    const curr = Object.keys(data.currencies);

    const html = `
     <article class="country ${className}">
        <img class="country__img" src=${data.flags.svg} />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.continents}</h4>
          <p class="country__row"><span>👫</span>${
            data.population <= 10000 ? data.population : +(data.population / 1000000).toFixed(1) + ` MIL`
          } people</p>
          <p class="country__row"><span>🗣️</span>${data.languages[`${lang}`]}</p>
          <p class="country__row"><span>💰</span>${data.currencies[`${curr}`].name}</p>
        </div>
      </article>
    
    `;
    countriesContainer.insertAdjacentHTML(`beforeend`, html);
    countriesContainer.style.opacity = 1;
  });
}; */

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText);

// Render Country 1

/*     renderCountry(data);

    // Get neighbour country
    const [neighbour] = data[0].borders;
    if (!neighbour) return;
    // AJAX Call country 2

    const request2 = new XMLHttpRequest();

    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('portugal');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000); */

// Hard to maintain, hard to understand..

// SOLVE THIS PROBLEM... ----> FIRST STEP: PROMISE

// const request = fetch('https://restcountries.com/v3.1/name/turkey');
// console.log(request);

// Promise: An object that is used as a placeholder for the future result of asynchronouns operation.

// Simple form ---> A container for an asynchronously delivered value.

// In its simplest form ---> A container for a future value

// CONSUMING PROMISES

/* const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCounry[data[0]];
    });
};
getCountryData('turkey'); */

// Modern

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const name = Object.values(data.name)[0];
  const flag = Object.values(data.flags)[0];
  const language = Object.values(data.languages);
  const currency = Object.values(data.currencies)[0].name;
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${flag}" />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${language[0]}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0], 'neighbour'))
    .catch((err) => {
      console.error(`${err} 💣💣💣 `);
      renderError(`Something went wrong 💣💣 ${err.message}.Try again `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('turkey');
});

getCountryData('swdfasgasgd');
