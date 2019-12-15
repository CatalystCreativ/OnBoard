import * as ProductAPIUtil from '../util/product_api_util';
import { receiveErrors } from './error_actions';
import { O_NOCTTY } from 'constants';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const requestProducts = (filters) => dispatch => {
   return ProductAPIUtil.fetchProducts(filters).then(products => dispatch(receiveProducts(products)));
};

// export const requestFavoriteProducts = userId => dispatch => {
//    return ProductAPIUtil.fetchFavoriteProducts(userId).then(products => dispatch(receiveProducts(products)));
// }

const receiveProducts = products => {
   return {
      type: RECEIVE_PRODUCTS,
      products
   };
};

export const requestProduct = (userId, productId) => dispatch => {
   return ProductAPIUtil.fetchProduct(userId, productId).then(product => dispatch(receiveProduct(product)));
};

export const receiveProduct = product => {
   return {
      type: RECEIVE_PRODUCT,
      product
   };
};

export const createProduct = (product, id) => dispatch => {
   return ProductAPIUtil.createProduct(product, id).then(product => dispatch(receiveProduct(product)),
      err => console.log(err.responseJSON)/*dispatch(receiveErrors(err.responseJSON))*/);
};

export const updateProduct = data => dispatch => {
   return ProductAPIUtil.updateProduct(data).then(product => dispatch(receiveProduct(product)),
      err => dispatch(receiveErrors(err.responseJSON)));
};

const removeProduct = id => {
   return {
      type: REMOVE_PRODUCT,
      productId: id
   };
};

export const deleteProduct = id => dispatch => {
   return ProductAPIUtil.deleteProduct(id).then(() => dispatch(removeProduct(id)));
};