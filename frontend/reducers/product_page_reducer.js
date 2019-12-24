import {
    RECEIVE_PRODUCTS,
    RECEIVE_PRODUCT,
    REMOVE_PRODUCT
 } from '../actions/product_actions';

 const productPageReducer = (state = null, action) => {
    switch(action.type) {
        case RECEIVE_PRODUCT:
            return action.product.id;
        default:
            return state;
    }
 }

 export default productPageReducer;