const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const countA = () => {
  const letterA = [];
  names.forEach((name) => {
    names.forEach((name2, index) => {
      if (name[index] === 'A' || name[index] === 'a') {
        letterA.push(name[index]);
      }
    });
  });
  return letterA.length
};
console.log(countA());
