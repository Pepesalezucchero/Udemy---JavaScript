// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
Coding Challenge #2 With AI

Let's say you're building a time tracking application for freelancers.
At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

//NOT AI
const workHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];

function workCount(arr) {
    //1. Total hours worked
    const sumH = arr.reduce((acc, h) => h + acc, 0);
    console.log(`Total hours worked: ${sumH}`);

    //2. Average daily hours
    const averageH = (sumH / workHours.length).toFixed(1);
    console.log(`Average daily hours: ${averageH}`);

    //3. The day with the most hours worked
    let day = 0;
    let hours = 0;
    arr.filter((h, i) => {
        if(h > hours) {
          day = i + 1;
          hours = h;
        }
    });
    console.log(`The day with the most hours worked is the ${day}${day === 1 ? `st` : day === 2 ? `nd` : day === 3 ? `rd` : 'th'} with ${hours} hours`);

    //4. Number of days worked
    const workingDays = arr.filter(h => h > 0)
    console.log(`Number of days worked: ${workingDays.length}`);

    //5. Whether the week was full-time (worked 35 hours or more)
    console.log(`The week was ${sumH >= 35 ? `` : `not`} full-time (worked: ${sumH} hours)`); 
}

workCount(workHours);

//AI
function analyzeWorkWeek(hours) {
  // Calcola il totale delle ore lavorate
  const totalHours = hours.reduce((sum, current) => sum + current, 0);

  // Calcola la media delle ore lavorate giornalmente
  const averageDailyHours = totalHours / hours.length;

  // Trova il giorno con il maggior numero di ore lavorate
  const maxHours = Math.max(...hours);
  const dayWithMostHours = hours.indexOf(maxHours) + 1; // +1 per mostrare i giorni in formato umano (1-7)

  // Conta il numero di giorni lavorati (ore > 0)
  const daysWorked = hours.filter(day => day > 0).length;

  // Determina se la settimana è stata full-time (35 ore o più)
  const isFullTime = totalHours >= 35;

  return {
    totalHours,
    averageDailyHours,
    dayWithMostHours,
    daysWorked,
    isFullTime,
  };
}

// Test con i dati forniti
const workData = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const result = analyzeWorkWeek(workData);

console.log(result);