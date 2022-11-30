// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

const player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`);
console.log(`A jogadora ${player.name} tem ${player.medals.silver} medalhas de prata e ${player.medals.golden} de ouro.`);
console.log(`A jogadora ${player.name} foi eleita a melhor por ${player.bestInTheWorld.length} vezes.`);
console.table(player);