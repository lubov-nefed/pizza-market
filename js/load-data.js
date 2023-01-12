import {renderCatalogue} from './render.js';
export async function getProductsData() {//Получаем массив данных товаров
    let response = await fetch('https://my-json-server.typicode.com/lubov-nefed/ajax-training/db');
    let content = await response.json();
    renderCatalogue(content.products);
} 