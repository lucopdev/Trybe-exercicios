const sendBtn = document.getElementById('send-btn-id');
const resetBtn = document.getElementById('reset-btn-id');
const nameInput = document.getElementById('name-input-id');
const emailInput = document.getElementById('email-input-id');
const radio = document.getElementsByClassName('radio');
const textArea = document.getElementById('textarea-id');
const dateInput = document.getElementById('date-input-id');
const oportunity = document.getElementById('oportunity');
const agree = document.getElementById('agree');

const validate = () => {
  if (nameInput.value.length < 10 || nameInput.value.length > 40 || emailInput.value.length < 10 || emailInput.value.length > 50 || textArea.value.length > 500) {
    return true;
  } else {
    return false;
  }
};

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (agree.checked !== true) {
    alert('Aceite os termos antes de enviar');
  } else {
    if (validate() === true) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
  }
});

resetBtn.addEventListener('click', () => {
  nameInput.value = '';
  emailInput.value = '';
  textArea.value = '';
  dateInput.value = '';
  oportunity.checked = false;
  agree.checked = false;
  for (let index = 0; index < radio.length; index += 1) {
    radio[index].checked = false;
  }
});