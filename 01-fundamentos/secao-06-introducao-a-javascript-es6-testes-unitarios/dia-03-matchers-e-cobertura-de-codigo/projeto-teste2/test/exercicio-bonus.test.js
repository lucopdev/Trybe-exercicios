const { professionalBoard, searchEmployee } = require('../exercicio-bonus');

describe('Testa as mensagens de erro', () => {
  it('testa a mensagem de erro de ID', () => {
    expect(() => { searchEmployee('9852-2-2a', 'lastName') }).toThrow('ID não identificada');
  });
  it('testa a mensagem de erro da informação', () => {
    expect(() => { searchEmployee('9852-2-2', 'lastNamea') }).toThrow('informação não disponível');
  });
});

describe('Testa o resultado da função', () => {
  it('testa se searchEmployee("9852-2-2", "lastName") retorna [ "9852-2-2", "Cook" ]', () => {
    expect(searchEmployee('9852-2-2', 'lastName')).toEqual([ '9852-2-2', 'Cook' ]);
  });
});