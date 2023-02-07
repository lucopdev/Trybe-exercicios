const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (carro) => {
  const [modelo, marca, ano] = carro;
  return carro = {
    modelo,
    marca,
    ano,
  };
};

console.log(toObject(palio));
console.log(toObject(shelbyCobra))
console.log(toObject(chiron));