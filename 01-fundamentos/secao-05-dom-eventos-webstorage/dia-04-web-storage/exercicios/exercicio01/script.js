const mainSection = document.getElementById('main-section');

const createBtnDiv = (id) => {
  const h5 = document.createElement('h5');
  const div = document.createElement('div');
  div.id = id;
  h5.innerText = 'Cor de fundo';
  h5.style.textAlign = 'center';
  mainSection.insertAdjacentElement('afterbegin', div);
  div.appendChild(h5);
};

const colorBtnCreate = (id, innerText, idParent) => {
  const divColor = document.getElementById(idParent);
  const btn = document.createElement('button');
  btn.id = id;
  btn.innerHTML = innerText;
  btn.style.display = 'block';
  divColor.appendChild(btn);
};

window.onload = () => {
  createBtnDiv('container-button');

  colorBtnCreate('btn-color-white', 'White', 'container-button');
  colorBtnCreate('btn-color-black', 'Black', 'container-button');
  colorBtnCreate('btn-color-green', 'Green', 'container-button');
  colorBtnCreate('btn-color-blue', 'Blue', 'container-button');
  colorBtnCreate('btn-color-yellow', 'Yellow', 'container-button');

  
};