const books = require('./data_base');

const fantasyOrScienceFiction = () => {
  const filteredBooks = books.filter((book) => {
    return book.genre === 'Fantasia' || book.genre === 'Ficção Científica';
  })
  return filteredBooks;
};
console.log(fantasyOrScienceFiction());