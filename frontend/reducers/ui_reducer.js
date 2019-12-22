import { combineReducers } from 'redux';
import productPageReducer from './product_page_reducer.js';

const uiReducer = combineReducers({
    productId: productPageReducer
});

export default uiReducer;