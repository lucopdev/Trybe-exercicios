import validator from 'validator';
import './style.css';

const btnValidate = document.getElementById('btn-validate');
const input = document.getElementById('input');
const select = document.getElementById('type-select');
const output = document.getElementById('output');

btnValidate.addEventListener('click', (e) => {
  e.preventDefault();
  if (select.value === 'email') {
    const validation = String(validator.isEmail(input.value));
    output.innerHTML = `A validação retornou ${validation.toUpperCase()}`;
  }
  if (select.value === 'cpf'){
    const validation = String(validator.isLength(input.value, { min: 14, max: 14 }));
    output.innerHTML = `A validação retornou ${(validation).toUpperCase()}`;
  }
});