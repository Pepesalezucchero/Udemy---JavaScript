'use strict';

(function () {
const header = document.querySelector('h1');
header.style.color = 'red';
//Task 1
const body = document.querySelector('body');
body.addEventListener('click', function() {
    header.style.color = 'blue';
})
})();

//Task 2 ?