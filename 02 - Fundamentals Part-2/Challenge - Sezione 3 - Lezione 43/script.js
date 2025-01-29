//Esempio estratto dall'episodio 43 della sezione 3

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2034 - 1991,
    friends: [
        'Michael',
        'Peter',
        'Steven'
    ],
    job: 'Teacher',
    location: 'Portugal',
    twitter: '@jonasschmedtmann'
};

console.log(jonas);

//Tira fuori una stringa usando il riachamo degli oggetti

//"Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas['firstName']} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);