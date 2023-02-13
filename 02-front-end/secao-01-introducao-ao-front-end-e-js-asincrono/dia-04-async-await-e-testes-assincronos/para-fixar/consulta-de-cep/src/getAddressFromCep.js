export default async function getAddressFromCep(cep) {
  const API_URL = `https://viacep.com.br/ws/${cep}/json/`;
  if (!cep) throw new Error('Digite um CEP');

  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}
