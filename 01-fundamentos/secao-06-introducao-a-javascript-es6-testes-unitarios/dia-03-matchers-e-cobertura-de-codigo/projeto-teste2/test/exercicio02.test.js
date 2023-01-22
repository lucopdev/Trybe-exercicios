const { info } = require('../exercicio02.js');

describe('Testa a função printMessage()', () => {
  it('Testa se o parametro passado para a função printMessage() possui a propriedade personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
});
