const product = {
  id: 1,
  name: 'Camiseta',
};

const newProduct = { ...product, price: 23, store: 'Mesbla' }

console.log(newProduct);