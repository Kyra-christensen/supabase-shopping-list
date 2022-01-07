export function renderItem(item) {
    const newItemEl = document.createElement('div');
    const itemP = document.createElement('p');

    if (item.bought === true) {
        newItemEl.classList.add('bought');
    } else {
        newItemEl.classList.add('not-bought');
    }

    itemP.classList.add('item');

    itemP.textContent = item.item;

    newItemEl.append(itemP);

    return newItemEl;
}