const generateEmail = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { nomeCompleto: fullName, email: `${email}@trybe.com` };
};

const newEmployees = () => {
  const employees = {
    id1: generateEmail('Lucas Silveira da Rosa'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: generateEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: generateEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());
