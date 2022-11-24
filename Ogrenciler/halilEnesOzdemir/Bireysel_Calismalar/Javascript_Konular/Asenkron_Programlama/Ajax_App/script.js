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

const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    console.log(data);

    data.forEach((el) => {
      const lang = Object.keys(el.languages);
      const curr = Object.keys(el.currencies);
      console.log(lang, curr);

      const html = `
     <article class="country">
        <img class="country__img" src=${el.flags.svg} />
        <div class="country__data">
          <h3 class="country__name">${el.name.common}</h3>
          <h4 class="country__region">${el.continents}</h4>
          <p class="country__row"><span>👫</span>${
            el.population <= 10000 ? el.population : +(el.population / 1000000).toFixed(1) + ` MIL`
          } people</p>
          <p class="country__row"><span>🗣️</span>${el.languages[`${lang}`]}</p>
          <p class="country__row"><span>💰</span>${el.currencies[`${curr}`].name}</p>
        </div>
      </article>
    
    `;
      countriesContainer.insertAdjacentHTML(`afterbegin`, html);
      countriesContainer.style.opacity = 1;
    });
  });
};

getCountryData('turkey');
getCountryData('portugal');
