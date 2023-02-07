const books = require('./data_base');

const oldBooks = () => {
  const data = new Date();
  const ano = data.getFullYear();
  const foundBook = [];
  books.forEach((book) => {
    if ((ano - book.releaseYear) > 60) {
      foundBook.push(book.name);
    }
  });
  return foundBook;
};
console.log(oldBooks());