import { getProductsData } from './load-data.js';
import { createCatalogue } from './catalogue.js';
import { renderErr } from './error-handle.js'

getProductsData(createCatalogue, renderErr);
