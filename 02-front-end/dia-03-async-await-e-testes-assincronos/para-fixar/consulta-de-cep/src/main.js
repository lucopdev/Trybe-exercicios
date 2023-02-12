import './style.css';
import Swap from 'sweetalert2';

const cep = document.getElementById('cep');
const cepBtn = document.getElementById('get-btn');
const result = document.getElementById('result');
cep.focus();

const getCep = async () => {
  const API_URL = `https://viacep.com.br/ws/${cep.value}/json/`;
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    result.innerHTML = `<p>Rua: ${data.logradouro}</p><p>Bairro: ${data.bairro}</p><p>Cidade: ${data.localidade}-${data.uf}</p><p>CEP: ${data.cep}</p>`;
  } catch (error) {
    Swap.fire(`Erro: endereço não encontrado`);
  }
}

cepBtn.addEventListener('click', getCep);

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getCep();
  }
});