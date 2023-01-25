/* eslint-disable no-use-before-define */
const increaseCartProductQuantity = (evt) => {
  const card = evt.target.closest('.cart-product');
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

const cart = document.querySelector('.cart');
const emptyCartMessage = document.querySelector('#emptyMessage');
function toggleEmptyCartMessage() {
  if (cart.innerHTML !== '') {
    emptyCartMessage.classList.add('hidden');
  } else {
    emptyCartMessage.classList.remove('hidden');
  }
}

function addToCart(event) {
  const currentProduct = event.currentTarget.closest('.product');
  const currentProductInfo = {
    title: currentProduct.querySelector('.product__title').innerHTML,
    imgSrc: currentProduct.querySelector('.product__img').src,
    price: currentProduct.querySelector('.product__price').innerHTML,
  };

  const currentlyAddedProduct = document.getElementById(`${currentProductInfo.title}`);

  if (currentlyAddedProduct) {
    increaseCartProductQuantity(event);
  } else {
    /* Добавление разметки нового товара в корзину */
    cart.insertAdjacentHTML('beforeend', `
        <div class="cart-product" id="${currentProductInfo.title}">
            <img class="product__img" src="${currentProductInfo.imgSrc}"/>
            <h4 class="product__title">${currentProductInfo.title}</h4>
            <div class="cart-quantity">
                <button class="cart-btn decrease-btn btn" title="Decrease">-</button>
                <span class="cart__quantity">1</span> 
                <button class="cart-btn increase-btn btn" title="Increase">+</button>                
            </div>
            <button class="cart-delete btn" title="Delete">
                <img class="cart-delete__img" 
                src="https://raw.githubusercontent.com/lubov-nefed/ajax-training/63683b87da2467a40237323e4fcd01f93fcbde46/images/delete-icon.svg"
                />
            </button>
            <p class="cart-product__sum">
                ${currentProductInfo.price}
            </p>
        </div>
        `);
    addListenerToBtn('.decrease-btn');
    addListenerToBtn('.increase-btn');
  }
  toggleEmptyCartMessage();
}

// Добавляем обработчик события на кнопки "Добавить в корзину"
export default function addListenerToBtn(clasName) {
  const btnCollection = document.querySelectorAll(clasName);
  if (clasName === '.product-btn') btnCollection.forEach((element) => element.addEventListener('click', addToCart));
  else if (clasName === '.decrease-btn') btnCollection.forEach((element) => element.addEventListener('click', decreaseCartProductQuantity));
  else if (clasName === '.increase-btn') btnCollection.forEach((element) => element.addEventListener('click', increaseCartProductQuantity));
}
