import {
   RECEIVE_PRODUCTS,
   RECEIVE_PRODUCT,
   REMOVE_PRODUCT
} from '../actions/product_actions';
import {
   RECEIVE_FAVORITES
} from '../actions/favorite_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
   let newState;
   switch(action.type) {
      case RECEIVE_PRODUCTS:
         return action.products;
      case RECEIVE_PRODUCT:
         return merge({}, state, {[action.product.id]: action.product});
      case RECEIVE_FAVORITES:
         return merge({}, state, action.products)
      case REMOVE_PRODUCT:
         newState = state;
         delete newState[action.productId];
         return newState;
      default:
         return state;
   }
}
