import './style.css';
import getAddressFromCep from './getAddressFromCep.js';
import Swap from 'sweetalert2';

const cep = document.getElementById('input-cep');
const cepBtn = document.getElementById('get-btn');
const result = document.getElementById('result');
cep.focus();

export async function getCep() {
  try {
    const adressData = await getAddressFromCep(cep.value);
    result.innerHTML = `<p>Rua: ${adressData.logradouro}</p><p>Bairro: ${adressData.bairro}</p><p>Cidade: ${adressData.localidade}-${adressData.uf}</p><p>CEP: ${adressData.cep}</p>`;
  } catch (error) {
    error.message = 'Erro: endereço não encontrado';
    Swap.fire(error.message);
    console.log(error.message);
  }
}

cepBtn.addEventListener('click', getCep);

document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getCep();
  }
});