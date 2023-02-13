import getAddressFromCep from "../src/getAddressFromCep";

describe('Quando a requisição é bem sucedida, ela retorna os dados esperados', () => {
  test('deve retornar os dados quando passamos um cep válido', async () => {
    const adress = await getAddressFromCep('96030640');

    expect(adress.cep).toBe('96030-640');
    expect(adress.logradouro).toBe('Rua Doutor Gervasio Alves Pereira');
    expect(adress.bairro).toBe('Fragata');
    expect(adress.localidade).toBe('Pelotas');
    exect(adress.uf).toBe('RS');
  })
})
// deve aceitar ceps com ou sem hifens
// deve lançar um erro "você precisa passar um CEP" quando recebe um cep vazio
// deve passar um erro quando o cep for inválido