const myRemove = require('../exercicio01.js');

// implemente seus testes aqui

describe('Testa a função myRemove', () => {
  it('Espera que o array retornado exclua o item, caso ele exista', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Espera que o array retornado exclua o item, caso ele exista', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual(expect.not.arrayContaining([1, 2, 3, 4]));
  });
  it('Espera que o array retornado exclua o item, caso ele exista', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});