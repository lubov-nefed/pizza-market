import {addListenerToBtn} from './list.js';
export function renderCatalogue(dataArr) {//Создаем разметку для каждого товара в каталоге
    if (dataArr) {
        dataArr.forEach (( {name, url, ingredients, description, price, oneSlice} )  => { 
            products.insertAdjacentHTML ('beforeend', `
            <div class="product">
            <img class="product__img" src="${url}">
            <div class="product__text">
            <h4 class="product__title">${name}</h4>
            <p class="product__ingredients">${ingredients}</p>
            <p class="product__description">${description}</p>
            <p class="product__price">${price}$</p></div>
            <button class="product-btn btn">Add to Cart</button>
            </div>
            `);        
        } ) 
    } else {
        products.insertAdjacentHTML ('beforeend', `
            <p class="error-message">Sorry! Something went wrong. Try again later.</p>            
            `);
    }
    
    addListenerToBtn('.product-btn');  
}