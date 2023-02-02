import { getProductsData } from './load-data.js';
import { createCatalogue } from './catalogue.js';

getProductsData(createCatalogue, ()=>{renderErr()});