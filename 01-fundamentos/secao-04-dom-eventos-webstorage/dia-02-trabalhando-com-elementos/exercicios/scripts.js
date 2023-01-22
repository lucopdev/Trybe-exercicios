        // COLOQUE SEU CÓDIGO AQUI
        var h1 = document.createElement('h1');
        h1.className = 'title';
        h1.innerText = 'Trybe - Agência de Viagens';
        document.body.appendChild(h1);

        const main = document.createElement('main');
        main.id = 'main-section';
        document.body.appendChild(main);

        const sectionCenter = document.createElement('section');
        sectionCenter.id = 'center-content';
        sectionCenter.style.backgroundColor = 'green';
        main.appendChild(sectionCenter);

        const p = document.createElement('p');
        p.innerText = 'Agende aqui suas viagens!'
        sectionCenter.appendChild(p);

        const sectionLeft = document.createElement('section');
        sectionLeft.className = 'left-content';
        main.appendChild(sectionLeft);

        const sectionRight = document.createElement('section');
        sectionRight.className = 'right-content';
        sectionRight.style.margin = 'auto';
        sectionRight.style.width = '800px';
        main.appendChild(sectionRight);

        const randomImg = document.createElement('img');
        randomImg.src = 'https://picsum.photos/200';
        randomImg.className = 'small-image';
        sectionLeft.appendChild(randomImg);

        const ul = document.createElement('ul');
        sectionRight.appendChild(ul);

        const createList = (array) => {
            for (let index = 0; index < array.length; index += 1) {
                const li = document.createElement('li');
                li.innerText = array[index];
                ul.appendChild(li);
            }
        };
        createList(['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']);

        const createH3 = (array) => {
            for (let index = 0; index < array.length; index += 1) {
                const h3 = document.createElement('h3');
                h3.className = 'description';
                h3.innerText = array[index];
                main.appendChild(h3);
            }
        };
        createH3(['Melhores lugares no Brasil', 'Melhores lugares na europa', 'Melhores praias']);

        main.removeChild(sectionLeft);
        ul.lastChild.remove();
        ul.lastChild.remove();

        var sectionVerde = document.getElementById('center-content');

        sectionVerde.addEventListener('mouseover', () => {
          sectionVerde.style.backgroundColor = 'red';
        })

        sectionVerde.addEventListener('mouseout', () => {
          sectionVerde.style.backgroundColor = 'blue';
        })


