const sum = require('../exercicio01');

describe('Testa a função sum', () => {
  it('testa se a sum(4, 5) retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('Testa se sum(0, 0) retorna 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('Testa se sum(4, "5") lança um erro', () => {
    expect(() => { sum(4, '5') }).toThrow();
  });
  it('Testa se sum(4, "5") lança a mensagem "parameters must be numbers"', () => {
    expect(() => { sum(4, '5') }).toThrow('parameters must be numbers');
  });
});