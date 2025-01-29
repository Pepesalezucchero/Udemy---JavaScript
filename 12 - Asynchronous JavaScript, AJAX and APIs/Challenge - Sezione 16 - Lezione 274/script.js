'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `;
    
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}


const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}

function getPosition() {
    return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

const whereAmI = async function() {
    try {
        // Geolocation
        const pos = await getPosition();
        const {latitude: lat, longitude: lng} = pos.coords;

        // Reverse geocoding
        const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
       
        if(!resGeo.ok) throw new Error('Problem getting location data');
        
        const dataGeo = await resGeo.json();

        // Country data
        const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryName}`);
        
        if(!resGeo.ok) throw new Error('Problem getting country');

        const data = await res.json();
        console.log(data);
        
        renderCountry(data[0]);

        return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
    } catch(err) {
        console.error(err);
        renderError(`${err.message}`);

        throw err;
    }
}

console.log('1: Will get location');

//--Challenge--//

// whereAmI()
// .then(city => console.log(`2: ${city}`))
// .catch(err => console.log(`2: ${err.message}`))
// .finally(() => console.log('3: Finished getting location'));

(async function() {
    try {
        const city = await whereAmI();
        console.log(`2: ${city}`);
    } catch(err) {
        console.log(`2: ${err.message}`);
    }
    console.log('3: Finished getting location');
})();