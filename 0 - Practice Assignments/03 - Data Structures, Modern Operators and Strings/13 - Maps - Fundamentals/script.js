const bookMap = new Map();
bookMap.set('title', 'Clean Code').set('author', 'Robert C. Martin');
console.log(bookMap);

//Soluzione mostrata
// const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']]);
// console.log(bookMap);

bookMap.set('pages', 464);
console.log(bookMap);

console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`);

console.log(bookMap.size);

console.log(bookMap.has('author') && 'The author of the book is known');

//Soluzione mostrata
// if (bookMap.has('author')) console.log('The author is known');