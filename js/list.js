// ToDo: завести переменные под DOM-элементы
// и найти их с помощью querySelector

export function addListenerToBtn(clasName) {//Добавляем обработчик события на кнопки "Добавить в корзину"
    const btnCollection = document.querySelectorAll(clasName);
    if (clasName == '.product-btn') btnCollection.forEach(element =>  element.addEventListener('click', addToCart))
    else if (clasName == '.decrease-btn') btnCollection.forEach(element =>  element.addEventListener('click', decreaseCartProductQuantity))
    else if (clasName == '.increase-btn') btnCollection.forEach(element =>  element.addEventListener('click', increaseCartProductQuantity))
    
}

function addToCart(event) {               
    let currentProduct = event.currentTarget.closest('.product');     
    let currentProductInfo = {
        title: currentProduct.querySelector('.product__title').innerHTML, 
        imgSrc: currentProduct.querySelector('.product__img').src, 
        price: currentProduct.querySelector('.product__price').innerHTML,
    };

    let currentlyAddedProduct = document.getElementById(`${currentProductInfo.title}`);    

    if (currentlyAddedProduct) {
        increaseCartProductQuantity(event);
    } else {//с инпутом не получилось сделать он обнулялся при каждом добавлении товара в корзину
        /*Добавление разметки нового товара в корзину*/
        cart.insertAdjacentHTML ('beforeend', `
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
        `)
        addListenerToBtn('.decrease-btn');
        addListenerToBtn('.increase-btn');
   
    }
    toggleEmptyCartMessage(); 
}

const emptyCartMessage = document.querySelector('#emptyMessage');
function toggleEmptyCartMessage() {
    cart.innerHTML  !== '' ? emptyCartMessage.classList.add('hidden') : emptyCartMessage.classList.remove('hidden');
}

const increaseCartProductQuantity = (evt) => {
    const card = evt.target.closest('.cart-product');
    const amount = card.querySelector('.cart__quantity');
    const currentAmount = parseInt(amount.textContent, 10);

    amount.textContent = currentAmount + 1;
}

// ToDo: поменять по аналогии с increaseCartProductQuantity
// функцию decreaseCartProductQuantity,
// а потом заменить span.cart__quantity на input.cart__quantity

function decreaseCartProductQuantity(event) {
    let productTitle = event.currentTarget.parentElement.parentElement.querySelector('.product__title');
    let productQuantity = document.getElementById(productTitle.innerHTML).querySelector('.cart__quantity').innerHTML;
    if (productQuantity > 1) document.getElementById(productTitle.innerHTML).querySelector('.cart__quantity').innerHTML--;//?--Почему не работает productQuantity--;  
}
