async function getProductsData(onsuccess, onerror) {
  let content = [];
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/lubov-nefed/ajax-training/pizza-market"
    );
    if (response.ok) {
      content = await response.json();
      onsuccess(content.products);
    } else throw Error("Response is not ok");
  } catch (err) {
    onerror();
  }
}

export default getProductsData;
