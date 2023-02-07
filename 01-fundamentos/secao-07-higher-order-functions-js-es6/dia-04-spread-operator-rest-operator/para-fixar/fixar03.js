// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'morango', 'pessego'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['suco de laranja', 'merengue', 'mirtilo'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));