'use strict';

/*
Coding Challenge #1
In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates.
For that, you will use a second API to geocode coordinates.
So in this challenge, you’ll use an API on your own for the first time 😁

Your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat') and a longitude value ('lng')
   (these are GPS coordinates, examples are in test data below).
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location,
   like a city and country name.
   Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json.
   Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location.
   Then, using this data, log a message like this to the console: “You are in Berlin, Germany”
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403.
   This is an error with the request. Remember, fetch() does not reject the promise in this case.
   So create an error to reject the promise yourself, with a meaningful error message

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result,
   and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code

Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
*/

//PART 1

// //Task 1
// function whereAmI(lat, lng) {
//     //Task 2
//     fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//     .then((response) => {

//         // Task 4-5
//         if(!response.ok)
//             throw new Error(`Problem with geocoding (error: ${response.status})`)

//         return response.json()
//     })
//     .then((data) => {
//         console.log(data);
//         //Task 3
//         console.log(`You are in ${data.city}, ${data.countryName}`);
//     })
//     //Task 4-5
//     .catch(err => console.log(`${err.message}`));
// }

// whereAmI(52.508, 23.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

//PART 2

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

//Task 6-7
function whereAmI(lat, lng) {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
    .then((response) => {

        if(!response.ok)
            throw new Error(`Problem with geocoding (error: ${response.status})`)

        return response.json()
    })
    .then((data) => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.countryName}`);
        const country = data.countryName;

        return fetch(`https://restcountries.com/v2/name/${country}`);
    })
    .then(response => {

        if(!response.ok)
            throw new Error(`Country not found (${response.status})`);

        return response.json()
    })
    .then((data) =>  {
        console.log(data);
        renderCountry(data[0])
    })
    .catch(err => console.log(`${err.message}`));
}

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);