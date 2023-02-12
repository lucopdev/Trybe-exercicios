import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');
const USERS_API = 'https://dummyjson.com/users';

fetch(USERS_API)
  .then((response) => response.json())
  .then((data) => {
    fillUsersSelect(data.users);
  });

usersSelect.addEventListener('change', () => {
  clearPageData();

  fetch(`https://dummyjson.com/posts/user/${usersSelect.value}`)
    .then((response) => response.json())
    .then((data) => {
      fillPosts(data.posts);
      return fetch(`https://dummyjson.com/posts/${data.posts[0].id}/comments`);
    })
    .then((response) => response.json())
    .then((data) => {
      fillFeaturedPostComments(data.comments);
    })
    .catch((error) => {
      fillErrorMessage('Ocorreu um erro ao obter as informações');
      console.log(error.message);
    })
})
