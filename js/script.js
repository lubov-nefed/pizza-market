const products = document.getElementById('products');
const cart = document.getElementById('cart');
const emptyCartMessage = document.querySelector('#emptyMessage');

document.addEventListener("DOMContentLoaded", getProductsData);
//?-- Подходит ли это чтобы сделать вызов этой функции при загрузке страницы? Или использовать document.onload?

async function getProductsData() {//Получаем массив данных товаров
    let response = await fetch('https://my-json-server.typicode.com/lubov-nefed/ajax-training/db');
    let content = await response.json();
    let productsJson = content.products;
    renderCatalogue(productsJson);
}

function renderCatalogue(dataArr) {//Создаем разметку для каждого товара в каталоге
    for (obj of dataArr) {
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

function addListenerToBtn() {//Добавляем обработчик события на кнопки "Добавить в корзину"
    const btnCollection = document.querySelectorAll('.btn');
    btnCollection.forEach(element => {
        if(element.classList.contains('product-btn')) {
            element.addEventListener('click', addToCart);          
        } else if (element.classList.contains('increase-btn')) {            
            element.addEventListener('click', increaseCartProductQuantity);
        } else if (element.classList.contains('decrease-btn')) {
            element.addEventListener('click', decreaseCartProductQuantity);
        }
    }
    )
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
        cart.innerHTML += `
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
        `
        addListenerToBtn();
    }
    toggleEmptyCartMessage(); 
}

function toggleEmptyCartMessage() {
    cart.innerHTML  !== '' ? emptyCartMessage.classList.add('hidden') : emptyCartMessage.classList.remove('hidden');
}

function increaseCartProductQuantity(event) {
    let productTitle = event.currentTarget.parentElement.querySelector('.product__title') || event.currentTarget.parentElement.parentElement.querySelector('.product__title');
    +document.getElementById(productTitle.innerHTML).querySelector('.cart__quantity').innerHTML++;    
}

function decreaseCartProductQuantity(event) {
    let productTitle = event.currentTarget.parentElement.parentElement.querySelector('.product__title');
    let productQuantity = document.getElementById(productTitle.innerHTML).querySelector('.cart__quantity').innerHTML;
    if (productQuantity > 1) document.getElementById(productTitle.innerHTML).querySelector('.cart__quantity').innerHTML--;//?--Почему не работает productQuantity--;  
}