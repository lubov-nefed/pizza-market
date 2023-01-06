import {addListenerToBtn} from '/js/list.js';
export function renderCatalogue(dataArr) {//Создаем разметку для каждого товара в каталоге
    for (let obj of dataArr) {
        let { name, url, ingredients, description, price, oneSlice } = obj;        
        products.innerHTML +=`
        <div class="product">
        <img class="product__img" src="${url}">
        <div class="product__text">
        <h4 class="product__title">${name}</h4>
        <p class="product__ingredients">${ingredients}</p>
        <p class="product__description">${description}</p>
        <p class="product__price">${price}$</p></div>
        <button class="product-btn btn">Add to Cart</button>
        </div>
        `;
        addListenerToBtn();
    }    
}