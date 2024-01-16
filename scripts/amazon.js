import { products } from './data.js';

const productsGridElem = document.querySelector('.products-grid');

products.forEach((product, i) => {
    let productDiv = document.createElement('div');
    productDiv.classList.add('product-div');
    productDiv.id = product.id;

    let displayImg = document.createElement('img');
    displayImg.classList.add('display-img');
    displayImg.src = product.image;
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    imgContainer.appendChild(displayImg);

    let productName = document.createElement('p');
    productName.classList.add('display-name');
    productName.innerText = product.name;
    let productNameContainer = document.createElement('div');
    productNameContainer.classList.add('product-name-container');
    productNameContainer.appendChild(productName);

    let ratingsDiv = document.createElement('div');
    ratingsDiv.classList.add('ratings-div');

    let starsImg = document.createElement('img');
    starsImg.classList.add('stars');
    let starsCalc = () => {
        switch(products[i].rating.stars){
            case 0:
                starsImg.src= '/images/ratings/rating-0.png';
                break;
            case 0.5:
                starsImg.src= '/images/ratings/rating-05.png';
                break;
            case 1:
                starsImg.src= '/images/ratings/rating-10.png';
                break;
            case 1.5:
                starsImg.src= '/images/ratings/rating-15.png';
                break;
            case 2:
                starsImg.src= '/images/ratings/rating-20.png';
                break;
            case 2.5:
                starsImg.src= '/images/ratings/rating-25.png';
                break;
            case 3.0:
                starsImg.src= '/images/ratings/rating-30.png';
                break;
            case 3.5:
                starsImg.src= '/images/ratings/rating-35.png';
                break;
            case 4.0:
                starsImg.src= '/images/ratings/rating-40.png';
                break;
            case 4.5:
                starsImg.src= '/images/ratings/rating-45.png';
                break;
            case 5.0:
                starsImg.src= '/images/ratings/rating-50.png';
                break;    
            default:
                starsImg.src= '/images/ratings/rating-0.png';
                break;
        }
    }
    starsCalc();

    let count = document.createElement('p');
    count.classList.add('count');
    count.innerText = product.rating.count;

    ratingsDiv.appendChild(starsImg);
    ratingsDiv.appendChild(count);

    let priceElemContainer = document.createElement('div');
    priceElemContainer.classList.add('price-container');
    let priceElem = document.createElement('p');
    priceElem.classList.add('price');
    priceElem.innerText = "$" + products[i].priceCents / 100;
    priceElemContainer.appendChild(priceElem);

    let dropdownContainer = document.createElement('div');
    dropdownContainer.classList.add('dropdown-container')

    let dropdownElem = document.createElement('select');
    dropdownElem.classList.add('dropdown');
    
    for (let i = 1; i <= 10; i++){
        let optionELem = document.createElement('option');
        optionELem.innerText = i;
        optionELem.value = i;
        dropdownElem.appendChild(optionELem);
    }

    dropdownContainer.appendChild(dropdownElem);

    let spacerElem = document.createElement('div');
    spacerElem.classList.add('spacer');

    let addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('add-to-cart-btn');
    addToCartBtn.innerText = "Add To Cart";
    let addToCartBtnContainer = document.createElement('div');
    addToCartBtnContainer.classList.add('add-to-cart-btn-container');
    addToCartBtnContainer.appendChild(addToCartBtn);

    

    productDiv.appendChild(imgContainer);
    productDiv.appendChild(productNameContainer);
    productDiv.appendChild(ratingsDiv);
    productDiv.appendChild(priceElemContainer);
    productDiv.appendChild(dropdownContainer);
    productDiv.appendChild(spacerElem);
    productDiv.appendChild(addToCartBtnContainer);

    productsGridElem.appendChild(productDiv);
});
