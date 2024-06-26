import addToCart from './cart.js';
import renderMarkup from './render.js';

function createCatalogue(dataArr) {
  const products = document.querySelector('.products');
  if (dataArr.length) {
    dataArr.forEach((obj) => { renderMarkup(obj, products); });
  }
  const btnCollection = document.querySelectorAll('.product-btn');
  btnCollection.forEach((element) => element.addEventListener('click', addToCart));
}
export default createCatalogue;
