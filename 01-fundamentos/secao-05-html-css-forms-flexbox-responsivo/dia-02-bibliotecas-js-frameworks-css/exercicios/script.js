const sendBtn = document.getElementById('send-btn-id');
const resetBtn = document.getElementById('reset-btn-id');
const nameInput = document.getElementById('name-input-id');
const emailInput = document.getElementById('email-input-id');
const radio = document.getElementsByClassName('radio');
const textArea = document.getElementById('floatingTextarea');
const dateInput = document.getElementById('date-input-id');
const flexSwitchCheckOportunity = document.getElementById('flexSwitchCheckOportunity');
const flexSwitchAgree = document.getElementById('flexSwitchAgree');

// dateInput.DatePickerX.init();

const validate = () => {
  if (nameInput.value.length < 10 || nameInput.value.length > 40 || emailInput.value.length < 10 || emailInput.value.length > 50 || textArea.value.length > 500) {
    return true;
  } else {
    return false;
  }
};

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (flexSwitchAgree.checked !== true) {
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
  flexSwitchCheckOportunity.checked = false;
  flexSwitchAgree.checked = false;
  for (let index = 0; index < radio.length; index += 1) {
    radio[index].checked = false;
  }
});