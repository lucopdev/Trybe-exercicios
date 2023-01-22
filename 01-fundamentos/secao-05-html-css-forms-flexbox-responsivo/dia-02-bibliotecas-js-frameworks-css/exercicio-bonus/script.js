const sendBtn = document.getElementById('send-btn-id');
const resetBtn = document.getElementById('reset-btn-id');
const nameInput = document.getElementById('name-input-id');
const emailInput = document.getElementById('email-input-id');
const radio = document.getElementsByClassName('radio');
const textArea = document.getElementById('floatingTextarea');
const flexSwitchCheckOportunity = document.getElementById('flexSwitchCheckOportunity');
const flexSwitchAgree = document.getElementById('flexSwitchAgree');

const validateInputs = () => {
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
    if (validateInputs() === true) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
  }
});

const picker = new Pikaday({
  field: document.getElementById('date'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
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