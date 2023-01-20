const myFizzBuzz = require('../exercicio02.js');

// implemente seus testes aqui

describe('Verificar a função myFizzBuzz', () => {
  it('verifica se o numero é divisivel por 3 e 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('verifica se o numero é divisivel por 3', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('verifica se o numero é divisivel por 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('verifica se o numero NÃO é divisivel por 3 ou 5', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  
});