// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));
let numNeighbours = prompt('How many neighbour countries does your contry have?');
console.log(numNeighbours);

// if (numNeighbours == 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

numNeighbours = Number(numNeighbours);
console.log(numNeighbours);

// Test with ===
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}