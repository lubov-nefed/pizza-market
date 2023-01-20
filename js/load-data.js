// Получаем массив данных товаров
export default async function getProductsData() {
  let content = [];
  try {
    const response = await fetch('https://my-json-server.typicode.com/lubov-nefed/ajax-training/db');
    if (response.ok) {
      content = await response.json();
      return content.products;
    }
    throw Error('Response is not ok');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
  return content;
}
