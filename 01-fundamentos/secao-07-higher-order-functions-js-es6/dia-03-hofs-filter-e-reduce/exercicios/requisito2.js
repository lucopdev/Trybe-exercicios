const books = require('./data_base');

const oldBooksOrdered = () => {
  const data = new Date();
  const ano = data.getFullYear();

  const orderedBooks = books.filter((book) => {
    return (ano - book.releaseYear) > 60;
  });
  return orderedBooks.sort((a, b) => a.releaseYear - b.releaseYear);
};
console.log(oldBooksOrdered());