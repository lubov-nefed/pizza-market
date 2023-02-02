import { addToCart } from './cart.js';
import { renderMarkup } from './render.js';

export { createCatalogue };

function createCatalogue(dataArr) {
  const products = document.querySelector('.products');
  if (dataArr.length) {
    dataArr.forEach((obj) => { renderMarkup(obj, products) });
  } else {
    const erorMsg = `<p class="error-message">Sorry! Something went wrong. Try again later.</p>` 
    products.insertAdjacentHTML('beforeend', erorMsg);
  }
  const btnCollection = document.querySelectorAll('.product-btn');
  btnCollection.forEach((element) => element.addEventListener('click', addToCart));
}