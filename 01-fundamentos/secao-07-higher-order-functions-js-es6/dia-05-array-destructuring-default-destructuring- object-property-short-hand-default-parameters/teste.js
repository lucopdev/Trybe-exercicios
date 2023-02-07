const adult = [
  {
    weight: 100,
    height: 1.85,
  },
  {
    weight: 90,
    height: 1.72,
  },
  {
    weight: 79,
    height: 1.99,
  },
];

// IMC = Índice de Massa Corporal

function IMC(person) {
  return parseFloat((person.weight / (Math.pow(person.height, 2))).toFixed(2));
}

console.log(adult.map(IMC));

//------------------------------------------
const countParams = (...params) => {
  return params.length;
}

console.log(countParams(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//-----------------------------------------
const newBook = (title, author, price, discount) => ({
  title,
  author,
  finalPrice: price - discount,
});

console.log(newBook('Senhor dos aneis', 'J.R.R. Tolkien', 80.00, 10));
