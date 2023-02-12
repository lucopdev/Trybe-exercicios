import './style.css';

const getQuoteBtn = document.getElementById('get-quote');
const quoteTxt = document.getElementById('quote');
const authorTxt = document.getElementById('author');
const errorTxt = document.getElementById('error-message');
const API_URL = `https://dummyjson.com/quotes/random`;


getQuoteBtn.addEventListener('click', async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    quoteTxt.innerText = `"${data.quote}"`;
    authorTxt.innerText = data.author;
    errorTxt.innerText = '';
  } catch (error) {
    quoteTxt.innerText = '';
    authorTxt.innerText = '';
    errorTxt.innerText = `Error getting quote: ${error.message}`;
  }
});