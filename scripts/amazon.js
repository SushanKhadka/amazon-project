import { products } from './data.js';

const productsGridElem = document.querySelector('.products-grid');

products.forEach((product, i) => {
    let productDiv = document.createElement('div');
    productDiv.classList.add('product-div');
    productDiv.id = product.id;

    let displayImg = document.createElement('img');
    displayImg.src = product.image;

    let productName = document.createElement('p');
    productName.classList.add('display-name');
    productName.innerText = product.name;

    let ratingsDiv = document.createElement('div');
    ratingsDiv.classList.add('ratings-div');

    let stars = document.createElement('div');
    stars.classList.add('stars');
    stars.innerText = product.rating.stars;

    let count = document.createElement('p');
    count.classList.add('count');
    count.innerText = product.rating.count;

    ratingsDiv.appendChild(stars);
    ratingsDiv.appendChild(count);

    productDiv.appendChild(displayImg);
    productDiv.appendChild(productName);
    productDiv.appendChild(ratingsDiv);

    let addCartBtn = document.createElement('button');
    addCartBtn.classList.add('add-cart-btn');
    addCartBtn.innerText = "Add To Cart";

    productDiv.appendChild(addCartBtn);

    productsGridElem.appendChild(productDiv);
});
