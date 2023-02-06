const books = require('./database.js');

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const born1947 = books.find((book) => book.author.birthYear === 1947).author.name;
console.log(born1947);