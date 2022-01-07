export function renderItem(item) {
    const newItemEl = document.createElement('div');
    const itemP = document.createElement('p');
    const quantityP = document.createElement('p');
    if (item.bought) {
        newItemEl.classList.add('bought');
    } else {
        newItemEl.classList.add('not-bought');
        
    }

    itemP.classList.add('item');
    quantityP.classList.add('quantity');

    itemP.textContent = item.item;
    quantityP.textContent = item.quantity;

    newItemEl.append(itemP, quantityP);

    return newItemEl;
}