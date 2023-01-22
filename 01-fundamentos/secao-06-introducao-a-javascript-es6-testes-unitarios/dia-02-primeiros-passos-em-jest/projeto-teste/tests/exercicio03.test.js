const { encode, decode } = require('../exercicio03');

describe('Testa a função encode', () => {
  it('Testa se a função encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });

  it('testa se as vogais a, e, i, o, u, retornam 1, 2, 3, 4, 5', () => {
    expect(encode('aeiou')).toBe('12345');
  });
});

describe('testa a função decode', () => {
  it('testa se a função decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });

  it('testa se os números 1, 2, 3, 4, 5 retornam a, e, i, o, u', () => {
    expect(decode('12345')).toBe('aeiou');
  });
});

describe('testa com mais letras do alfabeto', () => {
  it('testa se outras letras vão ser convertidas na função encode', () => {
    expect(encode('ola tribo')).toBe('4l1 tr3b4');
  });
  it('testa se outras letras vão ser convertidas na função encode', () => {
    expect(decode('4l1 tr3b4')).toBe('ola tribo');
  });
});

describe('testa o comprimento da string', () => {
  it('testa se a string retornada tem o mesmo número de caracteres que a string inicial na função encode', () => {
    expect(encode('ola tribo')).toHaveLength(9);
  });

  it('testa se a string retornada tem o mesmo número de caracteres que a string inicial na função decode', () => {
    expect(decode('ola tribo')).toHaveLength(9);
  });
});
