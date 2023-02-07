const books = require('./database');

const expectedResult = true;

const someBookWasReleaseOnThe80s = () => books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
console.log(someBookWasReleaseOnThe80s() === expectedResult);