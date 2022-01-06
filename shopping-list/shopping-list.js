import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const listForm = document.querySelector('#form');
const listEl = document.querySelector('#shopping-list');
const deleteButton = document.querySelector('#delete-button');

console.log(listEl, listForm, deleteButton);

logoutButton.addEventListener('click', () => {
    logout();
});
