// printMessageTest.test.js
const { info, printMessage } = require('../exercicio03.js');

describe('Exercício de teste seção 7.3', () => {
  it('teste objeto info', () => {
    expect(info).toHaveProperty('personagem');
  });
  // implemente seus testes aqui
  it('testa objeto info', () => {
    expect(printMessage(info)).toContain('Boas vindas,');
    expect(printMessage(info)).toMatch(info.personagem);
  });
  const person = 'Lucas';
    const user = {
      nameUser: 'Lucas',
      idade: 38
    }
  it('testa a função printMessage', () => {
    expect(() => { printMessage(user) }).toThrow(Error.message);
    expect(() => { printMessage(person) }).toThrow(Error.message);
  });
  
})