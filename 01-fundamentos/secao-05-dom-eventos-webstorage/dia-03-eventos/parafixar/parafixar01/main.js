const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const liS = document.getElementsByTagName('li');

firstLi.addEventListener('mouseover', (e) => {
    alert('Oeeew');
});



myWebpage.style.cursor = 'pointer';
firstLi.style.cursor = 'pointer';
secondLi.style.cursor = 'pointer';
thirdLi.style.cursor = 'pointer';
// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// R - por causa da propriedade transform da classe tech no styles.css.
// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

firstLi.addEventListener('click', (e) => {
    if (firstLi.className.includes('tech')) {
        firstLi.className = ''
    } else {
        firstLi.className = 'tech';
    }
    for (let index in liS) {
        if (liS[index].className.includes('tech')) {
            liS[index].className = '';
            firstLi.className = 'tech';
        }
    }
});
secondLi.addEventListener('click', (e) => {
    if (secondLi.className.includes('tech')) {
        secondLi.className = ''
    } else {
        secondLi.className = 'tech';
    }
    for (let index in liS) {
        if (liS[index].className.includes('tech')) {
            liS[index].className = '';
            secondLi.className = 'tech';
        }
    }
});
thirdLi.addEventListener('click', (e) => {
    if (thirdLi.className.includes('tech')) {
        thirdLi.className = ''
    } else {
        thirdLi.className = 'tech';
    }
    for (let index in liS) {
        if (liS[index].className.includes('tech')) {
            liS[index].className = '';
            thirdLi.className = 'tech';
        }
    }
});


//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', () => {
    for (let index in liS) {
        if (liS[index].className.includes('tech')) {
            liS[index].innerText = input.value;
        }
    }
})
// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?
myWebpage.addEventListener('dblclick', () => {
    open('https://lucopdev.github.io/portfolio/index.html');
});
// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
myWebpage.addEventListener('mouseover', () => {
    myWebpage.style.color = '#006dfb'
});
myWebpage.addEventListener('mouseout', () => {
    myWebpage.style.color = 'white';
});

// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}


firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.