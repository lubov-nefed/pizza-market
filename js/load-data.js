export { getProductsData };

async function getProductsData(onsuccess, onerror) {
  let content = [];
  try {
    const response = await fetch('https://my-json-server.typicode.com/lubov-nefed/ajax-training/db');
    if (response.ok) {
      content = await response.json();
      //return content.products;
      onsuccess(content.products);
    } else throw Error('Response is not ok');
  } catch (err) {
    // eslint-disable-next-line no-console
    //console.error(err);
    onerror();
  }
  return content;
}