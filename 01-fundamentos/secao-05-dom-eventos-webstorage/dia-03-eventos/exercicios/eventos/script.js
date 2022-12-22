const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const buttonsContainer = document.getElementsByClassName('buttons-container');
const btnAdd = document.getElementById('btn-add');
const taskInput = document.getElementById('task-input');
const myTaskDiv = document.getElementsByClassName('my-tasks');

const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}
createDaysOfTheWeek();

// Escreva seu código abaixo.

// ---------- CRIA OS DIAS ------------
const monthDays = () => {
    const days = document.getElementById('days');
    for (let day of decemberDaysList) {
        const daysLi = document.createElement('li');
        daysLi.className = 'day';
        daysLi.innerText = day;
        daysLi.style.lineHeight = '40px'
        days.appendChild(daysLi);
        if (day === 24) daysLi.className += ' holyday';
        if (day === 25) daysLi.className += ' holyday';
        if (day === 31) daysLi.className += ' holyday';

        if (day === 4) daysLi.className += ' friday';
        if (day === 11) daysLi.className += ' friday';
        if (day === 18) daysLi.className += ' friday';
        if (day === 25) daysLi.className += ' friday';
    }
};
monthDays();

// ----------- CRIA BOTÃO HOLYDAY ------------
const createHolydayButton = (string) => {
    const holydayButton = document.createElement('button');
    holydayButton.id = 'btn-holyday';
    holydayButton.innerText = string;
    buttonsContainer[0].appendChild(holydayButton);
};
createHolydayButton('Feriados');

// ----------- CRIA EVENTO HOLYDAY ------------
const holydayButton = document.getElementById('btn-holyday');
holydayButton.addEventListener('click', () => {
    const holydays = document.getElementsByClassName('holyday');
    for (let index = 0; index < holydays.length; index += 1) {
        if (holydays[index].style.backgroundColor === 'green') {
            holydays[index].style.backgroundColor = 'rgb(238,238,238)';
            holydays[index].style.color = 'grey';
        } else {
            holydays[index].style.backgroundColor = 'green';
            holydays[index].style.color = 'white';
        }
    };
});

// ---------- CRIA BOTÃO FRIDAY ----------
const createFridayButton = (string) => {
    const fridayButton = document.createElement('button');
    fridayButton.id = 'btn-friday';
    fridayButton.innerText = string;
    buttonsContainer[0].appendChild(fridayButton);
};
createFridayButton('Sexta-feira');

// ---------- FRIDAY BUTTON -----------
const fridayButton = document.getElementById('btn-friday');
fridayButton.addEventListener('click', () => {
    const fridays = document.getElementsByClassName('friday');
    for (let index = 0; index < fridays.length; index += 1) {
        if (fridays[index].innerText !== 'Sextou!') {
            fridays[index].innerText = 'Sextou!'
        } else {
            fridays[index].innerText = innerTextSave;
        }
    };
});

// --------ZOOM EFECT ----------
const daysLi = document.getElementsByClassName('day');
for (let index = 0; index < daysLi.length; index += 1) {
    daysLi[index].addEventListener('mouseenter', () => {
        daysLi[index].style.fontSize = '40px';
    });
    daysLi[index].addEventListener('mouseout', () => {
        daysLi[index].style.fontSize = '18px';
    });
}

// ------- ADD TAREFA --------
btnAdd.addEventListener('click', () => {
    const span = document.createElement('span');
    span.style.display = 'block';
    span.id = 'inputTask-span'
    span.innerHTML = taskInput.value;
    myTaskDiv[0].appendChild(span);
});
console.log(taskInput.value);