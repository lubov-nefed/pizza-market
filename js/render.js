/* eslint-disable import/extensions */
import addListenerToBtn from './list.js';
// Done: завести переменные под DOM-элементы
// и найти их с помощью querySelector
const products = document.querySelector('.products');

export default function renderCatalogue(dataArr) { // Создаем разметку для каждого товара в каталоге
  if (dataArr.length) {
    dataArr.forEach(({
      name, url, ingredients, description, price,
    }) => {
      products.insertAdjacentHTML('beforeend', `
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
    });
  } else {
    products.insertAdjacentHTML('beforeend', `
            <p class="error-message">Sorry! Something went wrong. Try again later.</p>
            `);
  }

  addListenerToBtn('.product-btn');
}
