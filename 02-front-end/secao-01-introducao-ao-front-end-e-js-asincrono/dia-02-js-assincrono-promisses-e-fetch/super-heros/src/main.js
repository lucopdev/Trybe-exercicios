import '../src/style.css';
import Swal from 'sweetalert2';

const key = 2507621669386990;
const actionBtn = document.getElementById('action');
const img = document.getElementById('hero-img');
const h2 = document.getElementById('hero-name');

actionBtn.addEventListener('click', () => {
  const randomNumber = Math.round(Math.random() * 800);

  return fetch(`https://superheroapi.com/api.php/${key}/${randomNumber}`)
    .then((response) => response.json())
    .then((data) => {
      img.setAttribute('src', data.image.url);
      img.style.visibility = 'visible';
      h2.innerHTML = data.name;
    })
    .catch((error)=>{
      error.message = "Ooops... we don't have the image";
      Swal.fire(error.message);
      console.log(error.message);
    })
});
