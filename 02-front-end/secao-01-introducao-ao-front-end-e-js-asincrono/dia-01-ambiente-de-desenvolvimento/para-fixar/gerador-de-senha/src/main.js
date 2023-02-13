// console.log('Hello World!');
import { nanoid } from 'nanoid';
import copy from 'clipboard-copy';
import './style.css';

const btn = document.getElementById('btn-generate');
const output = document.getElementById('output');
const btnCopy = document.getElementById('btn-copy');

btn.addEventListener('click', () => {
  const securityPassword = nanoid();
  output.innerHTML = securityPassword;
});

btnCopy.addEventListener('click', () => {
  copy(output.innerHTML);
});
