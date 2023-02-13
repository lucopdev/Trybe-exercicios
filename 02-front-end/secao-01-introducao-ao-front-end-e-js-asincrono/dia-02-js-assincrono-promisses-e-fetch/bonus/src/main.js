import './style.css';

const img = document.getElementById('pet-img');
const dogBtn = document.getElementById('dog-btn');
const catBtn = document.getElementById('cat-btn');
const surprise = document.getElementById('surprise');


dogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.message);
      const url = data.message;
      img.setAttribute('src', url);
      img.style.visibility = 'visible';
    });
});

catBtn.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => {
      console.log(data.file);
      const url = data.file;
      img.setAttribute('src', url);
      img.style.visibility = 'visible';
    });
});

surprise.addEventListener('click', () => {
  Promise.any([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://aws.random.cat/meow'),
  ])
    .then((response) => response.json())
    .then((data) => {
      const url = data.message || data.file;
      console.log(url);
      img.setAttribute('src', url);
      img.style.visibility = 'visible';
    })
});