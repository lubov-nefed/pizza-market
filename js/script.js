const products = document.getElementById('products');
const cart = document.getElementById('cart');

async function getProductsData() {//Получаем массив данных товаров
    let response = await fetch('https://my-json-server.typicode.com/lubov-nefed/ajax-training/db');
    let content = await response.json();
    let productsJson = content.products;
    for(obj of productsJson) {
        let {name, url, ingredients, description, price, oneSlice} = obj;        
        createProduct(name, url, ingredients, description, price, oneSlice);
    }
}
getProductsData();//?-- Как сделать вызов этой функции при загрузке страницы document.onload?

function checkCart() {//?--Как проверить есть ли в корзине сообщение от ом что она пуста и тогла добавить товар + проверить есть ли уже этот товар в корзине илил нет
    const emptyMessage = document.getElementById('emptyMessage');
    if (cart.firstElementChild == emptyMessage) emptyMessage.remove();
}

function createProduct(name, url, ingredients, description, price, oneSlice) {//Генерируем разметку/контент раздела "товары" в нашем магазине
    const product = document.createElement('div');//Создаем обертку дл одного товара
    product.className = 'product';

    const productImg = document.createElement('img');
    productImg.className = 'product__img';
    productImg.src = url;
    product.appendChild(productImg);

    const productText = document.createElement('div');//Создаем обуртку для текстового содержимого товара(название, цена и тп)
    productText.className = 'product__text';
    product.appendChild(productText);

    const productName = document.createElement('h4');
    productName.innerHTML = name;
    productText.appendChild(productName);

    const productIngredients = document.createElement('p');
    productIngredients.innerHTML = 'ingredients: ' + ingredients;
    productText.appendChild(productIngredients);

    const productDescription = document.createElement('p');
    productDescription.innerHTML = description;
    productText.appendChild(productDescription);

    const productPrice = document.createElement('p');
    productPrice.innerHTML = price + '$';
    productText.appendChild(productPrice);

    const addToCartBtn = document.createElement('button');//Создаем кнопку добавления товара в корзину
    addToCartBtn.className = 'product-btn';
    addToCartBtn.innerHTML = 'Add to Cart';
    addToCartBtn.addEventListener('click', addtoCart)//добавляем событие и функцию добавления в корзину
    product.appendChild(addToCartBtn);

    products.appendChild(product);
}


function addtoCart(event) {//?--Можно ли как-то через параметр передать в функцию id кннопки/то есть можно ли чем-то заменить currentTarget
    checkCart();
    const productName = event.currentTarget.parentElement.firstChild.nextSibling.firstChild.innerHTML;//заменить одинаковые обращения к элементам
    //На данный момент корзина пуста, элементов нет, узлы есть
    //?--Почему здесь есть пустые текстовые узлы когда я использую childNodes

    
    if (cart.firstElementChild && document.getElementById(productName)) {//Если в корзине уже есть хотя бы один элемент. Долго не могла понять что нужно делать без цикла.
        document.getElementById(productName).querySelector('.cart__input').value++;
    } else {
    /*Добавление разметки нового товара в корзину*/
     const cartProduct = document.createElement('div');
     cartProduct.className = 'cart-product';
     cart.appendChild(cartProduct);

     const img = event.currentTarget.parentElement.firstChild.cloneNode(true);
     cartProduct.appendChild(img);

     const title = event.currentTarget.parentElement.firstChild.nextSibling.firstChild.cloneNode(true);
     cartProduct.appendChild(title);

     cartProduct.id = title.textContent;

     const cartQuantity = document.createElement('div');
     cartQuantity.className = 'cart-quantity';
     cartProduct.appendChild(cartQuantity);

     const minusBtn = document.createElement('button');
     minusBtn.innerHTML = '-';
     minusBtn.className = 'cart-btn';
     minusBtn.setAttribute('title', 'Decrease');
     cartQuantity.appendChild(minusBtn);

     const cartInput = document.createElement('input');
     cartInput.className = 'cart__input';
     cartInput.value += 1;
     cartInput.setAttribute('maxlength', '3');
     cartQuantity.appendChild(cartInput);

     const plusBtn = document.createElement('button');
     plusBtn.innerHTML = '+';
     plusBtn.className = 'cart-btn';
     plusBtn.setAttribute('title', 'Increase');
     cartQuantity.appendChild(plusBtn);

     const cartDelete = document.createElement('button');
     cartDelete.className = 'cart-delete';
     cartDelete.setAttribute('title', 'Delete');
     const deleteImg = document.createElement('img');
     deleteImg.className = 'cart-delete__img';
     deleteImg.src = 'https://raw.githubusercontent.com/lubov-nefed/ajax-training/63683b87da2467a40237323e4fcd01f93fcbde46/images/delete-icon.svg';
     cartDelete.appendChild(deleteImg);
     cartProduct.appendChild(cartDelete);      
    }
 

//Добавляет цену одного товара из разметки
/*const price = event.currentTarget.parentElement.firstChild.nextSibling.lastChild.cloneNode(true);
price.innerHTML = price.innerHTML.slice(0, -1);
cartProduct.appendChild(price);*/
}
