function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = document.getElementById('itemPrice').value;
    const itemDesc = document.getElementById('itemDesc').value;
    const itemImage = document.getElementById('itemImage').value;

    const menuItem = createMenuItem(itemName, itemPrice, itemDesc, itemImage);
    document.getElementById('menuContainer').appendChild(menuItem);

    // Clear input fields after adding item
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('itemDesc').value = '';
    document.getElementById('itemImage').value = '';
}

function createMenuItem(name, price, description, imageUrl) {
    const card = document.createElement('div');
    card.classList.add('menu-item');
    card.classList.add('menu-item');

    const image = document.createElement('img');
    image.src = imageUrl;
    card.appendChild(image);

    const details = document.createElement('div');
    details.classList.add('item-details');
    details.innerHTML = `<h3>${name}</h3><p>${description}</p><p>Price: $${price}</p>`;
    card.appendChild(details);

    return card;
}
