import {renderCatalogue} from './render.js';
export async function getProductsData() {//Получаем массив данных товаров
    let content = [];
    try {
        let response = await fetch('https://my-json-server.typicode.com/lubov-nefed/ajax-training/db');
        if (response.ok) content = await response.json();
    } catch (err) {
        console.dir(err);
    }
    
    renderCatalogue(content.products);
} 