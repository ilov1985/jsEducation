const data = JSON.parse(itemInfo);

console.log(data);

const itemEl = document.querySelector('.items');

data.forEach(element => {
    console.log(element);

    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    itemEl.appendChild(cardEl);

    const imgContainerEl = document.createElement('div');
    imgContainerEl.classList.add('img');
    if (element.back != 0) { imgContainerEl.style.backgroundImage = element.back };
    cardEl.appendChild(imgContainerEl);

    const imgEl = document.createElement('img');
    // imgEl.classList.add('.img');
    imgEl.src = element.img;
    imgContainerEl.appendChild(imgEl);

    const textEl = document.createElement('div');
    textEl.classList.add('text')
    cardEl.appendChild(textEl);

    const titleEl = document.createElement('h3');
    titleEl.classList.add('itemTitle');
    titleEl.textContent = element.title;
    textEl.appendChild(titleEl);

    const dscEl = document.createElement('p');
    dscEl.classList.add('itemDsc');
    dscEl.textContent = element.description;
    textEl.appendChild(dscEl);

    const priceEl = document.createElement('p');
    priceEl.classList.add('itemPrice');
    priceEl.textContent = element.currency + element.price;
    textEl.appendChild(priceEl);
});

imgContainerEl.addEventListener('mouseover', function(e) {
    // body
});