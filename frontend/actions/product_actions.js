import * as ProductAPIUtil from '../util/product_api_util';
import { receiveErrors } from './error_actions';
import { O_NOCTTY } from 'constants';

export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const requestProducts = searchFilters => dispatch => {
   return ProductAPIUtil.fetchProducts(searchFilters).then(data => dispatch(receiveProducts(data)));
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

export const requestProduct = id => dispatch => {
   return ProductAPIUtil.fetchProduct(id).then(product => dispatch(receiveProduct(product)));
};

export const receiveProduct = product => {
   return {
      type: RECEIVE_PRODUCT,
      product
   };
};

export const createProduct = product => dispatch => {
   return ProductAPIUtil.createProduct(product).then(product => dispatch(receiveProduct(product)),
      err => dispatch(receiveErrors(err.responseJSON)));
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