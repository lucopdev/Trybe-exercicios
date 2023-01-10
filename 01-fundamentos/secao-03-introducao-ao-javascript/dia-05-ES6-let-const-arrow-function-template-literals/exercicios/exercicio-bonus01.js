// const substituaX = (nome) => {
//   const frase = 'Tryber x aqui';

//   return frase.replace('x', nome);
// };
// console.log(substituaX('Lucas'));

const substituaX = (nome) => {
  const frase = 'Tryber x aqui';
  const fraseSeparada = frase.split(' ');
  for (let index = 0; index < frase.length; index += 1) {
    if (fraseSeparada[index] === 'x') {
      fraseSeparada[index] = nome;
    }
  }
  const novaFrase = fraseSeparada.join(' ');
  return novaFrase;
};
console.log(substituaX('Lucas'));

const minhasSkills = (returnFunc1) => {
  const skills = ['HTML5', 'CSS3', 'JavaScript'];
  let resultado =`
  ${returnFunc1}
  Minhas três principais habilidades são:`;
  for (let index = 0; index < skills.length; index += 1) {
    resultado = `${resultado} 
    - ${skills[index]}`;
  }
  return resultado;
};
console.log(minhasSkills(substituaX('Bebeto')));