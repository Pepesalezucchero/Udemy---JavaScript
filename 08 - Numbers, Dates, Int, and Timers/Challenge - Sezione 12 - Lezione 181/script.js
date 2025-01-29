// HTML element
const time = document.querySelector('.clock');

// Starting page
time.textContent = getTime();

// Timer function every second
setInterval(function() {

    // Clock data
    getTime();

}, 1000);

// Functions
// Getting time
function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return time.textContent = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`;
}