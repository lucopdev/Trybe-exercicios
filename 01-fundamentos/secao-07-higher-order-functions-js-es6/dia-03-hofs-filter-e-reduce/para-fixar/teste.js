// const pokemons = [
//   {
//     name: 'Pikachu',
//     type: 'eletric',
//   },
//   {
//     name: 'Squirtle',
//     type: 'water',
//   },
//   {
//     name: 'Magnetrik',
//     type: 'eletric',
//   },
//   {
//     name: 'Charizard',
//     type: 'fire',
//   },
//   {
//     name: 'Squid',
//     type: 'water',
//   },
//   {
//     name: 'Magikarp',
//     type: 'water',
//   },
//   {
//     name: 'Evysaur',
//     type: 'grass',
//   },
//   {
//     name: 'Bulbasaur',
//     type: 'grass',
//   },
//   {
//     name: 'Charmander',
//     type: 'fire',
//   },
// ]

// const pokemonsPorTipo = pokemons.reduce((pokemonPorTipo, pokemonAtual) => {
//   pokemonPorTipo[pokemonAtual.type] = [];
//   pokemonPorTipo[pokemonAtual.type].push(pokemonAtual.name);
//   return pokemonPorTipo;
// }, {});
// console.log(pokemonsPorTipo);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const par = numbers.filter((number) => {
  if (number % 2 === 0) {
    return number;
  }
}).reduce((acc, numberAtual) => acc + numberAtual);

console.log(par);