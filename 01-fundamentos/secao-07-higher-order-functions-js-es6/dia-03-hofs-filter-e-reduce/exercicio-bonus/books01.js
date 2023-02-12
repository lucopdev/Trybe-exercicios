const books = require('./books_data_base');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
  return books.reduce((acc, curr, index, array) => {
    if(index < 5){
    acc += `${array[index].author.name}, `;
    } else {
      acc += `${array[index].author.name}. `;
    }
    return acc;
  }, '');
}

console.log(reduceNames());