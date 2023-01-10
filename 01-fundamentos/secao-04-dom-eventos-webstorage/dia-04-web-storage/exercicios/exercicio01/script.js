const mainSection = document.getElementById('main-section');

const createSection = (id) => {
  const section = document.createElement('section');
  section.id = id;
  mainSection.insertAdjacentElement('afterbegin', section);
};

const createBtnDiv = (id, innerText) => {
  const h5 = document.createElement('h5');
  const div = document.createElement('div');
  const section = document.getElementById('all-btn-section');
  div.id = id;
  h5.innerText = innerText;
  h5.style.textAlign = 'center';
  section.appendChild(div);
  div.appendChild(h5);
};

const BtnCreate = (id, innerText, idParent) => {
  const divColor = document.getElementById(idParent);
  const btn = document.createElement('button');
  btn.id = id;
  btn.innerHTML = innerText;
  btn.style.display = 'block';
  divColor.appendChild(btn);
};

const switchBGColor = () => {
  const btnBgColorWhite = document.getElementById('btn-bgColor-white');
  const btnBgColorBlack = document.getElementById('btn-bgColor-black');
  const btnBgColorGreen = document.getElementById('btn-bgColor-green');
  const btnBgColorBlue = document.getElementById('btn-bgColor-blue');
  const btnBgColorYellow = document.getElementById('btn-bgColor-yellow');
  const p = document.getElementById('paragraph');

  btnBgColorWhite.addEventListener('click', () => {
    p.style.backgroundColor = 'white';
    localStorage.setItem('bgColor', JSON.stringify(p.style.backgroundColor));
  });

  btnBgColorBlack.addEventListener('click', () => {
    p.style.backgroundColor = 'black';
    localStorage.setItem('bgColor', JSON.stringify(p.style.backgroundColor));
  });

  btnBgColorGreen.addEventListener('click', () => {
    p.style.backgroundColor = 'green';
    localStorage.setItem('bgColor', JSON.stringify(p.style.backgroundColor));
  });

  btnBgColorBlue.addEventListener('click', () => {
    p.style.backgroundColor = 'blue';
    localStorage.setItem('bgColor', JSON.stringify(p.style.backgroundColor));
  });

  btnBgColorYellow.addEventListener('click', () => {
    p.style.backgroundColor = 'yellow';
    localStorage.setItem('bgColor', JSON.stringify(p.style.backgroundColor));
  });
};

const switchTextColor = () => {
  const btnColorBlack = document.getElementById('btn-color-black');
  const btnColorRed = document.getElementById('btn-color-red');
  const btnColorWhite = document.getElementById('btn-color-white');
  const p = document.getElementById('paragraph');

  btnColorBlack.addEventListener('click', () => {
    p.style.color = 'black';
    localStorage.setItem('textColor', JSON.stringify(p.style.color));
  });

  btnColorRed.addEventListener('click', () => {
    p.style.color = 'red';
    localStorage.setItem('textColor', JSON.stringify(p.style.color));
  });

  btnColorWhite.addEventListener('click', () => {
    p.style.color = 'white';
    localStorage.setItem('textColor', JSON.stringify(p.style.color));
  });
};

const switchFontSize = () => {
  const btnFontSize8 = document.getElementById('btn-fontsize-8');
  const btnFontSize10 = document.getElementById('btn-fontsize-10');
  const btnFontSize12 = document.getElementById('btn-fontsize-12');
  const btnFontSize14 = document.getElementById('btn-fontsize-14');
  const btnFontSize20 = document.getElementById('btn-fontsize-20');
  const p = document.getElementById('paragraph');

  btnFontSize8.addEventListener('click', () => {
    p.style.fontSize = '8pt';
    localStorage.setItem('fontSize', JSON.stringify(p.style.fontSize));
  });

  btnFontSize10.addEventListener('click', () => {
    p.style.fontSize = '10pt';
    localStorage.setItem('fontSize', JSON.stringify(p.style.fontSize));
  });

  btnFontSize12.addEventListener('click', () => {
    p.style.fontSize = '12pt';
    localStorage.setItem('fontSize', JSON.stringify(p.style.fontSize));
  });

  btnFontSize14.addEventListener('click', () => {
    p.style.fontSize = '14pt';
    localStorage.setItem('fontSize', JSON.stringify(p.style.fontSize));
  });

  btnFontSize20.addEventListener('click', () => {
    p.style.fontSize = '20pt';
    localStorage.setItem('fontSize', JSON.stringify(p.style.fontSize));
  });
};

