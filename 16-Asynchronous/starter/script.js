'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//render country
const renderCountry = function (data, className = '') {
  // console.log(className);
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  // ajax call- the request cant be set to a varible bcos of Asynchrous behavour
  request.send();

  // register a call-back
  request.addEventListener('load', function () {
    //convert to json to js objects and destructuring
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    renderCountry(data);

    // get neighbour country 2
    const [neighbour] = data.borders;
    if (!neighbour) return;
    //ajax call
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    // ajax call- the request cant be set to a varible bcos of Asynchrous behavour
    request2.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      // console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

//getCountryAndNeighour('nigeria');

//promise
const getCountryData = function (country) {
  //calling promise
  const request3 = fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response =>
      //return a promise
      response.json()
    )
    .then(data => renderCountry(data[0]));
};

getCountryData('peru');
