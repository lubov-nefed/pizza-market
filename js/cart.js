import { renderMarkup } from './render.js';
export { addToCart };

function toggleEmptyCartMessage() {
  const cart = document.querySelector('.cart');
  const emptyCartMessage = document.querySelector('#emptyMessage');
  if (cart.innerHTML !== '') {
    emptyCartMessage.classList.add('hidden');
  } else {
    emptyCartMessage.classList.remove('hidden');
  }
}

const increaseCartProductQuantity = (evt) => {
    const card = evt.target.closest('.cart-product') || document.getElementById(evt.target.parentElement.querySelector('.product__title').textContent);
    const amount = card.querySelector('.cart__quantity');
    const currentAmount = parseInt(amount.textContent, 10);
    amount.textContent = currentAmount + 1;
  };
  
function decreaseCartProductQuantity(evt) {
    const card = evt.target.closest('.cart-product');
    const amount = card.querySelector('.cart__quantity');
    const currentAmount = parseInt(amount.textContent, 10);
    if (currentAmount > 1) amount.textContent = currentAmount - 1;
}

function getProductInfo(event) {
  const currentProduct = event.currentTarget.closest('.product');
  const currentProductInfo = {
    name: currentProduct.querySelector('.product__title').innerHTML,
    url: currentProduct.querySelector('.product__img').src,
    price: currentProduct.querySelector('.product__price').innerHTML,
  };
  return currentProductInfo;    
}

function addToCart(event) {
  const currentProductInfo = getProductInfo(event);
  const currentlyAddedProduct = document.getElementById(`${currentProductInfo.name}`);

  if (currentlyAddedProduct) {
    increaseCartProductQuantity(event);
  } else {
    renderMarkup(currentProductInfo, cart);
    let decreaseBtn = document.getElementById(currentProductInfo.name).querySelector('.decrease-btn');
    decreaseBtn.addEventListener('click', decreaseCartProductQuantity);
    let increaseBtn = document.getElementById(currentProductInfo.name).querySelector('.increase-btn');
    increaseBtn.addEventListener('click', increaseCartProductQuantity);
  }
  toggleEmptyCartMessage();
}