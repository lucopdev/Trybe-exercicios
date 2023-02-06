const books = require('./data_base');

const booksByAuthorBirthYear = (birthYear) => {
  const bookFound = books.find((book) => {
    return book.author.birthYear === birthYear;
  });
  return bookFound;
}
console.log(booksByAuthorBirthYear(1948));