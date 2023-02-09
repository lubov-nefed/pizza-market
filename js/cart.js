import { renderMarkup } from './render.js';
export { addToCart };

function toggleEmptyCartMessage() {
  const cart = document.querySelector('.cart');
  const emptyCartMessage = document.querySelector('#emptyMessage');
  if (cart.innerText != '') {
    emptyCartMessage.classList.add('hidden');
  } else {
    emptyCartMessage.classList.remove('hidden');
  }
}

function getInputValue(event) {
  let value = event.target.closest('.cart-quantity').querySelector('.cart__quantity').value
  return value;
}
function countProductSum(event) {
  let inputValue = getInputValue(event);
  let cartProductSum = event.target.closest('.cart-product').querySelector('.cart-product__sum');
  let price = cartProductSum.dataset.price;
  cartProductSum.innerText = inputValue * price + '$';
}

const increaseCartProductQuantity = (evt) => {
    const card = evt.target.closest('.cart-product') || document.getElementById(evt.target.parentElement.querySelector('.product__title').textContent);
    const amount = card.querySelector('.cart__quantity');
    const currentAmount = parseInt(amount.value, 10);
    amount.value = currentAmount + 1;
    countProductSum(evt);
  };
  
function decreaseCartProductQuantity(evt) {
    const card = evt.target.closest('.cart-product');
    const amount = card.querySelector('.cart__quantity');
    const currentAmount = parseInt(amount.value, 10);
    if (currentAmount > 1) {
      amount.value = currentAmount - 1;
      countProductSum(evt);
    }
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

function deleteCartProduct(event) {
  event.currentTarget.parentElement.remove();
  toggleEmptyCartMessage();
}

function checkInput(event) {
  let inputValue = getInputValue(event);
  if ((inputValue === '' || '0') || inputValue.includes('.')) {
    event.target.value = parseInt(inputValue, 10) || 1;  
  }
  countProductSum(event);
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
    let deleteBtn = document.getElementById(currentProductInfo.name).querySelector('.cart-delete');
    deleteBtn.addEventListener('click', deleteCartProduct);
    let input = document.getElementById(currentProductInfo.name).querySelector('.cart__quantity');
    input.addEventListener('change', checkInput);
  }
  toggleEmptyCartMessage();
}