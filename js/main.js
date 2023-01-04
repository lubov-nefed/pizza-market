import getProductsData from 'load-data.js';
const products = document.getElementById('products');
const cart = document.getElementById('cart');
const emptyCartMessage = document.querySelector('#emptyMessage');

getProductsData();