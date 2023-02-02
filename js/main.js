import { getProductsData } from './load-data.js';
import { createCatalogue } from './catalogue.js';

//const data = await getProductsData();
getProductsData(createCatalogue, ()=>{renderErr()});

createCatalogue(data);