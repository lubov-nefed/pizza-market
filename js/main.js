/* eslint-disable import/extensions */
import getProductsData from './load-data.js';
import renderCatalogue from './render.js';

const data = await getProductsData();

renderCatalogue(data);