const switchLineSpaceButton = () => {
  const btnLinespace1 = document.getElementById('btn-linespace-1');
  const btnLinespaceNormal = document.getElementById('btn-linespace-normal');
  const btnLinespace1half = document.getElementById('btn-linespace-1half');
  const btnLinespace2 = document.getElementById('btn-linespace-2');
  const btnLinespace3 = document.getElementById('btn-linespace-3');
  const p = document.getElementById('paragraph');

  btnLinespace1.addEventListener('click', () => {
    p.style.lineHeight = '8pt';
    localStorage.setItem('lineHeight', JSON.stringify(p.style.lineHeight));
  });

  btnLinespaceNormal.addEventListener('click', () => {
    p.style.lineHeight = 'normal';
    localStorage.setItem('lineHeight', JSON.stringify(p.style.lineHeight));
  });

  btnLinespace1half.addEventListener('click', () => {
    p.style.lineHeight = '1.5';
    localStorage.setItem('lineHeight', JSON.stringify(p.style.lineHeight));
  });

  btnLinespace2.addEventListener('click', () => {
    p.style.lineHeight = '2';
    localStorage.setItem('lineHeight', JSON.stringify(p.style.lineHeight));
  });

  btnLinespace3.addEventListener('click', () => {
    p.style.lineHeight = '3';
    localStorage.setItem('lineHeight', JSON.stringify(p.style.lineHeight));
  });
};

const switchFontType = () => {
  const btnArial = document.getElementById('btn-arial');
  const btnTimes = document.getElementById('btn-times');
  const p = document.getElementById('paragraph');

  btnArial.addEventListener('click', () => {
    p.style.fontFamily = 'Arial';
    localStorage.setItem('fontFamily', JSON.stringify(p.style.fontFamily));
  });

  btnTimes.addEventListener('click', () => {
    p.style.fontFamily = 'Times New Roman';
    localStorage.setItem('fontFamily', p.style.fontFamily);
  });
};

const recoveryLocalStorage = () => {
  const p = document.getElementById('paragraph');
  p.style.backgroundColor = JSON.parse(localStorage.getItem('bgColor'));
  p.style.color = JSON.parse(localStorage.getItem('textColor'));
  p.style.fontSize = JSON.parse(localStorage.getItem('fontSize'));
  p.style.lineHeight = JSON.parse(localStorage.getItem('lineHeight'));
  p.style.fontFamily = JSON.parse(localStorage.getItem('fontFamily'));
};

window.onload = () => {
  createSection('all-btn-section');
  createBtnDiv('container-bgColor-button', 'Cor de fundo');
  createBtnDiv('container-color-button', 'Cor do texto');
  createBtnDiv('container-fontsize-button', 'Tamanho do Texto');
  createBtnDiv('container-linespace-button', 'Espaço Entre Linhas');
  createBtnDiv('container-fontType-button', 'Tipo da Fonte');

  BtnCreate('btn-bgColor-white', 'White', 'container-bgColor-button');
  BtnCreate('btn-bgColor-black', 'Black', 'container-bgColor-button');
  BtnCreate('btn-bgColor-green', 'Green', 'container-bgColor-button');
  BtnCreate('btn-bgColor-blue', 'Blue', 'container-bgColor-button');
  BtnCreate('btn-bgColor-yellow', 'Yellow', 'container-bgColor-button');

  BtnCreate('btn-color-black', 'Black', 'container-color-button');
  BtnCreate('btn-color-red', 'Red', 'container-color-button');
  BtnCreate('btn-color-white', 'White', 'container-color-button');

  BtnCreate('btn-fontsize-8', '8pt', 'container-fontsize-button');
  BtnCreate('btn-fontsize-10', '10pt', 'container-fontsize-button');
  BtnCreate('btn-fontsize-12', '12pt', 'container-fontsize-button');
  BtnCreate('btn-fontsize-14', '14pt', 'container-fontsize-button');
  BtnCreate('btn-fontsize-20', '20pt', 'container-fontsize-button');

  BtnCreate('btn-linespace-1', '1', 'container-linespace-button');
  BtnCreate('btn-linespace-normal', 'Normal', 'container-linespace-button');
  BtnCreate('btn-linespace-1half', '1.5', 'container-linespace-button');
  BtnCreate('btn-linespace-2', '2.0', 'container-linespace-button');
  BtnCreate('btn-linespace-3', '3.0', 'container-linespace-button');

  BtnCreate('btn-arial', 'Arial', 'container-fontType-button');
  BtnCreate('btn-times', 'Times New Roman', 'container-fontType-button');

  recoveryLocalStorage();
  switchBGColor();
  switchTextColor();
  switchFontSize();
  switchLineSpaceButton();
  switchFontType();
};