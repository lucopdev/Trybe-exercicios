const product = {
  id: 1,
  name: 'Camiseta',
};

const productPrice = {
  price: 23
}

const newProduct = { ...product, ...productPrice }

console.log(newProduct);