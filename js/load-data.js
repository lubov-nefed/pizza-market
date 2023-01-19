// Получаем массив данных товаров
export async function getProductsData() {
    let content = [];
    try {
        let response = await fetch('https://my-json-server.typicode.com/lubov-nefed/ajax-training/db');
        if (response.ok) {
            content = await response.json();
            return content
        } else {
            throw Error('Response is not ok');
        }
    } catch (err) {
        console.error(err);
        return content;
    }
}
