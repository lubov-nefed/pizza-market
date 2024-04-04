function renderMarkup(dataObj, targetEl) {
  let markup = '';
  if (targetEl === document.querySelector('.products')) {
    markup = `
      <div class="product">
      <img class="product__img" src="${dataObj.url}">
      <div class="product__text">
      <h4 class="product__title">${dataObj.name}</h4>
      <p class="product__ingredients">${dataObj.ingredients}</p>
      <p class="product__description">${dataObj.description}</p>
      <p class="product__price">${dataObj.price}$</p></div>
      <button class="product-btn btn">Add to Cart</button>
      </div>
      `;
  } else if (targetEl === document.querySelector('.cart')) {
    markup = `
      <div class="cart-product" id="${dataObj.name}">
      <img class="product__img" src="${dataObj.url}"/>
      <h4 class="product__title">${dataObj.name}</h4>
      <div class="cart-quantity">
      <button class="cart-btn decrease-btn btn" title="Decrease">-</button>
      <input class="cart__quantity" value="1" type="number"> 
      <button class="cart-btn increase-btn btn" title="Increase">+</button>                
      </div>
      <button class="cart-delete btn" title="Delete">
      <img class="cart-delete__img" 
      src="https://raw.githubusercontent.com/lubov-nefed/ajax-training/63683b87da2467a40237323e4fcd01f93fcbde46/images/delete-icon.svg"
      />
      </button>
      <p class="cart-product__sum" data-price="${dataObj.price.slice(0, -1)}">
      ${dataObj.price}
      </p>
      </div>
      `;
  }
  targetEl.insertAdjacentHTML('beforeend', markup);
}

export default renderMarkup;
