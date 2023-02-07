// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

const { name, age, description: { specieName, jedi }, homeWorld: { name: planetName, population } } = character;

console.log(planetName);
