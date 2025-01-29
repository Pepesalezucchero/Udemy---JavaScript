const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
console.log(`
    Neighbour: ${listOfNeighbours[0][0]}
    Neighbour: ${listOfNeighbours[0][1]}
    Neighbour: ${listOfNeighbours[1]}
    Neighbour: ${listOfNeighbours[2][0]}
    Neighbour: ${listOfNeighbours[2][1]}
    Neighbour: ${listOfNeighbours[2][2]}`
);

for(i = 0; i < listOfNeighbours.length; i++) {
    for(z = 0; z < listOfNeighbours[i].length; z++) {
        console.log(`Neighbour: ${listOfNeighbours[i][z]}`);
    }
}
