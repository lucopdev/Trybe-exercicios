const books = require('./data_base');

const nameAndAge = () => {
  const nameAndAgeArray = books.map((book) => {
    const newObj = {
      author: book.author.name,
      age: (book.releaseYear - book.author.birthYear),
    };
    return newObj;
  });

  return nameAndAgeArray.sort((a, b) => a.age - b.age);
};

console.log(nameAndAge());