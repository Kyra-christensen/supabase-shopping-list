import { checkAuth, 
    logout,
    getItem,
    createItem,
    updateBoughtItem,
    deleteList } from '../fetch-utils.js';

checkAuth();
import { renderItem } from '../render-utils.js';
const logoutButton = document.getElementById('logout');
const listForm = document.querySelector('#form');
const listEl = document.querySelector('#shopping-list');
const deleteButton = document.querySelector('#delete-button');

console.log(listEl, listForm, deleteButton);

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    await displayShoppingListItems();
});

listForm.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(listForm);

    const item = data.get('item');
    const quantity = data.get('quantity');

    await createItem(item, quantity);

    listForm.reset();

    await displayShoppingListItems();
});

deleteButton.addEventListener('click', async() => {
    await deleteList();

    await displayShoppingListItems();
});

async function displayShoppingListItems() {
    const list = await getItem();
    listEl.textContent = '';

    for (let item of list) {
        const listItemEl = renderItem(item);

        listItemEl.addEventListener('click', async() => {
            await updateBoughtItem(item.id);
            displayShoppingListItems();
            console.log(item);
        });
        
        listEl.append(listItemEl);
        
    }
    
}
