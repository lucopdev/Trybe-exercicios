import './style.css';
import Swal from 'sweetalert2';

const input = document.getElementById('input');
const submit = document.getElementById('submit');
const display = document.getElementById('display');

const removeBoard = () => {
  const divItem = document.getElementsByClassName('div-item');
  while (display.children.length > 0) {
    for (let index = 0; index < display.children.length; index += 1) {
      display.removeChild(divItem[index]);
    }
  }
};


submit.addEventListener('click', () => {
  removeBoard();
  fetch(`https://api.exchangerate.host/latest?base=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      if (!input.value) {
        Swal.fire('Digite uma moeda!');
        return;
      }


      const dataRates = [data.rates];
      const arrayGroup = dataRates.map((currency) => Object.entries(currency));

      arrayGroup.find((arrayItem) => {
        arrayItem.find((item) => {
          if (item[0] === input.value) {
            const itemFound = arrayGroup.find((arrayzao) => {
              arrayzao.forEach((arrayzin) => {
                const moeda = arrayzin[0];
                const div = document.createElement('div');
                div.className = 'div-item';
                display.appendChild(div);
                const p = document.createElement('p');
                p.id = 'coin-text';
                p.innerHTML = `${arrayzin[0]} <p id="span">${arrayzin[1].toFixed(3)}</p>`;
                div.appendChild(p);
              })
            })
          }
        })
      });
    })
    .catch((error) => {
      error = 'Erro ao obter informações!';
      Swal.fire(error.message)
    })

})
